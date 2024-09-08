import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { join } from '../redux/missions/missionSlice';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

function Missions() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);

  const handleJoin = (missionId) => {
    dispatch(join(missionId));
  };

  return (
    <Container>
      <Row>
        {missions.map((mission) => (
          <Col key={mission.mission_id} md={4} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{mission.mission_name}</Card.Title>
                <Card.Text>{mission.description}</Card.Text>
                <Button
                  variant={mission.reserved ? 'danger' : 'primary'}
                  onClick={() => handleJoin(mission.mission_id)}
                >
                  {mission.reserved ? 'Cancel Mission' : 'Join Mission'}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Missions;
