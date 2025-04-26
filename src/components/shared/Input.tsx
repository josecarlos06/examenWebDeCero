const Input = ({...props} ) => {
   return (
      <div className='bg-[#363b41] flex gap-2 rounded'>
         <span className='bg-primary/30 w-13 h-10 block'></span>
         <input 
            className='placeholder:text-white/30 w-full px-2 outline-none text-white' 
            {...props}
         />
      </div>
   )
};

export default Input