import React from 'react';
import { useSelector } from 'react-redux';
import '../modules/Profile.css';

function MyProfile() {
  const rocketData = useSelector((state) => state.rockets.rocketData);
  const missionData = useSelector((state) => state.missions.missions);
  const dragonData = useSelector((state) => state.dragons.dragonData);

  /* eslint-disable no-console */
  console.log('Rocket Data:', rocketData);
  console.log('Mission Data:', missionData);
  console.log('Dragon Data:', dragonData);

  const filterRockets = rocketData ? rocketData.filter((rocket) => rocket.reserved) : [];
  const filterMissions = missionData ? missionData.filter((mission) => mission.reserved) : [];
  const filterDragons = dragonData ? dragonData.filter((dragon) => dragon.reserved) : [];

  return (
    <div className="profile">
      <div className="mission-card">
        <h2 className="title-p">My Missions</h2>
        <ul className="profile-card">
          {filterMissions.length > 0 ? (
            filterMissions.map((mission) => (
              <li key={mission.mission_id} className="ul-list-item">{mission.mission_name}</li>
            ))
          ) : (
            <p>No missions reserved.</p>
          )}
        </ul>
      </div>
      <div className="rocket-card">
        <h2 className="title-p">My Rockets</h2>
        <ul className="profile-card">
          {filterRockets.length > 0 ? (
            filterRockets.map((rocket) => (
              <li key={rocket.id} className="ul-list-item">{rocket.name}</li>
            ))
          ) : (
            <p>No rockets reserved.</p>
          )}
        </ul>
        <h2 className="title-p">My Dragons</h2>
        <ul className="profile-card">
          {filterDragons.length > 0 ? (
            filterDragons.map((dragon) => (
              <li key={dragon.id} className="ul-list-item">{dragon.name}</li>
            ))
          ) : (
            <p>No dragons reserved.</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default MyProfile;
