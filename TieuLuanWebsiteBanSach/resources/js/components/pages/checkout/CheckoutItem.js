import Axios from "axios";
import React from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import CustomListGroupItem from "./CustomerListGroupItemCheckout"
class CheckoutItem extends React.Component {
    state = {
        totalCart: '',
        thue: '',
    }
    getTotalCart = () => {
        Axios.get('http://127.0.0.1:8000/totalCart').then((res) => {
            this.setState({
                totalCart: res.data,
            });
            console.log("Tổng số tiền trong giỏ hàng", this.state.totalCart);
        });
    }
    getTax = () => {
        Axios.get('http://127.0.0.1:8000/thue').then((res) => {
            this.setState({
                thue: res.data,
            });
            console.log("Tiền thuế các sản phẩm", this.state.thue);
        });
    }
    componentDidMount() {
        this.getTotalCart();
    }
    render() {
        return (
            <div>
                <h4>Item(s) for checkout: </h4>
                <br />
                <ListGroup className={"checkout-items-listgroup"}>
                    {
                        <CustomListGroupItem />
                    }
                </ListGroup>
                <hr />
                <div className={"total-cart-label-div"}>
                    <Row>
                        <Col lg={9} md={9}>
                            <span className={"total-cart-label"}>Thuế :</span>
                        </Col>

                        <Col lg={3} md={3}>
                            <span className={"total-cart-amount"}>{this.state.thue}đ</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={9} md={9}>
                            <span className={"total-cart-label"}>Thành tiền:</span>
                        </Col>

                        <Col lg={3} md={3}>
                            <span className={"total-cart-amount"}>{this.state.totalCart}đ</span>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default CheckoutItem;