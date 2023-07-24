import React, { useContext, useState } from 'react'

import Cookies from 'js-cookie';

const Login = ({login}:any) => {

    
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [warning, setWarning] = useState<Boolean>(false);

 
    function handleLoginClick() {
        if (username !== '' && password !== '') {
            setWarning(false);
            login(username, password);
        } else {
            setWarning(true);
        }
  }
  
    return (
      <div className='flex justify-center items-center'>
          <div className='self-center'>
                <h1 className='text-3xl font-serif font-bold m-4'> Welcome Again!</h1>
                {warning && <div className='m-4 bg-red-300 text-red-700 border-red-700 p-2'>Fill all details!</div>}
              <input placeholder='username' onChange={(e)=>{setUsername(e.target.value)}} type='text' className='m-4 block border border-gray-400 bg-white text-gray-400 px-10 py-2 rounded-full '/> 
                <input placeholder='password' onChange={(e)=>{setPassword(e.target.value)}} type='password' className='m-4 block border border-gray-400 bg-white text-gray-400 px-10 py-2 rounded-full ' /> 
                <button onClick={handleLoginClick}  className='m-5 block border-2 text-lg font-medium border-black text-black hover:bg-black hover:text-white  px-24 py-2 rounded-full '>Sign In</button>
          </div>
    </div>
  )
}

export default Login