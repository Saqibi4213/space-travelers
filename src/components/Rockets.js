import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataFromServer } from '../redux/Rockets/RocketsSlice';
import '../modules/Rocket.css';
import RocketsItem from './RocketsItem';

function Rockets() {
  const dispatch = useDispatch();
  const selectedData = useSelector((state) => state.rockets);
  const { loading, error, rocketData } = selectedData;

  useEffect(() => {
    dispatch(getDataFromServer());
  }, [dispatch]);

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
          id={rocket.id}
          name={rocket.name}
          image={rocket.image}
          description={rocket.description}
          reserved={rocket.reserved}
        />
      ))}
    </ul>
  );
}

export default Rockets;
