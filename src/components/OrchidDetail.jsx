import { useParams } from "react-router-dom";
import ListOfOrchids from "./ListOfOrchids";
import { Card, Container } from "react-bootstrap";

const OrchidDetail = () => {
  const { id } = useParams();
  const orchid = ListOfOrchids.find((orchid) => orchid.id === id);

  if (!orchid) {
    return <h2 className="text-center">Orchid not found!</h2>;
  }

  
  const youtubeId = orchid.clip.split('v=')[1];
  const ampersandPosition = youtubeId.indexOf('&');
  const finalYoutubeId = ampersandPosition === -1 ? youtubeId : youtubeId.substring(0, ampersandPosition);

  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          
          <iframe 
            width="100%"
            height="300"
            src={`https://www.youtube.com/embed/${finalYoutubeId}`}
            title={orchid.name}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default OrchidDetail;