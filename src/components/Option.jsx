import React from 'react'

const Option = ({option, answers, isSelected}) => {
    return (
        <div className='bg-white p-4 flex items-center gap-3'>
            <div className={
                    isSelected
                    ? "bg-green-500 text-white group-hover:bg-purple group-hover:text-white h-9 w-9 flex items-center justify-center group:hover-bg-gray-200 rounded-xl"
                    : "bg-gray-300 h-9 w-9 flex items-center justify-center group:hover-bg-gray-200 rounded-xl"    
                }>
                {option}
            </div>
            <p className='font-medium text-2xl'>{answers}</p>
        </div>
    )
}

export default Option