import React from 'react'
import _ from 'lodash'
import './category.scss'

const Category = ({ categories, onSelectCategory }) => {
    return (
        <div className="card" style={{ height: 'fit-content' }}>
            <h1>Categories</h1>
            <div className="list-group list-group-flush">
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