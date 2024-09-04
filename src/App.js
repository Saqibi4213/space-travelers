import React from "react";
function App() {
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
