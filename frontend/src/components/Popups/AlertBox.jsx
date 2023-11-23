import React from 'react'
import { RxCross1 } from 'react-icons/rx'
import { BsPatchCheckFill } from "react-icons/bs";
import { CgDanger } from "react-icons/cg";


const AlertBox = ({message , status , onClose}) => {
    const handleOnClose = (e)=>{
        if(e.target.id==='container') onClose();
    }

  return (
    <div
    id='container'
    onClick={handleOnClose} 
    className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-30
    backdrop-blur-[1 px]'>
        <div className="bg-white m-2 divide-y rounded-lg">
          <div className='flex justify-between w-full items-center p-2'>
          {
            status ?
            <p className='text-green-600 font-semibold text-lg'>Success</p>
            :<p className='text-red-600 font-semibold text-lg'>Failure</p>
          }
          <RxCross1 size={20} className='m-2 cursor-pointer' onClick={onClose}/>
          </div>

          <div 
          className="flex flex-col justify-center space-y-5 items-center p-6 sm:w-[500px]" 
          style={{ maxHeight: '400px', overflowY: 'auto' , maxWidth:'600px'}}>
          <p className='font-semibold'>{message}</p>
          {
            status ?
            (<span className='text-green-600 text-6xl'>
              <BsPatchCheckFill/>
            </span>)
            :
            (<div className='text-red-600 text-6xl'>
              <CgDanger/>
            </div>)
          }
          </div>

        </div>
    </div>
  )
}

export default AlertBox
