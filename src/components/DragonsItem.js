import React from 'react';
import {
  Card, Button, Row, Col,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

function DragonsItem({ dragon, onReserve }) {
  const handleReserve = () => {
    onReserve(dragon.id);
  };

  return (
    <Card className="mb-4 dragon-card">
      <Row className="g-0">
        <Col xs={12} md={4} className="text-center">
          <Card.Img
            variant="top"
            src={dragon.image}
            alt={dragon.name}
            className="img-fluid dragon-img"
          />
        </Col>
        <Col xs={12} md={8}>
          <Card.Body className="d-flex flex-column h-100">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start">
              <Card.Title className="dragon-name mb-2 mb-md-0">{dragon.name}</Card.Title>
              <Card.Text className="dragon-id mb-2 mb-md-0">
                <strong>ID:</strong>
                {dragon.id}
              </Card.Text>
            </div>
            <Card.Text className="dragon-desc mt-3">
              {dragon.reserved && <span className="badge bg-danger me-3">Reserved</span>}
              {dragon.description}
            </Card.Text>
            <div className="mt-3 mt-md-auto w-200 d-flex justify-content-md-end">
              <Button
                variant={dragon.reserved ? 'danger' : 'primary'}
                onClick={handleReserve}
              >
                {dragon.reserved ? 'Cancel Reservation' : 'Reserve Dragon'}
              </Button>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

DragonsItem.propTypes = {
  dragon: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
  onReserve: PropTypes.func.isRequired,
};

export default DragonsItem;
