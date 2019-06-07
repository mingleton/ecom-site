import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';
import Details from '../details'

class SignInForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        const links = [
            {
                title: 'hey there',
                onClick: () => console.log('hey there')
            }
        ]
        return (
            <form onSubmit={handleSubmit} className = {`${className}sign-in-form`}>
                <Field className='sign-in-form__email' 
                type='email'
                title='Email'
                placeholder='Email'
                name= 'Email'
                component={FormInput}/>
                 <Field className='sign-in-form__password' 
                type='password'
                title='Password'
                placeholder='Password'
                name= 'password'
                component={FormInput}/>
                <div className = 'sign-in-form__line'></div>
                <Field className='sign-in-form__login' 
                onClick={() => console.log('submit')}
                type='submit'
                title='Login'
                name= 'login'
                component={FormButton}/>
                <Details className = 'sign-in-form__details' title='QuickLinks' links= {links}/> 
            </form>
        )
    }
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm);

export default SignInForm