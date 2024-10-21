import ListOfOrchids from "./ListOfOrchids";
import { Card, Row, Col } from "react-bootstrap";
import './Orchids.css'; 

const NaturalOrchids = () => {
  const naturalOrchids = ListOfOrchids.filter((orchid) => orchid.isNatural);

  return (
    <Row>
      {naturalOrchids.map((orchid) => (
        <Col key={orchid.id} sm={12} md={6} lg={4} className="">
          <Card className=" ">
            <Card.Img variant="top" src={orchid.image} className="orchid-image-container" />
            <Card.Body>
            <Card.Title>{orchid.id}</Card.Title>
              <Card.Title>{orchid.name}</Card.Title>
              <Card.Text>Rating: {orchid.rating}</Card.Text>
              <Card.Text>Color: {orchid.color}</Card.Text>
              <Card.Text>Origin: {orchid.origin}</Card.Text>
              <Card.Text>Category: {orchid.category}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default NaturalOrchids;
