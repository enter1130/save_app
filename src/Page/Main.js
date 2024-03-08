import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';

function Main() {
  return (
    <div className='bg-dark h-100 w-100'>
      <div className='w-100 h-50 position-relative text-light d-flex justify-content-center align-items-center p-2'>
        <Image className='position-relative' style={{zIndex:'3',bottom:'-30%',maxHeight:'400px',maxWidth:'auto'}} src='/assets/logo/saving.png' alt='logo' fluid />
      </div>
      <div style={{zIndex:'3'}} className='w-100 h-50 d-flex justify-content-between align-items-center flex-column bg-light px-4 pb-4 rounded-top-30'>    
        <div className='w-100 h-100 d-flex justify-content-around flex-column'>
          <div style={{paddingTop:'10%'}} >
          <h2 className='font-weight-bold'>Save Smart</h2>
          <h4 className='text-muted'>Track expenses, master your finances. Our accounting app makes it easy!</h4>
          </div>
        </div>
        <div className="d-grid gap-2 w-100">
          <Link type='button' className='btn btn-lg btn-primary rounded-pill bg-warning border-0 text-dark' to='/detail' >Get Start</Link>
        </div>
      </div>
    </div>
  );
}

export default Main;
