import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom";
import stars from '../assets/icons/stars.svg'
import repeat from "../assets/icons/repeat.svg";
import plus from "../assets/icons/plus.svg";
import { BoxColor } from "../components/BoxColor";
import getPalletes from "../functions/getPalletes";
import Loading from "../components/Loading";
import { motion } from "framer-motion";
import { useQuery } from "react-query";

export const Result = () => {
  const location = useLocation()
  async function fetchPalletes(){
    const response = await getPalletes(location.state)
    return response
  }
  const { data, isLoading, refetch, isRefetching } = useQuery('palettes', fetchPalletes, { staleTime: Infinity })
  return (
    <>
    <div className="w-[976px] max-[976px]:w-[95%] mx-auto flex flex-col border-black">
        <div className="w-full flex justify-between my-[2rem]">
            <div className='flex items-center gap-[12px]'>
                <img src={stars} alt="star" width={'40px'}/>
                <h1 className="font-nexa-bold text-[25px] text-primary-black">Generated color</h1>
            </div>
            <div className="flex items-center gap-[20px]">
                <button onClick={refetch} className="flex items-center bg-[#F0F3F7] gap-[14px] py-[12px] px-[15px] rounded-[10px] transition-all duration-300 ease-in-out hover:bg-[#E3E8ED] hover:scale-105 hover:shadow-md">
                    <img src={repeat} alt="regenerate" width={'20px'}/>
                    <p className="text-[#4E5460] font-bold text-[14px]">Regenerate</p>
                </button>
                <Link to={'/'} reloadDocument className="flex items-center bg-[#F0F3F7] gap-[14px] py-[12px] px-[15px] rounded-[10px] transition-all duration-300 ease-in-out hover:bg-[#E3E8ED] hover:scale-105 hover:shadow-md">
                    <img src={plus} alt="regenerate" width={'20px'}/>
                    <p className="text-[#4E5460] font-bold text-[14px]">Create</p>
                </Link>
            </div>
        </div>
        <motion.div className="w-full flex justify-between gap-5">
            {data?.palettes.map((el, index) => <BoxColor index={index} key={index} color={el.color} hex={el.hex} />)}
        </motion.div>
    </div>
    {(isLoading || isRefetching) && <Loading />}
    </>
  )
}