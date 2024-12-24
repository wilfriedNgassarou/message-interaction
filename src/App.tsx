import clsx from "clsx";
import { useState } from "react"
import { Camera } from "./components/svgs/camera";
import { Folder } from "./components/svgs/folder";
import { Image } from "./components/svgs/image";
import { Headphones } from "./components/svgs/headphones";
import { CodeSlash } from "./components/svgs/code-slash";
import { Mic } from "./components/svgs/mic";
import { File } from "./components/svgs/file";
import { ImageAlt } from "./components/svgs/image-alt";
import { ArrowUpCircleFill } from "./components/svgs/arrow-up-circle-fill";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "./components/svgs/plus";
import { Credits } from "./components/credits";

function App() {
  const [inputValue, setInputValue] = useState('') ;

  const cards = [
    { icon: <ImageAlt size={112} className="fill-gray-300 group-hover:fill-gray-400 duration-100 ease-in-out" /> },
    { icon: <File size={112} className="fill-gray-300 group-hover:fill-gray-400 duration-100 ease-in-out" /> },
    { icon: <CodeSlash size={112} className="fill-gray-300 group-hover:fill-gray-400 duration-100 ease-in-out" /> }
  ]

  return (
    <section className="w-full overflow-hidden min-h-[500px] h-dvh flex flex-col gap-10 justify-center items-center">
      <div className="fixed md:hidden inset-0 bg-white z-50 flex items-center justify-center">
        <span className="text-lg">Please use a large screen !</span>
      </div>

      <Credits />

      <div className="relative h-72 flex justify-center">
        {cards.map((item, index) => {
          let clsName = ''

          if(index == 0) {
            clsName = inputValue ? 'scale-100 translate-x-[60%] translate-y-12 rotate-[8deg]' : 'scale-[0.9] translate-x-0 rotate-0 translate-y-0' ;
          }
          
          if(index == 1) {
            clsName = inputValue ? 'scale-100 -translate-x-[60%] translate-y-8 -rotate-[8deg]' : 'scale-[0.95] translate-x-0 rotate-0 translate-y-0' ;
          }

          return (
            <div
              key={index} 
              style={{ boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.4)' }} 
              className={clsx(
                "absolute w-96 h-64 bg-gray-50 rounded-xl duration-100 ease-in-out",
                "flex flex-col justify-center items-center gap-4 group",
                clsName,
                index == 0 && '-top-8 scale-90',
                index == 1 && '-top-4 scale-95',
              )}
            >
              {item.icon}
              <div className="h-6 w-1/3 bg-gray-400 group-hover:bg-gray-500 duration-100 ease-in-out rounded-full" />
              <div className="h-5 w-5/6 bg-gray-200 group-hover:bg-gray-300 duration-100 ease-in-out rounded-full" />
            </div>  
          )
        })}
      </div>
      <div className="flex w-2/3 items-center gap-4">
      <AnimatePresence initial={false} mode="popLayout">
        {inputValue ? 
          (
            <>
              <motion.span
                key="plus"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full"
              >
                <Plus size={24} className="fill-gray-400" />
              </motion.span>
            </>
          )
          :
          (
            <>
              <motion.span
                key="camera"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: .2, type: 'tween', ease: 'easeOut' }}
              >
                <Camera size={28} />
              </motion.span>
              <motion.span
                key="image"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: .2, type: 'tween', ease: 'easeOut' }}
              >
                <Image size={28} />
              </motion.span>
              <motion.span
                key="folder"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: .2, type: 'tween', ease: 'easeOut' }}
              >
                <Folder size={28} />
              </motion.span>
            </>
          )
        }
      </AnimatePresence>
      <motion.div
        layout
        className="flex-grow h-12 px-5 flex items-center justify-center rounded-full overflow-hidden bg-gray-100"
      >
        <motion.input
          layout
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} 
          type="text" 
          className="h-full w-10 flex-grow outline-none bg-transparent" 
          placeholder="Message" 
        />
        <motion.span layout>
          <Mic size={22} className="fill-gray-400" />
        </motion.span>
      </motion.div>
      <AnimatePresence initial={false} mode="popLayout">
        {inputValue ? 
          (
            <motion.span
              key="arrow-up"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <ArrowUpCircleFill size={40} /> 
            </motion.span> 
          ) 
          :
          ( 
            <motion.span
              key="headphones"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <Headphones size={32} /> 
            </motion.span>
          )
        }
      </AnimatePresence>
      </div>
    </section>
  )
}

export default App
