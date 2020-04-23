// import React, { Component } from 'react'
// import axios from 'axios'
// import queryString from 'query-string'
// import Image from 'react-image-resizer'
// import { Link } from 'react-router-dom'


// export default class search extends Component {
//     constructor() {
//         super()

//         this.state = {
//             products: []
//         }
//     }

//     async componentDidMount() {
//         const queryParams = this.getQueryParams()
//         const categories = await getCategories()
//         const searchedProducts = await searchProducts(queryParams)
//         this.setState({
//             categories: categories,
//             products: searchedProducts
//         })
//         // axios.get(`http://localhost:3000/search.json?categoryId=${categoryId}&keyword=${keyword}`)
//     }

//     getQueryParams = () => {
//         const params = queryString.parse(this.props.location.search)
//         const queryParams = {
//             params: {
//                 categoryId: params['categoryId'],
//                 keyword: params['keyword']
//             }
//         }
//         return queryParams
//     }

//     render() {
//         console.log(this.state)
//         return (
//             <div className="row" style={{ width: '90%' }} >
//                 {
//                     this.state.products.map(product =>
//                         <div className="col" key={product.id}>
//                             <Link to={{ pathname: `/shop/products/${product.id}` }} >
//                                 <div>
//                                     <Image src={!product.image ? 'https://www.spsco.com/media/catalog/product/cache/1/image/500x/8bffd1f41f6037eb62ae19998042eea4/placeholder/default/Image_Missing_placeholder.jpg' : product.image} height={240} width={240} />
//                                 </div>
//                                 <div>
//                                     ${(product.price / 100).toFixed(2)}<br />
//                                     {product.name}
//                                 </div>
//                             </Link>
//                         </div>
//                     )
//                 }
//             </div>
//         )
//     }
// }

// export const searchProducts = async (queryParams) => {
//     const res = await axios.get(`https://localhost:3000/search.json`, queryParams).catch(error => {
//         console.log(error)
//         return Promise.reject(error)
//     })
//     return res.data
// }
