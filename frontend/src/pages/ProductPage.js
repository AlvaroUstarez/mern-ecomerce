import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
//import Product from "../components/Product";
import { getProductDetail, createProductReview } from "../redux/actions/productActions";
import Rating from "../components/Rating";
import {
  Button,
  Card,
  Col,
  Form,
  FormSelect,
  //Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";

export const ProductPage = () => {
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const { loading, error, product } = productDetail;
  const { review, setReview } = useState({
    rating: 0,
    comment: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createProductReview(params.id, review));
  };

  //const productReviewCreate = useSelector((state) => state.productReviewCreate);

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    dispatch(getProductDetail(id));
  }, [dispatch, id]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            <Col sm={12} md={6} lg={4} xl={3}>
              <Card>
                <Card.Img variant="top" src={product.image} />
              </Card>
            </Col>

            <Col sm={12} md={4} lg={4} xl={3}>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <h1>{product.name}</h1>
                  </Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={12} md={4} lg={4} xl={3}>
              <Card>
                <Card.Body>
                  <Row>
                    <Col>
                      <strong>Precio</strong>
                    </Col>
                    <Col>
                      <strong>{product.price}</strong>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <strong>Stock</strong>
                    </Col>
                    <Col>
                      <strong>{product.countInStock}</strong>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <strong>Qty</strong>
                    </Col>
                    <Col>
                      <select className="form-select" id="exampleSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </Col>
                  </Row>
                </Card.Body>
                <button type="button" className="btn btn-primary btn-block">
                  Agregar al carrito
                </button>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col>
              <h2>Reviews</h2>
              <ListGroup variant="flush">
                {product?.reviews?.map((review) => (
                  <ListGroupItem key={review._id}>
                    <ListGroup.Item>
                      <strong>{review.name}</strong>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>
                        <Rating value={product.rating} />
                      </strong>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <p>{review.comment}</p>
                    </ListGroup.Item>
                  </ListGroupItem>
                ))}

                <ListGroupItem>
                  <h2>Escribir una review</h2>
                  <Form>onSubmit={submitHandler}
                    <Form.Group controlId="rating" className="mb-2">
                      <Form.Label>Rating</Form.Label>
                      <FormSelect
                        value={review?.rating}
                        onChange={(e) =>
                          setReview({ ...review, rating: e.target.value })
                        }
                      >
                        <option value="">Seleccionar</option>
                        <option value="1">1 - Malo</option>
                        <option value="2">2 - Regular</option>
                        <option value="3">3 - Bueno</option>
                        <option value="4">4 - Muy Bueno</option>
                        <option value="5">5 - Excelente</option>
                      </FormSelect>
                    </Form.Group>
                    <Button type="submit" variant="primary">
                      Enviar
                    </Button>
                  </Form>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ProductPage;
