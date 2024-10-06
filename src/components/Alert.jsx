/* eslint-disable react/prop-types */
import './css/alert.css'
import { motion } from 'framer-motion';
import { checkBordered, dangerBordered } from '../assets/icons/Icons'

export default function Alert({ setIsShowAlert, type, title, description }){
    return (
      <>
        <motion.div 
          className="fixed z-20 top-0 inset-x-0 w-full max-w-sm mx-auto bg-white p-4 rounded-lg shadow-lg flex items-center justify-between gap-4 mt-4"
          initial={{ top: '-4rem' }}
          animate={{ top: '0.5rem' }}
          exit={{ top: '-10rem' }}
          transition={{ ease: 'easeInOut', duration: 0.6, type: 'spring', bounce: 0.5 }}
        >
          <div className={`w-10 h-10 flex justify-center items-center rounded-full ${type === 'success' ? 'bg-green-100' : 'bg-red-100' }`}>
            <img src={type === 'success' ? checkBordered : dangerBordered } alt="icon" width={'20px'} />
          </div>
          <div className="flex-grow">
            <p className={`${type === 'success' ? 'text-green-700' : 'text-red-700' } text-sm font-bold`}>{title}</p>
            <p className="text-gray-500 text-sm">{description}</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" className="w-4 h-4 text-gray-500 cursor-pointer" onClick={() => setIsShowAlert(false)}>
            <path
              fill="currentColor"
              d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
              clipRule="evenodd"
              fillRule="evenodd"
            ></path>
          </svg>
        </motion.div>
      </>
    );
};