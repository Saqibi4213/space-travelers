import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import Dragons from './components/Dragons';
import { getDataFromServer } from './redux/Rockets/RocketsSlice';
import { fetchDragons } from './redux/Dragons/DragonsSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataFromServer());
    dispatch(fetchDragons());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="missions" element={<Missions />} />
          <Route path="myprofile" element={<MyProfile />} />
          <Route path="dragons" element={<Dragons />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
