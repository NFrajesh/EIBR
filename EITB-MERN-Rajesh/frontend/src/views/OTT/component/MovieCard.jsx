import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./style.css";
const MovieCard = ({ info }) => {
  return (
    <>
      <Card className="my-card ">
        <Card.Img variant="top" src={info.imageurl} className="my-card-img" />
        <Card.Body className="d-flex align-items-between flex-wrap">
          <Card.Title>{info.title}</Card.Title>
          <Card.Text>{info.synopsis?.slice(0, 50) + "..."}</Card.Text>
          <Card.Text>Rating : {info.imdbrating || "-"}</Card.Text>
          <Button variant="primary">Add to watchlist</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default MovieCard;
