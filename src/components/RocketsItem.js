import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/Rockets/RocketsSlice';

function RocketsItem({
  id, name, image, description, reserved,
}) {
  const dispatch = useDispatch();

  const handleReserve = (buttonId) => {
    dispatch(reserveRocket(buttonId));
  };

  return (
    <Card className="mb-3">
      <Card.Img variant="top" src={image} alt={name} style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {reserved && <span className="badge bg-danger me-2">Reserved</span>}
          {description}
        </Card.Text>
        <Button
          variant={reserved ? 'danger' : 'primary'}
          onClick={() => handleReserve(id)}
        >
          {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </Button>
      </Card.Body>
    </Card>
  );
}

RocketsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default RocketsItem;
