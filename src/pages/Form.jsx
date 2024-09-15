import stars from '../assets/icons/stars.svg'
import { InputKeyword } from '../components/InputKeyword'
// w-[976px]
const Form = () => {
  return (
    <>
        <div className="w-[100vw] h-[100vh] flex justify-center items-center">
            <div className="flex flex-col items-center gap-[44px]">
              <div className='flex flex-col items-center gap-[4px]'>
                <div className='flex items-center gap-[12px]'>
                  <img src={stars} alt="star" width={'30px'}/>
                  <h1 className="font-nexa-bold text-[30px]">Generate new palette</h1>
                </div>
                <h3 className='font-medium text-primary-gray text-[8px]'>Enter keyword for generating pallete (ex: soft,warm,cool)</h3>
              </div>
              <InputKeyword />
            </div>
        </div>
    </>
  )
}

export default Form