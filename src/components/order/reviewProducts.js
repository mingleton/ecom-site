import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import ProductReview from './productReview';


class ReviewProducts extends Component {
    render() {
        const { className } = this.props;
        return  (
            <div className= {`${className} review-products`}>
                {
                    this.props.cartProducts.map(cartProduct => {
                        // return <h1 key={cartProduct._id}>{cartProduct.product.title}</h1>
                       return <ProductReview key={cartProduct._id}
                        {...cartProduct}
                        />
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { cartProducts } = state.user;
    return { cartProducts } 
}

ReviewProducts= connect(mapStateToProps)(ReviewProducts)

export default ReviewProducts;