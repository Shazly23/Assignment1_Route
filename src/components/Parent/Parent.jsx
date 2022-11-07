import React, { Component } from 'react';
import Child from '../Child/Child';

class Parent extends Component {
    // Component life cycel
    /**
     * Mounting
     * 1 - constructor
     * 2 - render()
     * 3 - Component Did mount
     */
    constructor(){
        super();
        console.log('Mounting 1-constractor method');
    }
    componentDidMount(){
        console.log('Mounting 3-componentDidMount');
    }
    /**
     * Updating
     * 1- render()
     * 2- Component Did Udated
     */
    componentDidUpdate(){
        console.log('Mounting 2-componentDidUpdate');
    }
    /**
     * Unmounting
     * 1- Component will Unmount
     */
    componentWillUnmount(){
        console.log('Mounting 1-componentWillUnmount');
    }
    state = {
        userName: 'Shazloka',
        products: [
            { id: 0, productName: 'Sony', Salary: 900, onSale: true, quntity: 100 },
            { id: 1, productName: 'Mi', Salary: 8000, onSale: true, quntity: 100 },
            { id: 2, productName: 'iphone', Salary: 1000, onSale: false, quntity: 100 },
            { id: 3, productName: 'MacBook', Salary: 4000, onSale: true, quntity: 100 },
            { id: 4, productName: 'Dell', Salary: 9000, onSale: false, quntity: 100 },
            { id: 5, productName: 'Lenovo', Salary: 2000, onSale: true, quntity: 100 },
        ]
    }
    delete = (id) => {
        // Deep copy
        let products = [...this.state.products]
        // Ation
        products = products.filter((item) => item.id !== id)
        // setState
        this.setState({ products: products })
    }
    update = (prodect) => {
        let allproducts = [...this.state.products]
        let currPro=allproducts.indexOf(prodect)
        allproducts[currPro].quntity+=10
        this.setState({prodect:allproducts})
        // prodect.quntity++
        // this.setState({ products })
    }
    
    render() {
        // reder second step in DidMount
        // reder first step in DidUpdate
        console.log('Mounting 2-render Method');
        console.log('DidMount 1-render Method');

        return (
            <div>
                <div className="row ">
                    {
                        this.state.products.map((item, index) => {
                            return (
                                <div key={index} className="bg-info m-1  col-md-3">
                                    <Child delete={this.delete} update={this.update} userName={this.state.userName} products={item} />
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        );
    }
}

export default Parent;
