import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

function Detail() {
  // const [index,setIndex]=useState(0)
  const cookie=new Cookies();
  // cookie.remove('token','123')
  // console.log(cookie.get('token'));

  if(cookie.get('token')){
    return isLogin()
  }else{
    return notLogin()
  }
}

function isLogin(){
  return (
    <div className='bg-dark h-100 w-100'>
      <div className='h-100 d-flex justify-content-top align-items-top flex-column'>
        <div className='w-100 bg-light px-4 position-relative rounded-bottom-30 pb-3'>
          <div className='d-flex flex-row justify-content-between align-items-center' style={{paddingTop:'30px'}}>
            <div className='d-flex flex-row align-items-center'>
              <Image src="holder.js/180x180" style={{maxHeight:'60px',maxWidth:'60px'}} roundedCircle />
              <div className='mx-3 d-flex flex-column justify-content-center'>
                <h1 className='font-weight-bold m-0'>Username</h1>
                <h5 className='text-muted'>most detail</h5>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-gear" viewBox="0 0 16 16">
              <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
            </svg>
          </div>
          <div className='d-flex flex-column justify-content-center' style={{paddingTop:'20px'}}>
            <h5 className='text-muted mx-3'>Total</h5>
            <h1 className='font-weight-bold m-0 mx-3'>$1,000,000</h1>
            <div className='bg-warning rounded-30 border p-3 mt-3 justify-content-around d-flex'>
              <div className='d-flex flex-column'>
                <span>Income</span>
                <span>+ $1,000</span>
              </div>
              <div className="vr" />
              <div className='d-flex flex-column'>
                <span>Income</span>
                <span>- $1,000</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{paddingTop:'20px'}} className='w-100 px-4 text-light'>
          <div className='mx-3 d-flex flex-row justify-content-between align-items-center'>
            <h3 className='m-0'>most detail</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-journal-plus" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5"/>
              <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
              <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
            </svg>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}

function notLogin(){
  return(
    <div className='bg-dark h-100 w-100'>
      <div className='w-100 h-50 position-relative text-light d-flex justify-content-center align-items-center p-2'>
        <Image className='position-relative' style={{zIndex:'3',bottom:'-30%',maxHeight:'400px',maxWidth:'auto'}} src='/assets/logo/saving.png' alt='logo' fluid />
      </div>
      <div style={{zIndex:'3'}} className='w-100 h-50 d-flex justify-content-between align-items-center flex-column bg-light px-4 pb-4 rounded-top-30'>    
        <div className='w-100 h-100 d-flex justify-content-around flex-column'>
          <div style={{paddingTop:'10%'}} >
          <h2 className='font-weight-bold'>You need Login First</h2>
          <h4 className='text-muted'>dont have account? <Link to={'/register'}>Register Now!</Link></h4>
          </div>
        </div>
        <div className="d-grid gap-2 w-100">
          <Link type='button' className='btn btn-lg btn-primary rounded-pill bg-warning border-0 text-dark' to='/' >Go Back</Link>
        </div>
      </div>
    </div>
  )
}

export default Detail;
