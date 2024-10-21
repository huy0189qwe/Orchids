// src/components/Orchids.jsx
import './Orchids.css';
import ListOfOrchids from "./ListOfOrchids";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Orchids = () => {
  return (
    <Row className="g-4">
      {ListOfOrchids.map((orchid) => (
        <Col key={orchid.id} xs={12} sm={6} md={4} lg={3}>
          <Card className="h-100 d-flex flex-column">

            <div className="orchid-image-container">
              <Card.Img variant="top" src={orchid.image} className="orchid-image-container" />
            </div>
            <Card.Body className="d-flex flex-column">
              <Card.Title>{orchid.id}</Card.Title>
              <Card.Title>{orchid.name}</Card.Title>
              <Card.Title>{orchid.isSpecial ? "Special Orchid" : "Regular Orchid"}</Card.Title>
              <Card.Text>
                <strong>Rating:</strong> {orchid.rating} / 5
              </Card.Text>
              <Card.Text>
                <strong>Color:</strong> {orchid.color}
              </Card.Text>
              <Card.Text>
                <strong>Origin:</strong> {orchid.origin}
              </Card.Text>
              <Card.Text>
                <strong>Category:</strong> {orchid.category}
              </Card.Text>
              <div className="mt-auto">
                <Link to={`/orchid/${orchid.id}`}>
                  <Button variant="primary">Detail</Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Orchids;