import React from 'react'
import { Link } from 'react-router-dom'
import Image from 'react-image-resizer'
import './collection.scss'

const Collection = ({ products }) => {
    return (
        <div className="row" style={{ width: '90%' }} >
            {
                products.map(product =>
                    <div className="col" key={product.id}>
                        <Link to={{ pathname: `/shop/products/${product.id}`, product: product }} >
                            <div>
                                <Image src={product.image} height={240} width={240} />
                            </div>
                            <div>
                                {product.price}
                                {product.name}
                            </div>
                        </Link>
                    </div>
                )
            }
        </div >
    )
}

export default Collection