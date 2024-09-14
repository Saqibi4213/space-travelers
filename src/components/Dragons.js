import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDragons, reserveDragon } from '../redux/Dragons/DragonsSlice';
import DragonsItem from './DragonsItem';

function Dragons() {
  const dispatch = useDispatch();
  const { loading, error, dragonData } = useSelector((state) => state.dragons);

  useEffect(() => {
    if (dragonData.length === 0) {
      dispatch(fetchDragons());
    }
  }, [dispatch, dragonData.length]);

  const handleReserve = (id) => {
    dispatch(reserveDragon(id));
  };

  return (
    <ul className="dragon-container">
      {loading && <p>Loading...</p>}
      {error && (
      <p>
        Error:
        {error}
      </p>
      )}
      {!loading && !error && dragonData.map((dragon) => (
        <DragonsItem
          key={dragon.id}
          dragon={dragon}
          onReserve={handleReserve}
        />
      ))}
    </ul>
  );
}

export default Dragons;
