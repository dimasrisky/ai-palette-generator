import { Navbar } from '../components/Components'
import { Dot, Star, Arrow, Github } from '../assets/icons/Icons'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
        <div className={`w-screen h-screen flex justify-center items-center bg-[url('/img/home-background.webp')] bg-center bg-cover bg-no-repeat`}>
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
                        <Star style='fill-primary-white hidden sm:flex sm:w-[5vw]' />
                        <h1 className='font-aeonik-bold text-[30px] text-primary-white drop-shadow-md sm:text-[5vw]'>Find Your Color Inspiration</h1>
                    </div>
                    <h4 className='mt-[8px] font-aeonik-regular font-normal text-[14px] sm:text-[2vw] sm:leading-[38px] text-primary-white max-w-[90%] sm:max-w-[80%] text-center'>Input your keywords, and let our generator create beautiful color combinations for your projects.</h4>
                    <div className='flex items-center gap-[24px] mt-[52px]'>
                        <Link to={'/form'}>
                            <div className='bg-primary-white bg-opacity-20 border-[0.9px] border-primary-white flex justify-center items-center w-[150px] h-[48px] md:w-[170px] md:h-[55px] lg:w-[190px] lg:h-[58px] rounded-[10px] transition-all duration-300 transform hover:bg-opacity-30 hover:scale-105'>
                                <div className='flex items-center gap-[2px] md:gap-[4px] text-primary-white'>
                                <h4 className='text-[15px] md:text-[17px] font-aeonik-bold'>Launch App</h4>
                                <Arrow style='w-[30px] md:w-[35px] lg:w-[40px]' />
                                </div>
                            </div>
                        </Link>
                        <a href='https://github.com/dimasrisky/ai-palette-generator' target='_blank'>
                            <div className='bg-primary-white flex justify-center items-center w-[140px] h-[48px] md:w-[160px] md:h-[55px] lg:w-[170px] lg:h-[58px] rounded-[10px] transition-all duration-300 transform hover:bg-opacity-90 hover:scale-105'>
                                <div className='flex items-center gap-[8px] md:gap-[12px] text-primary-white'>
                                <Github style='w-[24px] md:w-[28px] lg:w-[30px]' />
                                <h4 className='text-[15px] md:text-[17px] text-primary-black font-aeonik-bold'>View Github</h4>
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
