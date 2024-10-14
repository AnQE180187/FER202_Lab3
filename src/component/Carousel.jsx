import { Row, Carousel } from "react-bootstrap";
import pizza1 from "../Images/pizza1.jpg";
import pizza2 from "../Images/pizza2.jpg";
import pizza3 from "../Images/pizza3.jpg";

const CarouselItem = () => {
    return (
        <Row>
        <Carousel>
          <Carousel.Item>
            <img src={pizza1} text="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={pizza2} text="Second slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={pizza3} text="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
    );
}

export default CarouselItem;