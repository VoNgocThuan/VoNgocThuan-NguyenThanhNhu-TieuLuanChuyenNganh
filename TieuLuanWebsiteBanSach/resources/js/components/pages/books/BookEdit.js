import Axios from "axios";
import React from "react";
import { Card, Button, Badge, Spinner, Form, ListGroup } from 'react-bootstrap';
import { Link, withRouter } from "react-router-dom";
import { updateBook } from "../../../services/BookService";

class BookEdit extends React.Component {

  state = {
    book: {},
    name: '',
    author: '',
    description: '',
    status: '',
    price: '',
    image1: '',
    image2: '',
    image3: '',
    originalPrice: '',
    ratings: '',
    quantity: '',
    category_id: '',
    isloading: false,
    errors: {},
  };


  componentDidMount() {
    this.getBookDetails();
  };

  getBookDetails = () => {
    this.setState({ isloading: true });
    Axios.get(`http://127.0.0.1:8000/api/books/${this.props.match.params.id}`
    ).then((res) => {
      this.setState({
        book: res.data.data,
        isloading: false,
      });
    });
  }

  changeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitForm = async (e) => {
    e.preventDefault();
    const { history } = this.props;
    this.setState({ isloading: true })
    const postBody = {
      name: this.state.name,
      description: this.state.description,
      status: this.state.status,
      price: this.state.price,
      image1: this.state.image1,
      image2: this.state.image2,
      image3: this.state.image3,
      originalPrice: this.state.originalPrice,
      ratings: this.state.ratings,
      quantity: this.state.quantity,
      category_id: this.state.book.category_id,
    };
    // Axios.put('http://127.0.0.1:8000/api/books/'+this.props.match.params.id, postBody)
    // .then(res => {
    //     this.setState({ alert: "success" })
    // }).catch(error => {
    //     this.setState({ alert: "error" });
    // })

    const response = await updateBook(this.state.book.bookId, postBody);
    console.log("response", response);
    if (response.success) {
      this.setState({
        name: "",
        description: "",
        status: "",
        price: "",
        image1: "",
        image2: "",
        image3: "",
        originalPrice: "",
        ratings: "",
        quantity: "",
        isloading: false,
      });
      // history.push(`${PUBLIC_URL}categories/view/${this.state.book.category_id}`);
    } else {
      this.setState({
        errors: response.errors,
        isloading: false,
      });
    }
  };

  render() {
    return (
      <>
        <Card>
          <Card.Body>
            <h2>Sách mới</h2>
            <Form onSubmit={this.submitForm}>
              <div className="row">
                <div className="col-6">
                  <Form.Group controlId="name">
                    <Form.Label>Tên sách</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nhập tên sách"
                      value={this.state.name}
                      name="name"
                      onChange={(e) => this.changeInput(e)}
                    />
                  </Form.Group>
                  {this.state.errors && this.state.errors.name && (
                    <p className="text-danger">{this.state.errors.name[0]}</p>
                  )}
                </div>
                <div className="col-6">
                  <Form.Group controlId="description">
                    <Form.Label>Mô tả sách</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nhập mô tả sách"
                      as="textarea"
                      rows="3"
                      value={this.state.description}
                      name="description"
                      onChange={(e) => this.changeInput(e)}
                    />
                  </Form.Group>
                </div>
              </div>

              <div className="row">
                <div className="col-4">
                  <Form.Group controlId="originalPrice">
                    <Form.Label>Giá tiền gốc sách</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Nhập giá tiền gốc sách"
                      value={this.state.originalPrice}
                      name="originalPrice"
                      onChange={(e) => this.changeInput(e)}
                    />
                  </Form.Group>
                  {this.state.errors && this.state.errors.name && (
                    <p className="text-danger">{this.state.errors.name[0]}</p>
                  )}
                </div>
                <div className="col-4">
                  <Form.Group controlId="price">
                    <Form.Label>Giá tiền sách</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Nhập giá tiền sách"
                      value={this.state.price}
                      name="price"
                      onChange={(e) => this.changeInput(e)}
                    />
                  </Form.Group>
                  {this.state.errors && this.state.errors.name && (
                    <p className="text-danger">{this.state.errors.name[0]}</p>
                  )}
                </div>
                <div className="col-4">
                  <Form.Group controlId="status">
                    <Form.Label>Tình trạng</Form.Label>
                    <Form.Control as="select"
                      value={this.state.status}
                      name="status"
                      onChange={(e) => this.changeInput(e)}
                    >
                      <option>Chọn</option>
                      <option value="1">Hiện có</option>
                      <option value="0">Hết hàng</option>
                    </Form.Control>
                  </Form.Group>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <Form.Group controlId="quantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Nhập số lượng sách"
                      value={this.state.quantity}
                      name="quantity"
                      onChange={(e) => this.changeInput(e)}
                    />
                  </Form.Group>
                </div>
                {this.state.errors && this.state.errors.name && (
                  <p className="text-danger">{this.state.errors.name[0]}</p>
                )}
                <div className="col-4">
                  <Form.Group controlId="ratings">
                    <Form.Label>Ratings</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Nhập số sao sách"
                      value={this.state.ratings}
                      name="ratings"
                      onChange={(e) => this.changeInput(e)}
                    />
                  </Form.Group>
                  {this.state.errors && this.state.errors.name && (
                    <p className="text-danger">{this.state.errors.name[0]}</p>
                  )}
                </div>
                <div className="col-4">
                  <Form.Group controlId="author">
                    <Form.Label>Tác giả</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nhập tên tác giả"
                      value={this.state.author}
                      name="author"
                      onChange={(e) => this.changeInput(e)}
                    />
                  </Form.Group>
                </div>

              </div>
              <div className="row">
                <div className="col-4">
                  <Form.Group controlId="image1">
                    <Form.Label>Hình sách 1</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Link hình ảnh"
                      value={this.state.image1}
                      name="image1"
                      onChange={(e) => this.changeInput(e)}
                    />
                  </Form.Group>
                </div>
                <div className="col-4">
                  <Form.Group controlId="image2">
                    <Form.Label>Hình sách 2</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Link hình ảnh"
                      value={this.state.image2}
                      name="image2"
                      onChange={(e) => this.changeInput(e)}
                    />
                  </Form.Group>
                </div>
                <div className="col-4">
                  <Form.Group controlId="image3">
                    <Form.Label>Hình sách 3</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Link hình ảnh"
                      value={this.state.image3}
                      name="image3"
                      onChange={(e) => this.changeInput(e)}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <Form.Group controlId="new">
                    <Form.Label>Sách mới</Form.Label>
                    <Form.Control as="select"
                      value={this.state.new}
                      name="new"
                      onChange={(e) => this.changeInput(e)}
                    >
                      <option>Chọn</option>
                      <option value="1">Đúng</option>
                      <option value="0">Sai</option>
                    </Form.Control>
                  </Form.Group>
                </div>
                <div className="col-4">
                  <Form.Group controlId="bestsale">
                    <Form.Label>Sách bán chạy</Form.Label>
                    <Form.Control as="select"
                      value={this.state.bestsale}
                      name="bestsale"
                      onChange={(e) => this.changeInput(e)}
                    >
                      <option>Chọn</option>
                      <option value="1">Đúng</option>
                      <option value="0">Sai</option>
                    </Form.Control>
                  </Form.Group>
                </div>
                <div className="col-4">
                  <Form.Group controlId="toprating">
                    <Form.Label>Sách top đánh giá</Form.Label>
                    <Form.Control as="select"
                      value={this.state.toprating}
                      name="toprating"
                      onChange={(e) => this.changeInput(e)}
                    >
                      <option>Chọn</option>
                      <option value="1">Đúng</option>
                      <option value="0">Sai</option>
                    </Form.Control>
                  </Form.Group>
                </div>
              </div>
              {this.state.errors && this.state.errors.description && (
                <p className="text-danger">{this.state.errors.description[0]}</p>
              )}
              {
                this.state.isloading && (
                  <Button variant="primary" type="button" disabled>
                    <Spinner animation="border" role="status">
                      <span className="sr-only">Loading...</span>
                    </Spinner>
                    Saving...
                  </Button>
                )
              }
              {
                !this.state.isloading && (
                  <Button variant="primary" type="submit">
                    Lưu
                  </Button>
                )
              }
            </Form>
          </Card.Body>
        </Card>
      </>
    );
  }
}
export default withRouter(BookEdit);