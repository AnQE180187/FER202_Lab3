import React, { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Button, Row } from "react-bootstrap";
import data from "./data";

// CardItem component
const CardItem = ({
  image,
  title,
  price,
  salePrice,
  badge,
  handleAddToCart,
}) => (
  <Col lg={3} md={6} sm={12} className="mb-4 d-flex align-items-stretch">
    {/* Added shadow and hover effect for the card */}
    <Card className="h-100 text-center shadow-sm card-hover">
      <Card.Img variant="top" src={image} className="card-img-top" />
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title>{title}</Card.Title>

          {/* Badge */}
          {badge && (
            <div className="mb-2">
              <span className="badge bg-warning text-dark px-3 py-1">
                {badge}
              </span>
            </div>
          )}

          {/* Price Section */}
          <div className="price-section">
            {salePrice ? (
              <>
                <span className="text-muted text-decoration-line-through">
                  ${salePrice}
                </span>
                &nbsp;
                <span className="text-success">${price}</span>
              </>
            ) : (
              <span className="text-success">${price}</span>
            )}
          </div>
        </div>

        {/* Button */}
        <Button
          variant="primary"
          className="mt-auto btn-lg btn-hover"
          onClick={() => handleAddToCart({ image, title, price }, 1)}
        >
          Buy Now
        </Button>
      </Card.Body>
    </Card>
  </Col>
);

// CardList component
const CardList = ({ handleAddToCart }) => {
  const [products, setProducts] = useState(data);

   
  return (
    <Row className="justify-content-center mt-4">
      {products?.map((item) => (
        <CardItem
          key={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          salePrice={item.salelPrice}
          badge={item.badge}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </Row>
  );
};

export default CardList;