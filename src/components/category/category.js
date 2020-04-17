import React from 'react'
import _ from 'lodash'
import './category.scss'

const Category = ({ categories, onSelectCategory }) => {
    return (
        <div className="card" style={{ height: 'fit-content' }}>
            <div className="list-group list-group-flush">
                <div className="list-group-item" onClick={() => onSelectCategory('sale')}>Sale</div>
                <div className="list-group-item" onClick={() => onSelectCategory('newarrivals')}>New Arrivals</div>
                <div className="list-group-item" onClick={() => onSelectCategory('all')}>All Products</div>
                {
                    categories.map(category =>
                        <div className="list-group-item" key={category.id} onClick={() => onSelectCategory(category.id)}>
                            {_.upperFirst(category.categoryDescription)}
                        </div>
                    )
                }
            </div>
        </div >
    )
}

export default Category