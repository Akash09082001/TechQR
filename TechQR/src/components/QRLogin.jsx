import React from 'react'

const QRLogin = () => {
    return (
        <>
            <form action="" className='flex flex-col gap-10 px-10 py-8'>
                <div className="flex w-full">
                    <h1 className='flex text-2xl font-bold'>Login</h1>
                </div>
                <div className="flex w-full flex-col gap-2 items-center justify-center">
                    <div className="flex">
                        <div className="flex w-[150px] h-[150px] bg-brandColor"></div>
                    </div>
                    <div className="flex">
                        <p className='flex text-center text-gray-500 text-xs'>Scan the QR code to Signin</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 w-full">
                    <div className="flex w-full text-xs">
                        <p className='flex text-gray-500'>Don’t have an account?</p>
                        <button className='flex text-brandColor underline'>Sign up</button>
                    </div>
                    <div className="flex w-full text-xs items-center justify-end gap-2">
                        <button className='flex text-brandColor underline'>Login with Email</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default QRLogin