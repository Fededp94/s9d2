import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

const MyFooter = () => {
  return (
    <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Il mio Footer</Card.Title>
        <Card.Text>&copy; 2024 Inc.</Card.Text>
        <Button variant="primary">CLICCAMI!</Button>
      </Card.Body>
      <Card.Footer className="text-muted">-</Card.Footer>
    </Card>
  );
};
