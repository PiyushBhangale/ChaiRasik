import Product from './Product'
import React, { Component } from 'react'
import Title from "./Title"
import {storeProducts} from "../data"
import {ProductConsumer} from '../context'
export default class ProductList extends Component {
 
  render() {
    console.log(storeProducts,"here")
    return (
        
        <React.Fragment>
        <div className="py-5">
        <div className="container">
        <Title name="our" title="product"/>
        <div className="row">
        <ProductConsumer>
            {
                (value)=>{
                    return value.products.map(product=>{
                    return <Product id={product.id} product={product}></Product>
                    }
                     )
                }
            }
        </ProductConsumer>
        </div>
        </div>
        </div>
    </React.Fragment>
    )
  }
}
