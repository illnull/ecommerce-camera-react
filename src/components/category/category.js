import React from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import './category.scss'

const Category = ({ categories, onSelectCategory }) => {
    return (
        <div className="card" style={{ height: 'fit-content', marginRight: '100px', width: "130px" }}>
            <div className="list-group list-group-flush">
                <div className="list-group-item">
                    <Link to={{ pathname: `/shop/category/sale` }} >
                        <div onClick={() => onSelectCategory('sale')}>Sale</div>
                    </Link>
                </div>
                <div className="list-group-item">
                    <Link to={{ pathname: `/shop/category/new` }}>
                        <div onClick={() => onSelectCategory('newarrivals')}>New Arrivals</div>
                    </Link>
                </div>
                <div className="list-group-item">
                    <Link to={{ pathname: `/shop/category/all` }} >
                        <div onClick={() => onSelectCategory('all')}>All Products</div>
                    </Link>
                </div>
                {
                    categories.map(category =>
                        <div className="list-group-item" key={category.id} onClick={() => onSelectCategory(category.id)}>
                            <Link to={{ pathname: `/shop/category/${category.id}` }}>
                                {_.upperFirst(category.categoryDescription)}
                            </Link>
                        </div>
                    )
                }
            </div>
        </div >
    )
}

export default Category