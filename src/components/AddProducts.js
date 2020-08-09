import React from 'react';
import { connect } from 'react-redux';
import { addProducts } from '../Redux/action';
import style from '../Auth/Login.module.css'

class AddProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            id:'',
            productName:'',
            price:'',
            url:'',
            category:''
         }
    }

    handleChange=(e)=>{
        this.setState({

            [e.target.name]: e.target.value
        })
    }

    render() { 
        const {products, addProducts} = this.props;
        const {id, productName, url, price, category} = this.state;
        const {handleChange} = this
        console.log(products)
        return ( 
            <div className={style.card}>
                <h2 className="text-center pt-3">Add Products</h2>
                <div className='form-row mt-1 p-4' >
                    <div className="form-group col-12">
                        <div className="row">
                    <label className="col-4" htmlFor="id"><h5>Product ID</h5></label>
                <input className="form-control col-7" type="text" name="id" placeholder="Enter the ID" value={id} onChange={handleChange} />
                </div>
                </div>
                <br/>

                <div className="form-group col-12">
                    <div className="row">
                    <label className="col-4" htmlFor="name"><h5>Product Name</h5></label>
                <input className="form-control col-7" type="text" name="productName" placeholder="product name" value={productName} onChange={handleChange} />
                </div>
                </div>
                <br/>

                <div className="form-group col-12">
                    <div className="row">
                    <label className="col-4" htmlFor="url"><h5>Product URL</h5></label>
                <input className="form-control col-7" type="text" name="url" placeholder="Enter the url" value={url} onChange={handleChange} />
                </div>
                </div>
                <br/>

                <div className="form-group col-12">
                    <div className="row">
                    <label className="col-4" htmlFor="price"><h5>Price</h5></label>
                <input className="form-control col-7" type="text" name="price" placeholder="price" value={price} onChange={handleChange}/>
                </div>
                </div>
                <br/>

                <div className="form-group col-12">
                    <div className="row">
                    <label className="col-4" htmlFor="category"><h5>Category</h5></label>
                <input className="form-control col-7" type="text" name="category" placeholder="category" value={category} onChange={handleChange} />
                </div>
                </div>
                <br/>

                <div className="text-center pb-3">
                <button className=" btn btn-primary" onClick={()=>addProducts(this.state)}>Add Product</button>
                </div>
            </div>
            </div>
         );
    }
}

const mapStateToProps=(state)=>({
    products: state.productsArr
})

const mapDispatchToProps=(dispatch)=>({
    addProducts: (items)=>(dispatch(addProducts(items)))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddProducts)