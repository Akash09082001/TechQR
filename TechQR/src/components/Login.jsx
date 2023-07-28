import React from 'react'

const Login = () => {
  return (
    <>

      <form action="" className='flex flex-col gap-6 px-10 py-8'>
        <div className="flex w-full">
          <h1 className='flex text-2xl font-bold'>Login</h1>
        </div>
        <div className="flex w-full ">
          <input className='flex w-full outline-none border border-gray-300 rounded-md py-2 px-3' type="email" name="email" id="email" placeholder='Enter Your Email' />
        </div>
        <div className="flex w-full ">
          <input className='flex w-full outline-none border border-gray-300 rounded-md py-2 px-3' type="password" name="password" id="password" placeholder='Password' />
        </div>
        <div className="flex w-full">
          <button className='flex w-full text-white  rounded-md py-2 px-3 items-center justify-center btn-color'>Login</button>
        </div>
        <div className="grid grid-cols-2 w-full">
          <div className="flex w-full text-xs">
            <p className='flex text-gray-500'>Don’t have an account?</p>
            <button className='flex text-brandColor underline'>Sign up</button>
          </div>
          <div className="flex w-full text-xs items-center justify-end gap-2">
            <ion-icon name="qr-code-outline"></ion-icon>
            <button className='flex text-brandColor underline'>Login with QR</button>
          </div>
        </div>
      </form>

    </>
  )
}

export default Login