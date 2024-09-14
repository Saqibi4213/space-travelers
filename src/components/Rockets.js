import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataFromServer } from '../redux/Rockets/RocketsSlice';
import '../modules/Rocket.css';
import RocketsItem from './RocketsItem';

function Rockets() {
  const dispatch = useDispatch();
  const { loading, error, rocketData } = useSelector((state) => state.rockets);

  useEffect(() => {
    if (rocketData.length === 0) {
      dispatch(getDataFromServer());
    }
  }, [dispatch, rocketData.length]);

  return (
    <ul className="rocket-container">
      {loading && <p>Loading...</p>}
      {error && (
        <p>
          Error:
          {error}
        </p>
      )}
      {!loading && !error && rocketData.map((rocket) => (
        <RocketsItem
          key={rocket.id}
          rocket={rocket}
        />
      ))}
    </ul>
  );
}

export default Rockets;
