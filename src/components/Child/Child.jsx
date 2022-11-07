import React, { Component } from 'react';

class Child extends Component {

    render() {
        let { productName, id, Salary, onSale,quntity } = this.props.products
         return (
            <div className='p-5  relative'>
                <h1>index:{id}</h1>
                <h4>productName : {productName} </h4>
                <h4>Salary   : {Salary} </h4>
                <h4>quntity   : {quntity} </h4>
                <div className="d-grid gap-2">
                  <button type="button" onClick={()=>this.props.delete(id)}  className="btn btn-danger fw-bold">Delete</button>
                  <button type="button" onClick={()=>this.props.update(this.props.products)}  className="btn btn-success  fw-bold">Update</button>
                </div>
                {
                    onSale && (
                        <span className='bg-danger p-2 text-light   absolute'> onSale</span>
                    )
                }
            </div>
        );
    }
}

export default Child;
