import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, Button, Row, Col,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function DragonsItem({
  id, name, image, description, reserved, onReserve,
})
  {
  return (
    <Card className="mb-4 dragon-card">
      <Row className="g-0">
        <Col xs={12} md={4} className="text-center">
          <Card.Img
            variant="top"
            src={image}
            alt={name}
            className="img-fluid dragon-img"
          />
        </Col>
        <Col xs={12} md={8}>
          <Card.Body className="d-flex flex-column justify-content-between h-100">
            <div>
              <Card.Title className="dragon-name">{name}</Card.Title>
              <Card.Text className="dragon-desc">
                <strong>ID:</strong>
                {id}
                <br />
                {reserved && (
                  <span className="badge bg-danger me-2">Reserved</span>
                )}
                <br />
                {description}
              </Card.Text>
            </div>
            <Button
              variant={reserved ? 'danger' : 'primary'}
              onClick={() => onReserve(id)}
              className="reserve-btn mt-3 mt-md-auto"
            >
              {reserved ? 'Cancel Reservation' : 'Reserve Dragon'}
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

DragonsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  onReserve: PropTypes.func.isRequired,
};

export default DragonsItem;
