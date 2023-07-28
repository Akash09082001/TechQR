import React from 'react'
import img1 from '/assets/images/home-logo/image 37.png'
import img2 from '/assets/images/home-logo/Indian_Institute_of_Technology_Bombay_Logo 1.png'
import img3 from '/assets/images/home-logo/image 38.png'
import img4 from '/assets/images/home-logo/Indian_Institute_of_Technology_Bombay_Logo 2.png'
import Login from './Login'
import QRLogin from './QRLogin'
import SignUp from './SignUp'

const Home = () => {
  return (
    <div className="flex w-full pt-28">

      <div className="grid grid-cols-2 gap-8">
        <div id='leading-content' className="flex gap-10 flex-col w-full items-start justify-center ">
          <div id='call-out-text' className="flex gap-6 flex-col ">
            <div id='callout' className="flex gap-1
             w-fit text-sm rounded-full bg-gray-900 items-center ">
              <div id="badge" className="flex p-1">
                <span className='flex px-3 py-1 uppercase text-white bg-indigo-500 rounded-full items-center justify-center'>organisation</span>
              </div>
              <button className='flex gap-1 px-3 text-white items-center justify-center '>
                <span className='flex  uppercase'>INDIVIDUAL</span>
                <ion-icon className='flex' name="chevron-forward" />
              </button>
            </div>
            <div id='text' className="flex flex-col w-full gap-5">
              <h1 className='text-6xl w-full text-left text-white font-bold'>Learning doesn’t have to be <span className='text-indigo-400'>Boring!</span></h1>
              <p className='flex text-gray-300 w-full text-left text-lg'>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua ad ad non deserunt sunt.</p>
            </div>
          </div>
          <div id='logo-cloud' className="flex flex-col w-full gap-5 ">
            <div className="flex w-full">
              <p className='flex text-white text-sm'>Used by THE BEST UNIVERSITIES </p>
            </div>
            <div className="flex w-full   ">
              <ul className="flex w-full items-center gap-10">
                <li><img src={img1} alt="" /></li>
                <li><img src={img2} alt="" /></li>
                <li><img src={img3} alt="" /></li>
                <li><img src={img4} alt="" /></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <div id="container" className='flex w-full max-w-md'>

            <div id="footer" className="flex flex-col bg-white rounded-xl shadow-md">
              <Login />
              {/* <QRLogin/> */}
              {/* <SignUp/> */}
              <div className="flex w-full px-10 py-8">
                <p className='text-left text-xs text-gray-500'>By signing up, you agree to our <b className='text-gray-800'>Terms</b>, <b className='text-gray-800'>Data Policy</b> and <b className='text-gray-800'>Cookies Policy</b>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home