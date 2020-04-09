import React from 'react'
import axios from 'axios'


import Collection from '../../components/collection/collection'
import Category from '../../components/category/category'
import './shop.scss'

class ProductList extends React.Component {
    constructor() {
        super()

        this.state = {
            products: [],
            categories: [],
            category_id: ''
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/products/all.json`).then(res => {
            this.setState({ products: res.data })
        })

        axios.get(`http://localhost:3000/categories.json`).then(res => {
            this.setState({ categories: res.data })
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.category_id !== prevState.category_id) {
            if (this.state.category_id === 'newarrivals') {
                axios.get('http://localhost:3000/products/new.json').then(res => {
                    this.setState({ products: res.data })
                })
            }
            else if (this.state.category_id === 'all') {
                axios.get('http://localhost:3000/products/all.json').then(res => {
                    this.setState({ products: res.data })
                })
            } else {
                axios.get(`http://localhost:3000/categories/${this.state.category_id}.json`).then(res => {
                    this.setState({ products: res.data })
                })
            }
        }
    }

    onSelectCategory = (id) => {
        this.setState({
            category_id: id
        })
    }

    render() {
        return (
            <div style={{ display: 'flex', height: 'fit-content' }}>
                <Category categories={this.state.categories} onSelectCategory={this.onSelectCategory} />
                <Collection products={this.state.products} />
            </div>
        )
    }
}

export default ProductList
