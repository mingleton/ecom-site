import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
// import { connect } from 'react-redux';


import { FormInput, FormButton } from '../formFields';



import history from '../../history';
import OrderSummary from './orderSummary';
import { UnderlinedTitle } from './orderInfo';

class PaymentForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
       
        return (
            <form onSubmit={handleSubmit} className={`${className} payment-form`}>
                
                <Field className='payment-form__name'
                type='name'
                title='Name on Credit Card'
                placeholder='Name'
                name='name'
                component={FormInput}/>

                <Field className='payment-form__card'
                type='card'
                title='Credit Card Number'
                placeholder='____-____-____-____'
                name='card'
                component={FormInput}/>

                <Field className='payment-form__expiration'
                type='expiration'
                title='Expiration Date'
                placeholder='Expiration Date'
                name='expiration'
                component={FormInput}/>


                <Field className='payment-form__ccv'
                type='ccv'
                title='CCV'
                placeholder='ccv'
                name='ccv'
                component={FormInput}/>

                <div className='payment-form__line'></div>
                <Field className='payment-form__pay-complete'
                onClick={() => history.push('/information/paymentInfo')}
                type='submit'
                title='Pay and Complete'
                name='pay-complete'
                component={FormButton}/>

                <Field className='payment-form__back'
                onClick= {() => history.push('/order/shippingInfo')}
                type='button'
                title='Back'
                name='back'
                short= {true}
                component={FormButton}/>

                <OrderSummary className='payment-form__order-summary'/>

                <div className='payment-form__shipping-info shipping-info'>
                    <UnderlinedTitle className='shipping-info__title' title='Shipping To'/>
                    <div className='shipping-info_name small-text'>Michael</div>
                    <div className='shipping-info_address small-text'>23 Jump Street</div>
                </div>

            </form>
        )
    }
}


PaymentForm = reduxForm({
    form: 'PaymentForm'
})(PaymentForm);

// function mapStateToProps(state) {
//     const { name, address } = state.user.user;
//     return {name, address}
// }

// PaymentForm = connect(mapStateToProps)(PaymentForm);

export default PaymentForm;