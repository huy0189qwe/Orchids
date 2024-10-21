import { Container, Card } from "react-bootstrap";

const About = () => {
  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title>About Orchids</Card.Title>
          <Card.Text>
            Orchids are a diverse and widespread family of flowering plants, with blooms that are often colorful and fragrant.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default About;