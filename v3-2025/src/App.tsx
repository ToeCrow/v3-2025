import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Ada from './Components/Pages/Ada/Ada';
import Grandfather from './Components/Pages/Profilecard/Grandfather';
import Shoppingcart from './Components/Pages/Shoppingcart/Shoppingcart';

// Vi behöver importera typ för komponenter om det behövs
const App: React.FC = () => {
  return (
    <Router>
      <Navbar/>
      <main>
      <Routes>
        <Route path="/Ada" element={<Ada />} />
        <Route path="/ProfileCard" element={<Grandfather />} />
        <Route path="/Shoppingcart" element={<Shoppingcart />} />
        {/* <Route path="/task3" element={<Task3 />} /> */}
      </Routes>
      </main>
    </Router>
  );
};

export default App;
