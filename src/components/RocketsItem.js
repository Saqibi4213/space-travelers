import React from 'react';
import {
  Card, Button, Row, Col,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/Rockets/RocketsSlice';
import '../modules/Rocket.css';

function RocketsItem({ rocket }) {
  const dispatch = useDispatch();

  const handleReserve = () => {
    dispatch(reserveRocket(rocket.id));
  };

  return (
    <Card className="mb-4 rocket-card">
      <Row className="g-0">
        <Col xs={12} md={4} className="text-center">
          <Card.Img
            variant="top"
            src={rocket.image}
            alt={rocket.name}
            className="img-fluid rocket-img"
          />
        </Col>
        <Col xs={12} md={8}>
          <Card.Body className="d-flex flex-column h-100">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start">
              <Card.Title className="rocket-name mb-2 mb-md-0">{rocket.name}</Card.Title>
              <Card.Text className="rocket-id mb-2 mb-md-0">
                <strong>ID:</strong>
                {rocket.id}
              </Card.Text>
            </div>
            <Card.Text className="rocket-desc mt-3">
              {rocket.reserved && <span className="badge bg-danger me-3">Reserved</span>}
              {rocket.description}
            </Card.Text>
            <div className="mt-3 mt-md-auto w-200 d-flex justify-content-md-end">
              <Button
                variant={rocket.reserved ? 'danger' : 'primary'}
                onClick={handleReserve}
                className="reserve-btn w-400 w-md-auto custom-width"
              >
                {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
              </Button>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

RocketsItem.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

export default RocketsItem;
