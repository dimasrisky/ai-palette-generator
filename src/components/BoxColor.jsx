/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "../assets/icons/Icons.jsx";


export default function BoxColor({ color, hex, index }){
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
            key={hex}
            className="w-full sm:w-[20%] flex flex-col items-center gap-[25px]"
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{ease: 'easeInOut', delay: 0.1 * index, duration: 0.7}}
        >
            <div className={`w-full h-[80px] sm:h-[340px] rounded-[25px] relative shadow-xl`} style={{ backgroundColor: hex }} onClick={() => copyTextToClipboard(hex)}>
                <div className="sm:hidden w-full h-full flex  items-center justify-center relative group">
                    {/* Hidden text that appears on hover */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.2))] rounded-[25px] flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex flex-col gap-1 items-center font-semibold">
                            <h1 className="text-[#333] text-xl tracking-wide text-shadow-lg">{color}</h1>
                            <div className="flex items-center gap-[8px]">
                                <h1 className="text-[#333] text-xs tracking-wide text-shadow-lg">{hex}</h1>
                                <button onClick={() => copyTextToClipboard(hex)}>
                                    {/* <img src={isCopied ? check : copy} alt="copy" width={'12px'}/> */}
                                    {isCopied ? <Check style="w-[12px]" /> : <Copy style="w-[12px]" />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-col items-center gap-[4px] hidden sm:flex">
                <h4 className="text-center font-bold text-[17px]" style={{color: hex}}>{color}</h4>
                <div className="flex items-center gap-[8px]">
                    <p className="font-medium text-[12px]">{hex}</p>
                    <button onClick={() => copyTextToClipboard(hex)}>
                        {/* <img src={isCopied ? check : copy} alt="copy" width={'12px'}/> */}
                        {isCopied ? <Check style="w-[12px]" /> : <Copy style="w-[12px]" />}
                    </button>
                </div>
            </div>
        </motion.div>
    )
}
