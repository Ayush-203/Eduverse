import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Hero from './Components/Hero/Hero';
// import Atten from './Components/Pages/Attend/Atten';
import Dash from './Components/Pages/Dashboard/Dash';
import Contact from './Components/Subpages/Contact';

import Footer from './Components/Subpages/Footer';

// import Sidebar from './Components/Hero/Sidebar';
import It1 from './Components/Hero/It1';
import Play from './Components/Hero/Play';
import Sidebar from './Components/Hero/Sidebar';
import Mern from './Components/Hero/Mern';
import Mernplay from './Components/Hero/Mernplay';

import Final from './Components/Pages/Codepen/Final';
import Elib from './Components/Pages/Elib/Elib';























function App() {



  return (
    <div className="App">


      <BrowserRouter>
        <Navbar />













        <Routes>
          <Route path="/" element={<Hero />} />
          {/* <Route path="/pages/attend" element={<Atten />} /> */}


          <Route path="/subpages" element={<Contact />} />
          {/* <Route path="*" element={<NotFound />} /> */}

          {/* <Route path="/pages/reg" element={<Reg />} /> */}




          {/* AI system ...............................*/}



          {/* E-library system ...............................*/}
          <Route path="/pages/elib" element={<Elib />} />

          {/* CODE EDITOR.............. .........................*/}
          <Route path="/pages/codepen" element={<Final />} />


          {/* PLAYER AND PAGES OF VIDEO COURSE............*/}
          <Route exact path='/It1' element={<It1 />} />
          <Route exact path='/Mern' element={<Mern />} />
          {/* Play....................................... */}
          <Route path="/:coursenameMern" element={<Mernplay />} />
          <Route path="/:coursename" element={<Play />} />


        </Routes>


        <Footer />





      </BrowserRouter>
    </div>
  );
}

export default App;
