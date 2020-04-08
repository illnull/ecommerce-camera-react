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
                                src={item.image}
                                height={450}
                                width={450}
                            />
                            ${item.price / 100}
                            {item.name}
                            {item.description}
                            {item.qty}
                        </div>)
                }
            </div>
        )
    }
}

export default Product
