import React, { useState } from 'react'
import { Board } from '../../components';

const LEFT_ICONS = [
    {
        name: 'star',
        icon: '/icons/star-white.png'
    },
    {
        name: 'lock',
        icon: '/icons/lock.png'
    },
]
const RIGHT_ICONS = [
    {
        name: 'automation',
        icon: '/icons/automation.png'
    },
    {
        name: 'filter',
        icon: '/icons/filter.png',
        label: 'Filters'
    },
]

interface IHeaderIcon {
    icon: string;
    alt: string;
    title?: string;
    className?: string;
    iconClassName?: string;
    label?: string;
}
function HeaderIcon({ label, icon, alt, title, className, iconClassName }: IHeaderIcon) {
    return (
        <li
            title={title}
            className={`items-center text-[0.875rem] gap-[6px] rounded-[4px] cursor-pointer h-[30px] min-w-[30px] px-[4px] flex items-center justify-center hover:bg-[#85858551] ${className}`}

        >

            <img
                src={icon}
                alt={alt}

                className={`w-[14px] h-[14px] object-contain ${iconClassName}`}
            />

            {label}
        </li>
    )
}
function Header() {
    return (
        <div
            className='px-[16px] sm:flex-row flex-col flex items-center justify-between sm:h-[60px] sm:py-[0] py-[16px] gap-[8px] bg-[#000] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-15 '
        >

            <div
                className='flex justify-start w-[100%] h-fit items-center gap-[4px]'
            >

                <div className='flex items-center w-fit'>
                    <h2 className='text-[1.125rem] text-white font-[700] mr-[4px]'>Vampfi</h2>
                    <ul className='flex items-center gap-[4px]'>
                        {LEFT_ICONS.map(({ name, icon }, index) => (
                            <HeaderIcon key={index}
                                icon={icon}

                                alt={name}
                            />

                        ))}

                        <li
                            title='Board'
                            className='flex gap-[4px] cursor-pointer text-[#172B4D] bg-[#DFE1E6] hover:bg-white h-[30px] flex items-center justify-center px-[10px] text-[0.875rem] rounded-[4px]'
                        >
                            <div className='flex'>
                                <div className='w-[4px] border-[1px] h-[8px] border-[#000] rounded-[2px]' />
                                <div className='w-[4px] border-[1px] h-[6px] border-[#000] rounded-[2px]' />
                                <div className='w-[4px] border-[1px] h-[10px] border-[#000] rounded-[2px]' />

                            </div>
                            Board
                        </li>

                        <HeaderIcon
                            alt='Board'
                            icon='/icons/caret-down-dark.png'
                            iconClassName='!w-[15px] !h-[15px]'
                            className=' bg-[#DFE1E6] hover:bg-white h-[32px] w-[32px] '
                        />

                    </ul>
                </div>
            </div>
            <div
                className='justify-end flex items-center gap-[4px] w-[100%]'

            >

                <ul className='flex items-center gap-[4px]'>
                    {RIGHT_ICONS.map(({ name, icon, label }, index) => (
                        <HeaderIcon key={index}
                            icon={icon}
                            label={label}
                            alt={name}
                            iconClassName={label ? '!w-[12px] !h-[12px]' : ''}
                        />

                    ))}


                    <li className='flex items-center text-[0.75rem]'>
                        {['JS', 'B', 'O', 'O'].map((u, index) => (
                            <div key={index}
                                className=' w-[30px] h-[30px] rounded-full flex items-center justify-center bg-[#454F59]'
                            >
                                {u}
                            </div>
                        ))}
                        +10
                    </li>


                    <HeaderIcon
                        alt='Share'
                        label='Share'
                        icon='/icons/invite.png'
                        iconClassName='!w-[15px] !h-[15px]'
                        className='ml-[4px] bg-[#DFE1E6] hover:bg-white h-[32px] text-[#172B4D] !px-[10px]'
                    />


                    <HeaderIcon
                        icon={'/icons/hor-dot-white.png'}

                        alt={'menu'}
                    />

                </ul>

            </div>
        </div>
    )
}


// const CARDS = [
//     {
//         board_id: 1,
//         id: 1,
//         index: 0,
//         title: 'QFA: Runtime Report',
//         attachments: []
//     },
//     {
//         board_id: 2,

//         id: 2,
//         index: 1,
//         title: 'QFA: Runtime Report',
//         attachments: ['https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']
//     },
//     {
//         board_id: 1,

//         id: 3,
//         index: 0,
//         title: 'QFA: Runtime Report',
//         attachments: []
//     },
//     {
//         board_id: 2,

//         id: 4,
//         index: 1,
//         title: 'QFA: Runtime Report',
//         attachments: []
//     },
// ]
const LISTS = [
    {
        id: 1,
        index: 0,
        title: 'Backlog',
        cards: [
            {
                board_id: 1,
                id: 1,
                index: 0,
                title: 'QFA: Runtime Report',
                attachments: []
            },
            {
                board_id: 1,

                id: 3,
                index: 1,
                title: 'QFA: New Development',
                attachments: []
            },
        ]

    },
    {
        id: 2,
        index: 1,
        title: 'Assigned',
        cards: [
            {
                board_id: 2,

                id: 2,
                index: 0,
                title: 'QFA: Check sweet Image',
                attachments: ['https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']
            },
            {
                board_id: 2,

                id: 4,
                index: 1,
                title: 'QFA: Check this and that',
                attachments: []
            },
        ]

    },
    {
        id: 3,
        index: 2,
        title: 'In Development',

        cards: []
    },
]
function Home() {
    const [lists, setLists] = useState(LISTS)
    // const [cards, setCards] = useState<{
    //     board_id: number;
    //     id: number;
    //     index: number;
    //     title: number;
    //     attachment?: string[];
    // }[]>([])
    const [selectedCard, setSelectedCard] = useState(0)
    const [lastDragged, setLastDragged] = useState(0)


    const handleDragStart = (event: React.DragEvent<HTMLDivElement>, cardId: number) => {
        setSelectedCard(cardId)
        event.dataTransfer.setData('text/plain', cardId.toString());
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>, board_id: number) => {
        event.preventDefault();

        const cardId = parseInt(event.dataTransfer.getData('text/plain'), 10);

        const board = lists.find(b => b.id === board_id)
        const initialBoard = lists.find(b => b.cards.find(c => c.id === cardId))
        let card = lists.find(b => b.cards.find(c => c.id === cardId))?.cards?.find(c => c.id === cardId)

        if (card && initialBoard && board) {


            if (card.board_id !== board_id) {
                card.board_id = board.id;
                setLists(prevLists => prevLists.map(board => board.id === initialBoard.id ? { ...board, cards: [...board.cards.filter(c => c.id !== card!.id)] } : board));
            }

            if (!board.cards.find(c => c.id === card?.id)) {
                card.index = board.cards.length
                board?.cards.push(card)

            }

        }
    };


    // const handleDragOver = (e: React.DragEvent<HTMLDivElement>, id: number) => {
    //     console.log(id, "ID OF DRAGGED OVER")
    // }

    // const getCards = (board_id: number) => {
    //     const board_cards = cards.filter(c => c.board_id === board_id)

    //     return board_cards;
    // }



    const handleDragOver = (e: React.DragEvent<HTMLDivElement>, id: number) => {
        if (selectedCard !== id) {
            setLastDragged(id)

        }
    }
    const handleDragEnd = (e: React.DragEvent<HTMLDivElement>, id: number) => {

        let card = lists.find(b => b.cards.find(c => c.id === lastDragged))?.cards?.find(c => c.id === lastDragged)
        let draggedCard = lists.find(b => b.cards.find(c => c.id === selectedCard))?.cards?.find(c => c.id === selectedCard)
        const board = lists.find(b => b.cards.find(c => c.id === lastDragged))

        if (card && board && draggedCard) {
            const fromIndex = board.cards.indexOf(draggedCard);

            if (fromIndex === -1) {
                return;
            }
            console.log(fromIndex)
            const item = board.cards.splice(fromIndex, 1)[0];
            board.cards.splice(card.index, 0, item)
        }


    }

    // function moveItemByName(arr, itemName, toIndex) {
    //     const fromIndex = arr.indexOf(itemName);

    //     if (fromIndex === -1) {
    //         return arr;
    //     }

    //     const item = arr.splice(fromIndex, 1)[0];

    //     arr.splice(toIndex, 0, item);

    //     return arr;
    // }

    return (
        <div
            className="h-[100vh] w-[100vw] overflow-hidden text-white bg-[url('https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2400x1600/0900a3add5460c1232a4acfad35815b1/photo-1515446134809-993c501ca304.jpg')]"
        >
            <Header />
            {/* Header */}
            <div className="boards items-start p-[16px] flex gap-[16px] overflow-auto">
                {
                    lists.map((list, index) => (
                        <Board
                            handleDragOver={handleDragOver}
                            handleDragEnd={handleDragEnd}
                            handleDragStart={handleDragStart}
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={(e) => handleDrop(e, list.id)}
                            title={list.title} key={index} board_cards={list.cards} />
                    ))
                }

                <button

                    className='min-w-[284px] w-[284px] p-[12px] rounded-[12px] flex justify-start items-center text-white bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-15 hover:bg-opacity-5'
                    onClick={() => setLists(prev => [...prev, { id: 4, index: 3, title: 'New One', cards: [] }])}
                >
                    <img src='/icons/plus-white.png' alt='add'
                        className='w-[16px] h-[16px] mr-[5px]'
                    /> Add another list
                </button>
            </div>
        </div>
    )
}

export default Home