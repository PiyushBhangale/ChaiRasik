import Product from './Product'
import React, { Component } from 'react'
import Title from "./Title"
import {storeProducts} from "../data"
export default class ProductList extends Component {
    state={
        products:[]
    }
  render() {
    console.log(storeProducts,"here")
    return (
        
        <React.Fragment>
        <div className="py-5">
        <div className="container">
        <Title name="our" title="product"/>
        <div className="row">

        </div>
        </div>
        </div>
    </React.Fragment>
    )
  }
}
