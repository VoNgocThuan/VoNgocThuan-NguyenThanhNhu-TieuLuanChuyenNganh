import Axios from 'axios';
import React, { Component } from 'react';
import Product from './Product';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            booklist: [],
            listState: '1',
        }
        this.changeSlide = this.changeSlide.bind(this)
    };
    changeSlide(value) {
        this.setState({
            listState: { value }
        })
        console.log(value);
    }
    componentDidMount(){
        this.changeSlide('1')
    }
    componentWillMount() {
        Axios.get('http://127.0.0.1:8000/api/books')
            .then(res => {
                this.setState({ booklist: res.data.data });
            });
    }
    buyItem=(value)=>{
        this.props.temp=value;
    }
    render() {
        var namesButton = [
            {
                id: 1,
                keyid: '1',
                name: 'Mới'
            },
            {
                id: 2,
                keyid: '2',
                name: 'Bán Chạy'
            },
            {
                id: 3,
                keyid: '3',
                name: 'Top Đánh Giá'
            }
        ]
        var buttonNames = namesButton.map((btnName, index) => {
            return <button key={index} className={this.state.listState.value === btnName.keyid ? 'btnCategory active' : 'btnCategory'} onClick={() => { this.changeSlide(btnName.keyid) }}>{btnName.name}</button>
        });
        var listProducts = this.state.booklist.map((product, index) => {
            if (this.state.listState.value === '1') {
                if (product.new) {
                    return <Product key={index} bookId={product.bookId} img={product.image} name={product.name} author={product.author} price={product.price} temp={(value)=>{this.buyItem(value)}}></Product>
                }
            }
            else if (this.state.listState.value === '2') {
                if (product.bestsale) {
                    return <Product key={index} bookId={product.bookId} img={product.image} name={product.name} author={product.author} price={product.price} temp={(value)=>{this.buyItem(value)}}></Product>
                }
            }
            else {
                if (product.toprating) {
                    return <Product key={index} bookId={product.bookId} img={product.image} name={product.name} author={product.author} price={product.price} temp={(value)=>{this.buyItem(value)}}></Product>
                }
            }
        })
        return (
            <div className="sanpham">
                <div className="container">
                    <div className="title">SẢN PHẨM <span>CỦA CHÚNG TÔI</span></div>
                    <div className="boxCategory">
                        {buttonNames}
                    </div>
                    <div className="listProducts">
                        <div className="row">
                            {listProducts}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Products;