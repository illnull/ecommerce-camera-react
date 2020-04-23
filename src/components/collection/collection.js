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
                        <Link to={{ pathname: `/shop/products/${product.id}` }} >
                            <div>
                                <Image src={!product.image ? 'https://www.spsco.com/media/catalog/product/cache/1/image/500x/8bffd1f41f6037eb62ae19998042eea4/placeholder/default/Image_Missing_placeholder.jpg' : product.image} height={240} width={240} />
                            </div>
                            <div>
                                ${(product.price / 100).toFixed(2)}<br />
                                {product.name}
                            </div>
                        </Link>
                    </div>
                )
            }
        </div>
    )
}

export default Collection