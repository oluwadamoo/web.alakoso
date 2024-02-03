import React, { useEffect, useState } from 'react'
import Card from './Card'


interface IBoard {
    title: string;
    onDragOver?: React.DragEventHandler<HTMLDivElement>;
    onDrop?: React.DragEventHandler<HTMLDivElement>;
    handleDragOver: (event: React.DragEvent<HTMLDivElement>, id: number) => void;
    handleDragStart: (event: React.DragEvent<HTMLDivElement>, cardId: number) => void;
    handleDragEnd: (event: React.DragEvent<HTMLDivElement>, cardId: number) => void;
    board_cards: {
        id: number;
        index: number;
        title: string;
        attachments: string[]
    }[];
}
function Board({ title, board_cards, onDragOver, onDrop, handleDragStart, handleDragEnd, handleDragOver }: IBoard) {
    const [cards, setCards] = useState(board_cards)


    useEffect(() => {
        setCards(board_cards)
    }, [board_cards])
    const addCard = () => {
        setCards(prev => [...prev, {
            id: 5,
            index: 4,
            title: 'QFA: Runtime Report',
            attachments: []
        },])
    }



    return (
        <div className='relative board min-w-[284px] flex flex-col w-[284px] rounded-[12px] bg-[#101204]'>
            {/* Header */}
            <div className='flex items-center justify-between sticky z-[100] top-[0] left-[0] right-[0] bg-[#101204] p-[12px]'>
                <h5 className='ml-[8px] font-[600]'>{title}</h5>

                <button
                    className='h-[30px] w-[30px] rounded-[5px] flex items-center justify-center hover:bg-[#fff] hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10'
                >
                    <img alt='more' src='/icons/hor-dot-white.png'
                        className='w-[14px] h-[14px] object-contain'
                    />
                </button>
            </div>
            {/* Body */}
            <div
                onDragOver={onDragOver}
                onDrop={onDrop}
                className='board-body flex flex-col gap-[8px]  p-[12px]'
            >
                {
                    cards.map((card, index) => {
                        return (
                            <Card
                                handleDragEnd={handleDragEnd}
                                handleDragOver={handleDragOver}
                                handleDragStart={handleDragStart}
                                id={card.id} title={card.title} key={index} attachment={card.attachments} />
                        )
                    })
                }

                <button

                    className='w-[100%]  p-[8px] rounded-[12px] flex justify-start items-center text-white hover:bg-[#fff] hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10'
                    onClick={addCard}
                >
                    <img src='/icons/plus-white.png' alt='add'
                        className='w-[16px] h-[16px] mr-[5px]'
                    /> Add a card
                </button>
            </div>
        </div>
    )
}

export default Board