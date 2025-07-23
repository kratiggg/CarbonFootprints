// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage.jsx'; // Updated to .jsx
import Navbar from './Navbar.jsx'; // Updated to .jsx
import './App.css';
import Signup from './Signup.jsx';
import ActivityInput from './ActivityInput.jsx';
import RegisterPage from './RegisterPage.jsx';
import OrganizationForm from '/src/pages/OrganizationForm.jsx';
import GovernmentForm from './GovernmentForm.jsx';
import Aboutus from './Aboutus.jsx';
import { Carousel } from 'bootstrap';
import Slides from './components/Slides.jsx';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import OrganizationForm1 from '/src/pages/OrganizationForm1.jsx';
import OrganizationForm2 from './pages/OrganizationForm2.jsx';
import OrganizationForm3 from './pages/OrganizationForm3.jsx';
import PopupModal from './pages/PopupModal.jsx';
import PopupModal1 from './pages/PopupModal1.jsx';
import OrganizationForm4 from './pages/OrganizationalForm4.jsx';
import Calculate from './main/Calculate.jsx';
import TabNavigation from './cal-comp/TabNavigation.jsx';
import Extraction from '/src/main/Extraction';
import Exploration from '/src/main/Exploration';
import Ventilation from './main/Ventilation.jsx';
import Water from './main/Water.jsx';



const House = () => <div>House Page</div>;
const Flights = () => <div>Flights Page</div>;
const Car = () => <div>Car Page</div>;
const Motorbike = () => <div>Motorbike Page</div>;
const BusRail = () => <div>Bus & Rail Page</div>;
const Secondary = () => <div>Secondary Page</div>;
const Results = () => <div>Results Page</div>;

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Routes>
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/ActivityInput" element={<ActivityInput />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/RegisterPage" element={<RegisterPage />} />
          <Route path="/src/pages/OrganizationForm" element={<OrganizationForm />} />
          <Route path="/GovernmentForm" element={<GovernmentForm />} />
          <Route path="/component/Slides" element={<Slides />} />
          <Route path="/src/pages/OrganizationForm1" element={<OrganizationForm1 />} />
          <Route path="/src/pages/OrganizationForm2" element={<OrganizationForm2 />} />
          <Route path="/src/pages/OrganizationForm3" element={<OrganizationForm3 />} />
          <Route path="/src/pages/OrganizationForm4" element={<OrganizationForm4 />} />
          <Route path="/src/pages/PopupModal" element={<PopupModal/>} />
          <Route path="/src/pages/PopupModal1" element={<PopupModal1/>} />
          <Route path="/src/main/Calculate" element={<Calculate/>} />
          <Route path="/src/cal-comp/TabNavigation" element={<TabNavigation/>} />
          <Route path="/src/main/Extraction" element={<Extraction/>} />
          <Route path="/src/main/Exploration" element={<Exploration/>} />
          <Route path="/src/main/Ventilation" element={<Ventilation/>} />
          <Route path="/src/main/Water" element={<Water/>} />
          {/* Add more routes here for other pages if needed */}
          <Route path="/" element={<House />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/car" element={<Car />} />
          <Route path="/motorbike" element={<Motorbike />} />
          <Route path="/bus-rail" element={<BusRail />} />
          <Route path="/secondary" element={<Secondary />} />
          <Route path="/results" element={<Results />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
