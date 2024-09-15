import { useState } from 'react'
import arrow from '../assets/icons/arrow.svg'
import { useNavigate } from 'react-router-dom'

export const InputKeyword = () => {
  const [inputKeyword, setInputKeyword] = useState('')
  const navigate = useNavigate()
  function submit(){
    navigate('/result', {state: inputKeyword})
    window.location.reload()
  }
  return (
  <div className='flex items-center gap-[12px]'>
    <input type="text" className='w-[500px] pl-[28px] h-[55px] text-[18px] font-inter border border-[#DDDDDD] bg-[#F0F3F7] rounded-[10px] outline-none text-primary-gray transition-all duration-300 ease-in-out focus:ring-2 focus:ring-primary-blue focus:border-primary-blue focus:bg-white' placeholder='Type your keyword...' onChange={(event) => setInputKeyword(event.target.value)} value={inputKeyword}/>
    <button className='bg-primary-black flex items-center gap-[8px] h-[55px] px-[30px] rounded-[10px] transition-all duration-300 ease-in-out hover:bg-opacity-80 hover:scale-105' onClick={submit}>
      <p className='text-white font-inter text-[16px]'>Generate</p>
      <img src={arrow} alt="arrow" width={'33px'}/>
    </button>
  </div>
  )
}
