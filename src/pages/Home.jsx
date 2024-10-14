import { Navbar } from '../components/Components'
import { Dot, Star, Arrow, Github } from '../assets/icons/Icons'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
        <div className={`w-screen h-screen flex justify-center items-center bg-[url('./src/assets/img/home-background.webp')] bg-center bg-cover bg-no-repeat`}>
            <Navbar />
            <div className='w-[1250px] flex flex-col items-center justify-center'>
                <div className='bg-primary-white w-[236px] bg-opacity-40 border-[0.9px] border-primary-white flex justify-center items-center py-[10px] rounded-[8px]'>
                    <div className='flex items-center gap-4 text-primary-white'>
                        <Dot />
                        <h4 className='text-[15px] font-aeonik-bold'>AI Palettes Generator</h4>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='mt-[32px] flex items-center gap-6'>
                        <Star style='fill-primary-white w-[80px]' />
                        <h1 className='font-aeonik-bold text-[60px] text-primary-white drop-shadow-md'>Find Your Color Inspiration</h1>
                    </div>
                    <h4 className='mt-[8px] font-aeonik-regular font-normal text-[22px] leading-[35px] text-primary-white max-w-[656.9px] text-center'>Input your keywords, and let our generator create beautiful color combinations for your projects.</h4>
                    <div className='flex items-center gap-[24px] mt-[52px]'>
                        <Link to={'/form'}>
                            <div className='bg-primary-white bg-opacity-20 border-[0.9px] border-primary-white flex justify-center items-center w-[160px] h-[58px] rounded-[10px]'>
                                <div className='flex items-center gap-[12px] text-primary-white'>
                                    <h4 className='text-[17px] font-aeonik-bold'>Open App</h4>
                                    <Arrow style='w-[40px]' />
                                </div>
                            </div>
                        </Link>
                        <a href='https://github.com/dimasrisky/ai-palette-generator' target='_blank'>
                            <div className='bg-primary-white flex justify-center items-center w-[170px] h-[58px] rounded-[10px]'>
                                <div className='flex items-center gap-[12px] text-primary-white'>
                                    <Github style='w-[30px]' />
                                    <h4 className='text-[17px] text-primary-black font-aeonik-bold'>View Github</h4>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
