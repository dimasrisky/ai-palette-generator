import { useState } from 'react'
import arrow from '../assets/icons/arrow.svg'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Alert from './Alert'

export default function InputKeyword(){
  const [inputKeyword, setInputKeyword] = useState('')
  const [isShowAlert, setIsShowAlert] = useState(false)
  const navigate = useNavigate()
  function submit(){
    if(inputKeyword != ''){
      navigate('/result', {state: inputKeyword})
      window.location.reload()
    }else{
      setIsShowAlert(true)
      setTimeout(() => {
        setIsShowAlert(false)
      }, 10000);
    }
  }
  return (
    <>
    <AnimatePresence>
      {isShowAlert && <Alert type={'danger'} title={'Missing Keyword'} description={'Please fill up the keyword'} setIsShowAlert={setIsShowAlert} />}
    </AnimatePresence>
      <div className='w-[90vw] md:w-[1024px] md:justify-center flex items-center gap-[12px] flex-col md:flex-row'>
        <input type="text" className='w-full md:w-[500px] pl-[28px] h-[55px] text-[18px] font-inter border border-[#DDDDDD] bg-[#F0F3F7] rounded-[10px] outline-none text-primary-gray transition-all duration-300 ease-in-out focus:ring-2 focus:ring-primary-blue focus:border-primary-blue focus:bg-white' placeholder='Type your keyword...' onChange={(event) => setInputKeyword(event.target.value)} value={inputKeyword}/>
        <button className='bg-primary-black md:w-[180px] flex items-center justify-center gap-[8px] h-[55px] w-[90vw] rounded-[10px] transition-all duration-300 ease-in-out hover:bg-opacity-80 hover:scale-105' onClick={submit}>
          <p className='text-white font-inter text-[16px]'>Generate</p>
          <img src={arrow} alt="arrow" width={'33px'}/>
        </button>
      </div>
    </>
  )
}
