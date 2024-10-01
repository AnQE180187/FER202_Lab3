import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';


function ContainerExample() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleBuyClick = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.name === item);

    if (existingItem) {
      setCartItems(cartItems.map(cartItem =>
        cartItem.name === item ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      ));
    } else {
      setCartItems([...cartItems, { name: item, quantity: 1 }]);
    }
  };

  const handleQuantityChange = (itemName, increment) => {
    setCartItems(cartItems.map(item => {
      if (item.name === itemName) {
        const updatedQuantity = item.quantity + increment;
        return { ...item, quantity: updatedQuantity > 0 ? updatedQuantity : 0 };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const handleCartToggle = () => {
    setShowCart(!showCart);
  };

  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Container>
      <Row>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#">PizzaHouse</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">About Us</Nav.Link>
                <Nav.Link href="#action2">Contact</Nav.Link>

              </Nav>
              <Form className="d-flex">

                <Button variant="primary" onClick={handleCartToggle}>Item: {totalItemsInCart}
                </Button>
                <Modal show={showCart} onHide={handleCartToggle}>
                  <Modal.Header closeButton>
                    <Modal.Title>Using Grid in Modal</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {cartItems.length === 0 ? (
                      <p>No item, please add some.</p>
                    ) : (
                      <ListGroup>
                        {cartItems.map((item) => (
                          <ListGroup.Item key={item.name}>
                            <Row>
                              <Col xs={3}>{item.name}</Col>
                              <Col xs={3}>{item.quantity}</Col>
                              <Col xs={3}>
                                <Button
                                  variant="primary"
                                  size="sm"
                                  onClick={() => handleQuantityChange(item.name, 1)}
                                >
                                  +
                                </Button>{' '}
                              </Col>
                              <Col xs={3}>           
                                <Button
                                  variant="danger"
                                  size="sm"
                                  onClick={() => handleQuantityChange(item.name, -1)}
                                >
                                  -
                                </Button>
                              </Col>
                            </Row>
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    )}
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="primary" onClick={handleCartToggle}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
      <Row>
        <Carousel>
          <Carousel.Item>
            <Image src="./Images/pizza1.jpg" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src="./Images/pizza2.jpg" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src="./Images/pizza3.jpg" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
      <Row className='mt-3'>
        <Col card1>
          <Card style={{ width: 'auto' }}>
            <Card.Img variant="top" src="./Images/menu1.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button onClick={() => handleBuyClick('Card title 1')} variant="primary">Buy</Button>
            </Card.Body>
          </Card></Col>
        <Col card2>
          <Card style={{ width: 'auto' }}>
            <Card.Img variant="top" src="./Images/menu2.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button onClick={() => handleBuyClick('Card title 2')} variant="primary">Buy</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col card3>
          <Card style={{ width: 'auto' }}>
            <Card.Img variant="top" src="./Images/menu3.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button onClick={() => handleBuyClick('Card title 3')} variant="primary">Buy</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col card4>
          <Card style={{ width: 'auto' }}>
            <Card.Img variant="top" src="./Images/menu4.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button onClick={() => handleBuyClick('Card title 4')} variant="primary">Buy</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerExample;