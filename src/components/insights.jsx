import{Container , Row, Col} from 'react-bootstrap'
import '../dashboard.css'

import { Navbar } from 'react-bootstrap'; // Import React Bootstrap components
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'




function Insights( ){
  
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add any additional logout logic here if needed                   ///LOGOUT CODE
    // For now, simply navigate to the login page
    navigate('/');
  };
  const handleDashboard=()=>{
   navigate('/dashboard')

  }
  const handleProfile=()=>{
    navigate('/profile')
   }
   const handleEmployee=()=>{
    navigate('/employee')
   }
   const handleInsights=()=>{
    navigate('/insights')
   }



    const [isOpen1, setIsOpen1] = useState(false);                ////list opening

    
    const toggleList1 = () => {
      setIsOpen1(!isOpen1);
    };
    const handletables=()=>{                             //show the tables page
      navigate('/tables');
    }

   
    return(
        <div>
  <header className='header'>
  

      

      <Navbar style={{backgroundColor:"rgb(35, 127, 134)"}}>
        <Container fluid className='Navbar-container'>
          <h2 style={{fontWeight:'700', color:"white"}}>Administration</h2>
          <div className='navbar-div'> 
              <p >User</p>
              <button onClick={handleLogout} className='logout-button'>
                  Logout
                </button>
          </div>
        </Container>
      </Navbar>
      </header>



      <Container fluid className="container-content  Dashboard-container">
          <Row className="content-row">
          <Col sm={2} className='content-col sidebar' style={{backgroundColorolor:"rgb(22, 41, 59)"}}>
          <div style={{backgroundColor:"rgb(35, 55, 74)"}}>
        <div onClick={toggleList1} style={{ cursor: 'pointer', textDecoration: 'none',padding:'7px',color:'white'}}>
          Categories
        </div>     

        {isOpen1 && (
          <ul>
            <li style={{listStyle:'none',color:'white',padding:'5px',cursor: 'pointer'}}  onClick={handleEmployee}>Employee</li>
            <li style={{listStyle:'none',color:'white',padding:'5px',cursor: 'pointer'}}  onClick={handleInsights}>Insights</li>
            <li style={{listStyle:'none',color:'white',padding:'5px',cursor: 'pointer'}} onClick={handleProfile}>Profile information</li>
            
          </ul>
        )}   
              <div onClick={handletables} style={{ cursor: 'pointer', textDecoration: 'none',padding:'7px',color:'white'}}>
              Tables
              </div>  
              <div onClick={handleDashboard} style={{ cursor: 'pointer', textDecoration: 'none',padding:'7px',color:'white'}}>
              Dashboard
             </div>    
                
         </div> 
          </Col>
          <Col>
          <h2>Insights page</h2>
          </Col>

        
      </Row>
  
    </Container>
  </div>
    )
}
export default Insights;