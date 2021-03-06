import React from 'react'
import axios from 'axios'
import _ from 'lodash'

import Collection from '../../components/collection/collection'
import Category from '../../components/category/category'
import './shop.scss'

class ProductList extends React.Component {
    constructor() {
        super()

        this.state = {
            products: [],
            categories: [],
            category_id: '',
            categoryId: '',
            keyword: '',
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
        if (this.state.keyword !== prevState.keyword || this.state.categoryId !== prevState.categoryId) {
            if (this.state.keyword !== '') {
                axios.get(`http://localhost:3000/search.json?categoryId=${this.state.categoryId}&keyword=${this.state.keyword}`).then(res => {
                    this.setState({ products: res.data })
                    console.log(res.data)
                })
            }
            else {
                axios.get(`http://localhost:3000/products/all.json`).then(res => {
                    this.setState({ products: res.data })
                })
            }
        }
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
            }
            else if (this.state.category_id === 'sale') {
                axios.get('http://localhost:3000/category/sale.json').then(res => {
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

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleDropList = (e) => {
        this.setState({
            categoryId: e.target.value
        })
    }

    render() {
        console.log(this.state)
        return (
            <div className="container" style={{ marginTop: "100px" }}>
                <form>
                    <select name='categoryId' onChange={this.handleDropList} style={{ height: '31px', marginBottom: "10px", fontFamily: 'Oswald', marginRight: '10px' }}>
                        <option value="">All</option>
                        {
                            this.state.categories.map(category =>
                                <option value={category.id}>
                                    {_.upperFirst(category.categoryDescription)}
                                </option>

                            )
                        }
                    </select>
                    <input type='text' name="keyword" placeholder='Product name' onChange={this.handleChange} value={this.state.keyword} style={{ fontFamily: 'Oswald' }} />
                </form>
                <div style={{ display: 'flex', height: 'fit-content', fontFamily: 'Oswald' }}>
                    <Category categories={this.state.categories} onSelectCategory={this.onSelectCategory} />
                    <Collection products={this.state.products} handleAddToCart={this.props.handleAddToCart} />
                </div>
            </div >
        )
    }
}

export default ProductList
