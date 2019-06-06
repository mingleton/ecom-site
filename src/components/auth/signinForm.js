import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';

class SignInForm extends Component {
    render() {
        const { className, handleSubmit } = this.props
        return (
            <form onSubmit={handleSubmit} className = {`${className}sign-in-form`}>
                <Field className='sign-in-form__email' type='email'
                title='Email'
                placeholder='Email'
                name= 'Email'
                component={FormInput}/>
                 <Field className='sign-in-form__password' 
                type='Password'
                title='Password'
                placeholder='Password'
                name= 'Password'
                component={FormInput}/>
                <div className = 'sign-in-form__line'/>
                 <Field className='sign-in-form__login' 
                onClick={() => console.log('submit')}
                type='submit'
                title='Login'
                name= 'login'
                component={FormButton}/>
            </form>
        )
    }
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm);

export default SignInForm