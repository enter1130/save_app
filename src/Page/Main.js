import 'animate.css';
import React from 'react';
import { Button, Form, Image } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Cookies from 'universal-cookie';
import '../App.css';

function Main() {
  const loginAnimate=()=>{
    let element1=document.getElementById('bg');
    let element2=document.getElementById('logo');
    element1.classList.remove('h-50');
    element1.classList.add('h-75');

    element2.classList.remove('h-50');
    element2.classList.add('h-25');

    let image=document.getElementById('logo_image');
    image.style.maxHeight='300px';

    let main=document.getElementById('main');
    main.classList.add('animate__fadeOut','animate__animated');

    let main_btn=document.getElementById('main_btn');
    main_btn.classList.add('animate__fadeOut','animate__animated');

    setTimeout(() => {
      main.style.display='none';
      main_btn.style.display='none';
      
      let login=document.getElementById('login');
      login.style.display='block';

      let login_btn=document.getElementById('login_btn');
      login_btn.style.display='block';

    }, 1000);

  }

  const {handleSubmit}=useForm();
  const onSubmit=()=>{
    let cookies=new Cookies();
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;

    if(email && password){
      cookies.set('token','123');
    }
  }


  return (
    <div className='bg-dark h-100 w-100'>
      <div id='logo' className='w-100 h-50 position-relative text-light d-flex justify-content-center align-items-center p-2'>
        <Image id='logo_image' className='position-relative' style={{zIndex:'3',bottom:'-30%',maxHeight:'400px',maxWidth:'auto'}} src='/assets/logo/saving.png' alt='logo' fluid />
      </div>
      <Form onSubmit={handleSubmit(onSubmit)} id='bg' style={{zIndex:'3'}} className='w-100 h-50 d-flex justify-content-between align-items-center flex-column bg-light px-4 pb-4 rounded-top-30'>    
        <div className='h-100 w-100 d-flex align-items-center pt-5'>
          <div className='w-100'>
            <div id='main'>
              <h2 className='font-weight-bold'>Save Smart</h2>
              <h4 className='text-muted'>Track expenses, master your finances. Our accounting app makes it easy!</h4>
            </div>
            <div id='login' className='animate__animated animate__fadeIn' style={{display:'none'}}>
              <h2 className='font-weight-bold'>Login Page</h2>
              <Form.Group className="mb-3">
                <Form.Label style={{fontSize:'6vw'}}>Email address</Form.Label>
                <Form.Control id='email' type="email" size='lg' required placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label style={{fontSize:'6vw'}}>Password</Form.Label>
                <Form.Control id='password' type="password" size='lg' required placeholder="Password" />
              </Form.Group>
            </div>
          </div>
        </div>
        <div className="d-grid gap-2 w-100">
          <Button id='main_btn' onClick={()=>loginAnimate()} type='button' className='btn btn-lg btn-primary rounded-pill bg-warning border-0 text-dark'>Next</Button>
          <Button type="submit" id='login_btn' style={{display:'none'}} className='animate__animated animate__fadeIn btn btn-lg btn-primary rounded-pill bg-warning border-0 text-dark'>Login</Button>
        </div>
      </Form>
    </div>
  );
}

export default Main;
