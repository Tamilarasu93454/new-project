import { Container,Row,Col } from "react-bootstrap";

import { Navbar } from 'react-bootstrap'; // Import React Bootstrap components
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Tables({submittedData ,setSubmittedData,formData}){

    const navigate = useNavigate();

    const handleLogout = () => {
      // Add any additional logout logic here if needed                   ///LOGOUT CODE
      // For now, simply navigate to the login page
      navigate('/');
    };
    

    const handleDashboard=()=>{
     navigate('/dashboard')
    }
    
    // const [selectedData, setSelectedData] = useState(null);
    const handleUpdate = (data) => {
      // Find the index of the data to be updated in the submittedData array
      const dataIndex = submittedData.findIndex(item => item === data);
  
      // Create a copy of the data object to update
      const updatedData = { ...data };
  
      // Update the values of the data object with the formData values
      updatedData.Name = formData.Name || data.Name;
      updatedData.email = formData.email || data.email;
      updatedData.phone = formData.phone || data.phone;
      updatedData.department = formData.department || data.department;
      updatedData.gender = formData.gender || data.gender;
  
      // Update the data object in the submittedData array
      const updatedSubmittedData = [...submittedData];
      updatedSubmittedData[dataIndex] = updatedData;
  
      // Update the state with the updated submittedData array
      setSubmittedData(updatedSubmittedData);
  
      // Navigate to the dashboard
      navigate('/dashboard');
  };
  

  
      const [isOpen1, setIsOpen1] = useState(false);                ////list opening
    

      const toggleList1 = () => {
        setIsOpen1(!isOpen1);
      };
      const handletables=()=>{                             //show the tables page
        navigate('/tables');
      }
      const handleDelete = (index) => {
        // Create a copy of the submittedData array
        const newData = [...submittedData];
        
        // Remove the element at the specified index
        newData.splice(index, 1);
        
        // Update the submittedData state with the new array/
        setSubmittedData(newData);
      };
     
      
  
     
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

       <h2 className="text-center">Submitted Details</h2>
          <table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
            <tbody>
              <tr>
                <th style={{ width: '150px', border: '1px solid black' }}>Name</th>
                <th style={{ width: '190px', border: '1px solid black' }}>Email Address</th>
                <th style={{ width: '190px', border: '1px solid black' }}>Phone Number</th>
                <th style={{ width: '190px', border: '1px solid black' }}>Department</th>
                <th style={{ width: '100px', border: '1px solid black' }}>Gender</th>
              </tr>
              {submittedData.map((data, index) => (
                <tr key={index} className='py-3' style={{ border: '1px solid black', backgroundColor: 'white' }}>
                    <td style={{ border: '1px solid black', padding: '5px' }}>{data.Name}</td>
                    <td style={{ border: '1px solid black', padding: '5px' }}>{data.email}</td>
                    <td style={{ border: '1px solid black', padding: '5px' }}>{data.phone}</td>
                    <td style={{ border: '1px solid black', padding: '5px' }}>{data.department}</td>
                    <td style={{ border: '1px solid black', padding: '5px' }}>{data.gender}</td>
                    <td style={{ border: '1px solid black', padding: '5px' }}>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                    <button className="ms-2" onClick={() => handleUpdate(data)}>Update</button>
                                 
                    </td>

                </tr>
                ))}


            </tbody>
          </table>
      
      

     </Col>
 </Row>

</Container>

     </div>
    )
}

export default Tables;