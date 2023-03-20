import { Pencil, Trash } from '@phosphor-icons/react'
import React from 'react'

export const ItensList = () => {
  return (
    <div class="flex gap-2 mt-2">
    <div className='w-20'>
   <p>1</p>
    </div>
    <div className='w-full' ><input
                        type="text"
                        name="company-website"
                        id="company-website"
                        className="w-full outline-none placeholder:text-gray-400 focus:placeholder:text-blue-300"
                        placeholder="Qtd"
                      />
                      
      </div>
    <div className='w-32'>
    <input
                        type="text"
                        name="company-website"
                        id="company-website"
                        className="w-full outline-none placeholder:text-gray-400 focus:placeholder:text-blue-300"
                        placeholder="Qtd"
                      />
    </div>
    <div className='w-32'>
    <input
                        type="text"
                        name="company-website"
                        id="company-website"
                        className="w-full outline-none placeholder:text-gray-400 focus:placeholder:text-blue-300"
                        placeholder="Qtd"
                      />
    </div>
    <div className='w-32'>
    <input
                        type="text"
                        name="company-website"
                        id="company-website"
                        className="w-full outline-none placeholder:text-gray-400 focus:placeholder:text-blue-300"
                        placeholder="Qtd"
                      />
    </div>
    <div className='w-32 flex items-center justify-center gap-2'>
      <button className='p-1 bg-green-700' ><Pencil className='text-white' /></button>
      <button className='p-1 bg-red-700'><Trash className='text-white' /></button>
      </div>
  </div>
  )
}
