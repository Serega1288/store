import React, {useState, useContext, useEffect} from "react";
import Buy from '../../images/buy.svg';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import {Link} from "gatsby";
import { StateContext } from './layout'
import { DispatchContext } from './layout'

const CONTACT_MUTATION = gql`
  mutation createOrderMutation( $clientMutationId: String!, $firstName: String!, $phone: String! , $lineItems: [LineItemInput]  ){ 
    createOrder(input: {clientMutationId: $clientMutationId, billing: {firstName: $firstName, phone: $phone}, isPaid: false, lineItems: $lineItems, }) {
      clientMutationId
      order {
        id
        billing { 
          firstName
          phone
        }
      } 
      orderId 
    }
  } 
`

// mutation MyMutation {
//     createOrder(input: {clientMutationId: "CreateOrder", customerId: 6, paymentMethod: "bacs", paymentMethodTitle: "Direct Bank Transfer", billing: {address1: "969 Market", city: "San Francisco", address2: "", company: "", country: US, email: "john.doe@example.com", firstName: "John", lastName: "Doe", phone: "12903402832", postcode: "94103", state: "CA"}, shippingLines: {methodId: "flat_rate", methodTitle: "flat_rate", total: "10"}, shipping: {address1: "969 Market", address2: "", city: "San Francisco", country: US, email: "john.doe@example.com", firstName: "JOhn", lastName: "Doe", phone: "180923843204", postcode: "94103", state: "CA"}, isPaid: true, lineItems: {productId: 30, quantity: 1}}) {
//         clientMutationId
//         order {
//             cartHash
//             currency
//         }
//     }
// }



export default () => {

    const state = useContext(StateContext)
    const dispatch = useContext(DispatchContext)

    function offPop() {
        dispatch({
            type: 'toggleFormStatus',
            payload: false
        })
        dispatch({
            type: 'toggleFormThenks',
            payload: false
        })
    }

    function onPopThenks() {
        dispatch({
            type: 'toggleFormThenks',
            payload: true
        })
    }


    const [firstNameValue, setFirstNameValue] = useState('')
    const [PhoneValue, setPhoneValue] = useState('')


    function resultData(data) {
        console.log('data-error', data.createOrder.orderId);
        if ( data.createOrder?.orderId ) {
            offPop()
            onPopThenks()
        }
    }



    return   ( <Mutation mutation={CONTACT_MUTATION}>

            {(createOrder, { loading, error, data }) =>  {

                useEffect(() => {
                    if (data?.createOrder?.orderId) {
                        resultData(data)
                    }
                }, [data])

                return (
                    <>


                        <div className={`PopBox popThenks ${state.popFormThenks?'active':''}`}>
                            <div className="PopForm">
                                <span onClick={offPop} className="exit"></span>
                                <div className="boxImg text-center">
                                    <img src={Buy} alt=""/>
                                </div>
                                <div className="title">
                                    спасибо за ваш заказ. <span className="order-n">{data?.createOrder?.orderId}</span>
                                </div>
                                <div className="text">
                                    Мы свяжемся с Вами в ближайшее время
                                </div>
                                {/*<div className="">*/}
                                {/*    <Link onClick={offPop} className="w100 btn style-1" to="/">перейти на главную</Link>*/}
                                {/*</div>*/}
                            </div>
                            <div onClick={offPop} className="shadow"></div>
                        </div>

                        <div className={`PopBox BuyOneClick ${state.popFormStatus?'active':''}`}>
                            <div className="PopForm">
                                <span onClick={offPop} className="exit"></span>
                                <div className="boxImg text-center">
                                    <img src={Buy} alt=""/>
                                </div>
                                <div className="title">
                                    Купить: <span className="nameProduct">{state.popFormProduct?.title}</span>
                                    { /*
                            analog code

                            const productTitle = ''
                            if (state.popFormProduct && state.popFormProduct.title){
                                productTitle = state.popFormProduct.title
                            }

                            Купить: <span className="nameProduct">{productTitle}</span>

                            Если state.popFormProduct === null  то при обращении без проверки на существование обекта будет Fatel error

                        */}
                                </div>

                                <form
                                    onSubmit={
                                        async event => {
                                            event.preventDefault()
                                            {console.log('state.popFormProduct.id', state.popFormProduct )}
                                            createOrder({
                                                variables: {
                                                    clientMutationId: 'Checkout',
                                                    firstName: firstNameValue,
                                                    phone: PhoneValue,
                                                    //lineItems: {variationId: 23, quantity: 1}
                                                    lineItems: [{ productId :  state.popFormProduct.id, quantity: 1 }],

                                                    // lineItems: state.popFormProduct.map(item => (
                                                    //     {variationId: item.id, quantity: 1 }
                                                    // ))
                                                    //variationId: state.popFormProduct.id,    // #####    state.popFormProduct.id
                                                    //product: ProductValue
                                                }
                                            })
                                        }
                                    }
                                >


                                    <div className="input-group">
                                        <input type="text" id='firstNameInput' value={firstNameValue}
                                               required
                                               className="input"
                                               placeholder="Ваше имя"
                                               onChange={event => {
                                                   setFirstNameValue(event.target.value)
                                               }}
                                        />
                                    </div>
                                    <div className="input-group">
                                        <input type="tel" id='PhoneInput'
                                               required
                                               maxlength="12"
                                               placeholder="Ваш телефон"
                                               className="input"
                                               value={PhoneValue}
                                               onChange={event => {
                                                   setPhoneValue(event.target.value)
                                               }}
                                        />
                                    </div>
                                    <button type="submit" className="btn style-3 w100">{loading ? ( 'Отправка...' ) : ( 'Купить' ) } </button>
                                </form>

                            </div>
                            <div onClick={offPop} className="shadow"></div>
                        </div>
                    </>
                )
            } }
        </Mutation>
    )
}