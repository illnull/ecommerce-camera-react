import React from 'react'
import axios from 'axios'
import Image from 'react-image-resizer'

class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            product: []
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
            <div>
                {
                    this.state.product.map(item =>
                        <div id={item.id}>
                            <Image
                                src={!item.image ? 'https://www.spsco.com/media/catalog/product/cache/1/image/500x/8bffd1f41f6037eb62ae19998042eea4/placeholder/default/Image_Missing_placeholder.jpg' : item.image}
                                height={450}
                                width={450}
                            />
                            <h1>{item.name}</h1>
                            <h2>{item.description}</h2>
                            <h3>${item.price / 100}</h3>
                            <h3>Stock: {item.qty}</h3>
                        </div>)
                }
            </div>
        )
    }
}

export default Product
