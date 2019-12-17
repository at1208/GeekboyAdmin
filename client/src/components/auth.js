import React, { Component } from 'react';
import './auth.css';
import { Input } from 'antd';
import 'antd/dist/antd.css';


class Auth extends Component{
  render(){
    return <div className='a1 text-center'>
         <div className='a2 container shadow'>
            <h1 className='a3'>GeekBoy Admin</h1>
          <div className='a4 container'>
             <div className='a5 row col-md-12 justify-content-center'>
               <div  className='a6'>
               </div>
               <div  className='a7 col-md-4 text-center'>
                 <h4 className='a8 '>Member Login</h4 >
                <Input  size="large" placeholder="Username" />
             <br />
                 <Input size="large" placeholder="Password" type='password'/>
                 <br />
                 <button className='a10 '>LOGIN</button>

               </div>
             </div>
          </div>
         </div>
    </div>
  }
}

export default Auth;
