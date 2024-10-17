import { Star } from '../assets/icons/Icons'
import { InputKeyword } from '../components/Components'
// w-[976px]
export default function Form(){
  return (
    <>
        <div className="w-[100vw] h-[100vh] flex justify-center items-center">
            <div className="flex flex-col items-center gap-[24px]">
              <div className='flex flex-col items-center'>
                <div className='flex items-center gap-[12px]'>
                  <Star style='w-[40px] md:w-[50px]' />
                  <h1 className="font-nexa-bold text-[6.5vw] md:text-[40px]">Generate new palette</h1>
                </div>
                <h3 className='font-medium text-primary-gray text-[2.5vw] md:text-[15px]'>Enter keyword for generating pallete (ex: soft,warm,cool)</h3>
              </div>
              <InputKeyword />
            </div>
        </div>
    </>
  )
}