import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Product = (props) => {
  const { id, title, image, price, category, description, rating } = props.product;

  const [disabled, setDisabled] = useState(false)
  const [message, setMessage] = useState('Add to Cart')

  const disbleCartButton = () =>{
    setDisabled(true)
    setMessage('Added to Cart')
  }
  
  return (
    <div>
      <Card style={{ width: "18rem" }} className="card-product flex col-md-6 shadow p-3 mb-5 bg-body rounded me-2">
        <Card.Img variant="top" width={100} height={200} src={image} />
        <Card.Body>
          <Card.Title>{title.substring(0, 12)}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item >{category}</ListGroup.Item>
          <ListGroup.Item >{rating.count} (in stock)</ListGroup.Item>
          <ListGroup.Item className="badge bg-primary text-wrap">Rating {rating.rate}   <i className="fa fa-star" /></ListGroup.Item>
          <ListGroup.Item className="fw-bolder">${price}</ListGroup.Item>
        </ListGroup>
        <Card.Body className="pe-5">
          <a href={`product/${id}`} className="btn btn-outline-dark  me-1">
            <i className=" fa fa-shopping-basket me-1"></i>View
          </a>

          <button className="btn btn-outline-dark" disabled={disabled} onClick={() => props.addProductToCart(props.product)}>
            <i onClick={disbleCartButton} className=" fa fa-cart-plus me-1"></i>{message}
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
