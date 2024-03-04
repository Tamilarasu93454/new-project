
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/login';
import Dashboard from './components/dashboard';
import Register from './components/register';
import Tables from './components/tables';


import { useState } from 'react';


function App() {
  
const theme = createTheme();

    const [formData, setFormData] = useState({});
    const [submittedData, setSubmittedData] = useState([]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Capture form data
      const inputs = Array.from(e.target.elements);
      const data = {};
      inputs.forEach((input) => {
        if (input.name) {
          data[input.name] = input.value;
        }
      });
      setSubmittedData([...submittedData, data]);
      setFormData({}); // Clear form fields
      alert("Your form is submitted"); 
    };


    ///
  return (
    



    <ThemeProvider theme={theme}>

    <div className="App">
      <Router>
      <Routes>
           <Route path="/" element={<LoginPage />} />
           <Route path='/dashboard' element={<Dashboard   
                                              submittedData ={submittedData}
                                              handleSubmit ={handleSubmit}
                                              formData={formData}
                                              setFormData ={setFormData}

                                             />} />
           {/* <Route path='/dashboard/tables' element={<Dashboard/>} /> */}
           <Route path='/register' element={<Register /> } />
           <Route path='/tables' element={<Tables
                                           submittedData={submittedData}
                                           setSubmittedData={setSubmittedData}
                                           formData={formData}
                                      
                                          />} />
      </Routes>
      </Router>
    </div>
    </ ThemeProvider>
  );

}

export default App;
