import React, { Component } from 'react'
import Header from './headernav/header';
import Navbar from './headernav/navbar';

class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        {/* <h1>Ecom</h1>
        {this.props.children} */}
        <Header/>
        <Navbar />
      </div>
    );
  }
}

export default Layout