import React from 'react'
import Image from 'react-image-resizer'

const Product = (props) => {
    console.log(props.location.product)
    const { id, price, name, description, image, qty } = props.location.product
    return (
        <div key={id}>
            <Image
                src={image}
                height={350}
                width={350}
            />
            <h1>{name}</h1>
            <h2>${price / 100}</h2>
            <h2>Stock: {qty}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Product
