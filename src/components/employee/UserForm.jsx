import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './UserForm.css';
import { updateEmployee , createEmployee , getEmployee} from '../../service/Axios';

const UserForm = () => {
  const [id, setId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [userName,setuserName] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  const {userid}= useParams(); 
  useEffect(()=>{
    if(userid){
      getEmployee(userid).then((response) => {
        setId(response.data.id);
        setuserName(response.data.userName);
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
        setPassword(response.data.password);
      }).catch(error => {
        console.log(error);
      })
    }
  },[])
  const handleSubmit = (e) => {
    e.preventDefault();

    if(validateform()){
      const newEmployee = { id, firstName, lastName, email ,userName,password};
      
      axios.post('http://localhost:8080/api/employees', newEmployee)
    .then(() => {
      navigate('/employeeTable');
    })
    .catch((error) => {
      console.error('Error adding employee:', error);
    });
    }
   
  };

  const [errors,setErrors]= useState({
    id:'', firstName : '', lastName: '', email: '' ,userName:'',password:''

  })

  function saveOrUpdateEmployee(e){
    e.preventDefault();
    
    if(validateform()){
      const employee= {id,firstName,lastName,userName,password,email};
    console.log(employee);
      if(userid){
        updateEmployee(id ,employee).then((response)=> {
          console.log(response.data)
          navigate('/employeeTable')
        }).catch(error =>{
          console.error(error);
        })
      }else{

        createEmployee(employee).then((response) => {
          console.log(response.data)
          navigate('/employeeTable')
        })
      }
     
     
    }
  }  
  function validateform() {
    let valid = true;
    const errorsCopy = {...errors}
    
    
    if(id){
      errorsCopy.id = '';
    }else{
      errorsCopy.id='id name is required ';
      valid=false;
    }
    if(firstName){
      errorsCopy.firstName = '';
    }else{
      errorsCopy.firstName='first name is required ';
      valid=false;
    }
    if(lastName.trim()){
      errorsCopy.lastName = '';
    }else{
      errorsCopy.lastName='last name is required ';
      valid=false;
    }
    if(userName.trim()){
      errorsCopy.userName='';
     
      
    }else{
      errorsCopy.userName='username is required';
       valid=false;
    }
    if(password.trim()){
      errorsCopy.passwor='';
    }else{
      errorsCopy.password='password is required';
      valid=false;
    }
    if(email.trim()){
      errorsCopy.email='';
    }else{
      errorsCopy.email='emailis required'
      valid=false;
    }
    setErrors(errorsCopy);
    return valid;

  }
  function pagetitle(){
    if(userid){
      return <h2>update User Form</h2>
    }else{
      return <h2> User Form</h2> 
    }
  }

  return (
    <div className="userform-container">
      <form onSubmit={handleSubmit} className="userform-form">
        {
          pagetitle()
        }
        <div className="form-group">
         ID:<input
            type="text"
            value={id}
            className={`form-control ${ errors.id ? 'is-invalid': '' }`}
            onChange={(e) => setId(e.target.value)}
            placeholder='ID'
          />
           { errors.firstName && <div className='invalid-feedback'> { errors.id} </div> }
        </div>
        <div className="form-group">
          <label>username:</label>
          <input
            type="text"
            value={userName}
            className={`form-control ${ errors.userName ? 'is-invalid': '' }`}
            onChange={(e) => setuserName(e.target.value)}
          />
            { errors.firstName && <div className='invalid-feedback'> { errors.userName} </div> }
        </div>



        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            className={`form-control ${ errors.firstName ? 'is-invalid': '' }`}
            onChange={(e) => setFirstName(e.target.value)}
            
          />
          { errors.firstName && <div className='invalid-feedback'> { errors.firstName} </div> }
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            className={`form-control ${ errors.lastName ? 'is-invalid': '' }`}
            onChange={(e) => setLastName(e.target.value)}
           
          />
          { errors.firstName && <div className='invalid-feedback'> { errors.lastName} </div> }
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            className={`form-control ${ errors.email ? 'is-invalid': '' }`}
            onChange={(e) => setEmail(e.target.value)}
        
          />
          { errors.firstName && <div className='invalid-feedback'> { errors.email} </div> }
          </div>
          <div className="form-group">
          <label>password:</label>
          <input
            type="password"
            value={password}
            className={`form-control ${ errors.password ? 'is-invalid': '' }`}
            onChange={(e) => setPassword(e.target.value)}
         
          />
          { errors.firstName && <div className='invalid-feedback'> { errors.password} </div> }
        </div>
        <button type="submit" onClick={saveOrUpdateEmployee}>Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
