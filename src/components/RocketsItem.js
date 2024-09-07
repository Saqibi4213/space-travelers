import React from 'react';
import {
  Card, Button, Row, Col,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/Rockets/RocketsSlice';
import '../modules/Rocket.css';

function RocketsItem({
  id, name, image, description, reserved,
}) {
  const dispatch = useDispatch();

  const handleReserve = (buttonId) => {
    dispatch(reserveRocket(buttonId));
  };

  return (
    <Card className="mb-4 rocket-card">
      <Row className="g-0">
        <Col xs={12} md={4}>
          <Card.Img
            variant="top"
            src={image}
            alt={name}
            className="img-fluid rocket-img"
          />
        </Col>
        <Col xs={12} md={8}>
          <Card.Body className="d-flex flex-column h-100">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start">
              <Card.Title className="rocket-name mb-2 mb-md-0">{name}</Card.Title>
              <Card.Text className="rocket-id mb-2 mb-md-0">
                <strong>ID:</strong>
                {id}
              </Card.Text>
            </div>
            <Card.Text className="rocket-desc mt-3">
              {reserved && <span className="badge bg-danger me-2">Reserved</span>}
              {description}
            </Card.Text>
            <Button
              variant={reserved ? 'danger' : 'primary'}
              onClick={() => handleReserve(id)}
              className="reserve-btn mt-3"
            >
              {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

RocketsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default RocketsItem;
