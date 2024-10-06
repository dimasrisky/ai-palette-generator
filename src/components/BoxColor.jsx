/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import copy from "../assets/icons/copy.svg";
import check from "../assets/icons/check.svg";


export const BoxColor = ({ color, hex, index}) => {
    const [isCopied, setIsCopied] = useState(false)
    async function copyTextToClipboard(text) {
        if ('clipboard' in navigator) {
            setIsCopied(true)
            return await navigator.clipboard.writeText(text);
        } else {
            setIsCopied(true)
            return document.execCommand('copy', true, text);
        }
    }
    return (
        <motion.div 
            className="w-full sm:w-[20%] flex flex-col items-center gap-[25px]"
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{ease: 'easeInOut', delay: 0.1 * index, duration: 0.7}}
        >
            <div className={`w-full h-[80px] sm:h-[340px] rounded-[25px] relative shadow-xl`} style={{ backgroundColor: hex }}>
                <div className="w-full h-full flex  items-center justify-center relative group">
                    {/* Hidden text that appears on hover */}
                    <div className="absolute inset-0 gap-[8px] bg-[linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.2))] rounded-[25px] flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h1 className="text-black text-sm tracking-wide text-shadow-lg">
                            {hex}
                        </h1>
                        <button onClick={() => copyTextToClipboard(hex)}>
                            <img src={isCopied ? check : copy} alt="copy" width={'12px'}/>
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex-col items-center gap-[4px] hidden sm:flex">
                <h4 className="text-center font-bold text-[17px]" style={{color: hex}}>{color}</h4>
                <div className="flex items-center gap-[8px]">
                    <p className="font-medium text-[12px]">{hex}</p>
                    <button onClick={() => copyTextToClipboard(hex)}>
                        <img src={isCopied ? check : copy} alt="copy" width={'12px'}/>
                    </button>
                </div>
            </div>
        </motion.div>
    )
}
