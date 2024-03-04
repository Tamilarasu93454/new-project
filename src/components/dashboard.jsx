import{Container , Row, Col} from 'react-bootstrap'
import '../dashboard.css'

import { Navbar } from 'react-bootstrap'; // Import React Bootstrap components
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'



function Dashboard({ submittedData, handleSubmit ,formData,setFormData}){
  
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add any additional logout logic here if needed                   ///LOGOUT CODE
    // For now, simply navigate to the login page
    navigate('/');
  };
  const handleDashboard=()=>{
   navigate('/dashboard')

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
            <li style={{listStyle:'none',color:'white',padding:'5px'}}>Employee</li>
            <li style={{listStyle:'none',color:'white',padding:'5px'}}>Insights</li>
            <li style={{listStyle:'none',color:'white',padding:'5px'}}>Profile information</li>
            
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

          <Col  className='content-col'>
            <h2>Employee Details</h2>
            <form onSubmit={handleSubmit}>
                  <div className="input-box">
                    <label style={{width:'130px'}} for='Name' >Name</label>
                      <input
                        type="text" // Change to password type for security
                        name='Name'
                        value={formData.Name || ''}
                        onChange={(e) => setFormData({ ...formData, Name: e.target.value })}
                      />

                </div>
                    <div className="input-box">
                    
                      <label for="email"  style={{width:'130px'}}>Email Address:</label>
                      <input 
                      type="email"
                      id="email" 
                      name="email"
                      value={formData.email || ''}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        /><br></br>
                  </div>

                  <div className="input-box">
                          
                    <label for="phone" style={{width:'130px'}}>Phone Number:</label>
                    <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        value={formData.phone || ''}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    /><br></br>
                  </div>

                  <div className="input-box">
                    <label for="department"  style={{width:'130px'}}>Department:</label>
                        <select id="department" name="department">
                            <option value="marketing">Marketing</option>
                            <option value="sales">Sales</option>
                            <option value="finance">Finance</option>
                        </select><br />

                  </div>
        <div>
              <label htmlFor="gender" style={{width:'130px'}}>Gender:</label>


                    <input
                          type="radio"
                          id="male"
                          name="gender"
                          value="male"
                          checked={formData.gender === "male"}
                          onChange={(e) => setFormData({ ...formData, gender:"male"})}
                        />
              <label htmlFor="male" className='ms-2'>Male</label>



                        <input
                          type="radio"
                          id="female"
                          name="gender"
                          value="female"
                          checked={formData.gender === "female"}
                          onChange={(e) => setFormData({ ...formData, gender:"female" })}
                          className='ms-4'
                    />
              <label htmlFor="female" className='ms-'>Female</label>


              
                      <input
                        type="radio"
                        id="other"
                        name="gender"
                        value="other"
                        checked={formData.gender === "other"}
                        onChange={(e) => setFormData({ ...formData, gender:"other" })}
                        className='ms-4'
                      />
              <label htmlFor="other" className='ms-2'>Other</label><br/>
            </div>
          
      <input type="submit" value="Submit" className='my-3' ></input>
      </form>

          </Col>
      </Row>
  
    </Container>
  </div>
    )
}
export default Dashboard;