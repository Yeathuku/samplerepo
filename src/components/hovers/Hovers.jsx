import React from 'react';
import './Hovers.css'; // Create a CSS file for styling
import { useNavigate } from 'react-router-dom';


const Hovers = () =>  {
    const navigate = useNavigate();
    const handleChangewindowSlide = () => {
        navigate('/validation')
    }
    
    return (
  <>
    <header>
        <a href="/" className='head'>Home</a>
        {/* <ui className="head">
            <li>username</li>
            <li>sigin</li>
            <li>sign out</li>
        </ui> */}
    </header>
    <div className='body'>
        <div className="button">
                <div className='button-row'>
                    <button className="btn burst" onClick={handleChangewindowSlide}>validation</button>
                    <button className="btn burst">Dashbord</button>
                    <button className="btn burst">Filmware</button>
                    
                </div>
            </div>
            <div className="button">
                <div className='button-row'>
                    <button className="btn burst">conval</button>
                    <button className="btn burst">labops</button>
                    <button className="btn burst">analtics</button>
                   
                </div>
            </div>
            <div className="button">
                <div className='button-row'>
                    <button className="btn burst">configuration</button>
                    <button className="btn burst">add on </button>
                    <button className="btn burst">add on2</button>
                  
                </div>
            </div>
            
    </div>
     <footer>
        &copy; 2024 My Company
    </footer>
   </>
  );
}

export default Hovers;
