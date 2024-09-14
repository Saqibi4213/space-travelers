import React from 'react';
import { useSelector } from 'react-redux';
import { Card, ListGroup } from 'react-bootstrap';
import '../modules/Profile.css';

function MyProfile() {
  const rocketData = useSelector((state) => state.rockets.rocketData);
  const missionData = useSelector((state) => state.missions.missions);
  const dragonData = useSelector((state) => state.dragons.dragonData);

  const filterRockets = rocketData ? rocketData.filter((rocket) => rocket.reserved) : [];
  const filterMissions = missionData ? missionData.filter((mission) => mission.reserved) : [];
  const filterDragons = dragonData ? dragonData.filter((dragon) => dragon.reserved) : [];

  return (
    <div className="profile container mt-5">
      <h1 className="text-center mb-4">My Profile</h1>

      <Card className="mb-4">
        <Card.Header as="h5">My Missions</Card.Header>
        <ListGroup variant="flush">
          {filterMissions.length > 0 ? (
            filterMissions.map((mission) => (
              <ListGroup.Item key={mission.mission_id}>{mission.mission_name}</ListGroup.Item>
            ))
          ) : (
            <ListGroup.Item>No missions reserved.</ListGroup.Item>
          )}
        </ListGroup>
      </Card>

      <Card className="mb-4">
        <Card.Header as="h5">My Rockets</Card.Header>
        <ListGroup variant="flush">
          {filterRockets.length > 0 ? (
            filterRockets.map((rocket) => (
              <ListGroup.Item key={rocket.id}>{rocket.name}</ListGroup.Item>
            ))
          ) : (
            <ListGroup.Item>No rockets reserved.</ListGroup.Item>
          )}
        </ListGroup>
      </Card>

      <Card className="mb-4">
        <Card.Header as="h5">My Dragons</Card.Header>
        <ListGroup variant="flush">
          {filterDragons.length > 0 ? (
            filterDragons.map((dragon) => (
              <ListGroup.Item key={dragon.id}>{dragon.name}</ListGroup.Item>
            ))
          ) : (
            <ListGroup.Item>No dragons reserved.</ListGroup.Item>
          )}
        </ListGroup>
      </Card>
    </div>
  );
}

export default MyProfile;
