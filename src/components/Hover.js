

export default function Hover(){
    return(
        <div className='p-20'>
            <div className='group p-20 border border-gray-500 w-fit rounded-md'>
                <button 
                    className='p-4 font-bold text-lg bg-blue-500 text-white rounded-md
                    hover:bg-red-500 transition-colors duration-500 group-hover:bg-red-500'
                >
                    Click Me
                </button>
            </div>
        </div>
    )
}