import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom";
import { BoxColor, Loading } from "../components/Components";
import { Star, Repeat, Plus } from '../assets/icons/Icons'
import { getPalletes } from "../functions/Functions";
import { motion } from "framer-motion";
import { useQuery } from "react-query";

export default function Result(){
  const location = useLocation()
  const { data, isLoading, refetch, isRefetching } = useQuery('palettes', () => getPalletes(location.state), { staleTime: Infinity })
  return (
    <>
    <div className="w-[976px] max-[976px]:w-[95%] mx-auto flex flex-col border-black">
        <div className="w-full flex justify-between flex-col sm:flex-row my-[2rem]">
            <Link to={'/'} className='flex items-center gap-[12px]'>
                <Star style="w-[30px] sm:w-[40px] h-auto" />
                <h1 className="font-nexa-bold text-[20px] sm:text-[25px] text-primary-black">Generated color</h1>
            </Link>
            <div className="flex items-center gap-[10px] sm:gap-[20px] flex-col sm:flex-row mt-[3rem] sm:mt-0">
                <button onClick={refetch} className="flex items-center bg-[#F0F3F7] gap-[14px] py-[12px] w-full justify-center sm:w-auto sm:px-[15px] rounded-[10px] transition-all duration-300 ease-in-out hover:bg-[#E3E8ED] hover:scale-105 hover:shadow-md">
                    <Repeat style='w-[20px]' />
                    <p className="text-[#4E5460] font-bold text-[14px]">Regenerate</p>
                </button>
                <Link to={'/form'} reloadDocument className="flex items-center bg-[#F0F3F7] gap-[14px] py-[12px] w-full justify-center sm:w-auto sm:px-[15px] rounded-[10px] transition-all duration-300 ease-in-out hover:bg-[#E3E8ED] hover:scale-105 hover:shadow-md">
                    <Plus style='w-[20px]' />
                    <p className="text-[#4E5460] font-bold text-[14px]">Create</p>
                </Link>
            </div>
        </div>
        <motion.div className="w-full flex flex-col sm:flex-row justify-between gap-5 mt-[0.5rem] sm:mt-[4rem]">
            {data?.palettes.map((el, index) => <BoxColor index={index} key={index} color={el.color} hex={el.hex} />)}
        </motion.div>
    </div>
    {(isLoading || isRefetching) && <Loading />}
    </>
  )
}