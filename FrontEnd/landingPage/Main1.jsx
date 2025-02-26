import React, { useEffect } from 'react'
// import logo from '../images/bgcinem.png'

const Main1 = ({ setModalAdd, setModalLog }) => {
  
  return (
    <div className="w-full  background-image grayscale-20 bg-cover bg-center bg-no-repeat">
      <div className='w-full h-full bg-black/50'>

        <div className='max-w-7xl flex  justify-center mx-auto '>
          <div className='h-[88vh] pe-5 flex items-center justify-center gap-5   w-full'>
            <div className='w-[70%] space-y-4 text-white text-center'>

              <h1 className='text-6xl font-semibold'>Cinema</h1>
              <h2 className='w-[93%] text-lg font-semibold '>Cinema adalah tempat menonton film yang berlokasi di mall-mall dalam negeri. Di cinema ini menyediakan berbagai jenis jenis film film. Dan di cinema juga harga untuk menonton film nya terjangkau. Jika kalian ingin menonton film dengan kualitas terbaik kunjungi cinema terdekat kalian.</h2>
              {/* <p className='w-[]'> Seluruh indonesia</p> */}
              <div className='flex gap-3 w-full justify-start'>

                <button onClick={() => setModalLog(true)} className='text-white w-fit px-8 py-2 border-2 border-[#74C365] rounded-md font-semibold bg-blue-500' >login</button>
                <button className='bg-white w-fit px-8 py-2 border-2 border-[#74C365] rounded-md font-semibold text-[#74C365]' onClick={() => setModalAdd(true)}>Daftar</button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Main1
