import React from 'react'

interface ICard {
    id: number;
    title: string;
    attachment?: string[];
    assigned_to?: string;
    handleDragStart: (event: React.DragEvent<HTMLDivElement>, id: number) => void;
    handleDragOver: (event: React.DragEvent<HTMLDivElement>, id: number) => void;
    handleDragEnd: (event: React.DragEvent<HTMLDivElement>, id: number) => void;
}
function Card({ id, title, assigned_to, attachment, handleDragStart, handleDragOver, handleDragEnd }: ICard) {
    // const handleDragOver = (e: React.DragEvent<HTMLDivElement>, id: number) => {
    //     console.log(id, "ID OF DRAGGED OVER")
    // }
    return (
        <div
            draggable
            onDragStart={(e) => handleDragStart(e, id)}
            onDragOver={(e) => handleDragOver(e, id)}
            onDragEnd={(e) => handleDragEnd(e, id)}
            className='relative card cursor-pointer border-[2px] border-transparent hover:border-[#2196F3] min-h-[36px] pt-[8px] px-[8px] pb-[4px] bg-[#22272B] hover:bg-[#2C333A] active:bg-[#38414A] rounded-[8px]'
        >
            {attachment?.length ? <img
                src={attachment[0]}
                alt={title}

                className='w-[100%] h-auto rounded-[8px]'
            /> : null}
            <p className='max-w-[90%]'>{title}</p>

            <button className='edit flex items-center justify-center absolute right-[2px] top-[2px] w-[24px] h-[24px] rounded-full hover:bg-[#25292c85]'>
                <img alt='edit' src='/icons/edit-white.png'
                    className='w-[10px] h-[10px] object-contain'
                />
            </button>


            {/* Footer */}

            <div
                className='flex items-center justify-between mt-[8px]'
            >

                {attachment?.length ? <div className={`gap-[3px] text-[0.75rem] text-white flex items-center`}>
                    <img
                        src='/icons/attachment-white.png'
                        alt='attachment'
                        className='w-[15px] h-[15px] object-contain'
                    />
                    1
                </div> : <div />}
                {assigned_to ? <div className=' text-[0.75rem] text-white flex items-center justify-center  w-[24px] h-[24px] rounded-full bg-[#454F59]'>
                    DF
                </div> : null}
            </div>
        </div>
    )
}

export default Card