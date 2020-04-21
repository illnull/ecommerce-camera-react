import React from 'react'
import axios from 'axios'
import FieldNotes from '../../components/home/field-notes/field-notes'
import './product.scss'

class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            product: [],
        }
    }

    componentWillMount() {
        axios.get(`http://localhost:3000/products/${this.props.match.params.id}.json`).then(res => {
            console.log(res)
            this.setState({
                product: res.data
            })
        })
    }

    render() {
        return (
            <div style={{ paddingTop: '5%' }}>
                <div style={{ paddingBottom: '10%' }}>
                    {
                        this.state.product.map(item =>
                            <div id={item.id} style={{ fontFamily: 'Oswald' }} className='container'>
                                <div style={{ display: 'flex' }}>
                                    <img
                                        alt={item.name} style={{ width: '100%' }} src={!item.image ? 'https://www.spsco.com/media/catalog/product/cache/1/image/500x/8bffd1f41f6037eb62ae19998042eea4/placeholder/default/Image_Missing_placeholder.jpg' : item.image}
                                    />
                                    <div className='product-details'>
                                        <h1 className='product-lines'>{item.name}</h1>
                                        <h2 className='product-lines'>{item.description}</h2>
                                        <h3 className='product-lines'>${item.price / 100}</h3>
                                        <h3 className='product-lines'>Stock: {item.qty}</h3>
                                        <button onClick={(e) => this.props.handleAddToCart(e, item)} className="btn btn-primary" style={{ width: '50%' }}>Add to cart</button>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
                <FieldNotes />
            </div>
        )
    }
}

export default Product
