import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../modules/Dragon.css';
import DragonsItem from './DragonsItem';
import { fetchDragons, reserveDragon } from '../redux/Dragons/DragonsSlice';

function Dragons() {
  const dispatch = useDispatch();
  const { loading, error, dragonData } = useSelector((state) => state.dragons);

  useEffect(() => {
    dispatch(fetchDragons());
  }, [dispatch]);

  console.log('Dragon Data:', dragonData); // Add this line

  const handleReserve = (id) => {
    dispatch(reserveDragon(id));
  };

  return (
    <ul className="dragon-container">
      {loading && <p>Loading...</p>}
      {error && (
        <p>
          Error:
          <br />
          {error}
        </p>
      )}
      {!loading && !error && (
        dragonData.map((dragon) => (
          <DragonsItem
            key={dragon.id}
            id={dragon.id}
            name={dragon.name}
            image={dragon.flickr_images[0]}
            description={dragon.description}
            reserved={dragon.reserved}
            onReserve={handleReserve}
          />
        ))
      )}
    </ul>
  );
}

export default Dragons;