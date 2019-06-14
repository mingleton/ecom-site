import React, { Component } from 'react';
import PageTitle from '../pageTitle'
import AccountInformationForm from './accountInformationForm';

class AccountInformation extends Component {

    onSubmit = (fields) => {
        console.log(fields)
    }

    render() {
        return (
            <div className= 'account-info'>
                <PageTitle className='account-information' title='Account Information'/>
                <AccountInformationForm 
                    className= 'account-information__form'
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

export default AccountInformation;