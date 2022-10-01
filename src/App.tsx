import {useEffect, useState} from 'react'
import { GameBanner } from './componets/GameBanner'
import { CreateGameAd } from './componets/CreateGameAd'
import {GameController} from 'phosphor-react'

import Logo from './assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { Input } from './componets/Form/Input'

interface Game{
    id: string;
    title: string;
    banner: string;
    _count: {
        ads: number
    }
}

export function App(){
    const [games, setGames] = useState<Game[]>([])

    useEffect(()=>{
        fetch('http://localhost:3000/games')
            .then(res => res.json())
            .then(data => {
                setGames(data)
            })
    },[])

    return( 
        <div className='flex items-center max-w-[1344px] mx-auto mt-20 flex-col'>
            <img src={Logo} alt="Logo da aplicação nlw eSport" />

            <h1 className='text-6xl text-white font-black mt-20'>
                 Seu <span className='bg-duo-gradiant bg-clip-text text-transparent'>duo</span> está aqui 
            </h1>
            <div className='grid grid-cols-6 gap-6 mt-16'>
                {games.map((game) => {
                    return(
                        <GameBanner
                            key={game.id}
                            title={game.title}
                            banner_url={game.banner}
                            ads_count={game._count.ads}

                        />
                    )
                })}
            </div>
            
            <Dialog.Root>
                <CreateGameAd/>
                <Dialog.Portal>
                    <Dialog.Overlay className='bg-black/60 inset-0 fixed'/>

                    <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'>
                        <Dialog.Title className='text-3xl font-black'>Publique seu anúncio</Dialog.Title>
 
                            <form className='mt-8 flex flex-col gap-4'>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="game" className='font-semibold'
                                    > Qual o game?
                                    </label>
                                   <Input
                                    id='game'
                                    placeholder='Selecione o game que deseja jogar'
                                    />
                                </div>

                                <div className='flex flex-col gap-2'> 
                                    <label htmlFor="name">Qual seu nome?</label>
                                    <Input id='name' placeholder='Como te chamam dentro do game?' />
                                </div>

                                <div className='grid grid-cols-2 gap-6'>
                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="yarsPlaying">Joga a quantos anos?</label>
                                        <Input id='yarsPlaying' type="number" placeholder='Tudo bem ser ZERO' />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="discord">Qual teu discord?</label>
                                        <Input id="discord" type="text" placeholder='User#0000' />
                                    </div>
                                </div>
 
                                    <div className='flex gap-6'>
                                        <div className='flex flex-col gap-2'>
                                            <label htmlFor="weekDays">Quando costuma jogar?</label>
                                            <div className='grid grid-cols-4 gap-2'>
                                                <button 
                                                className='w-8 h-8 rounded bg-zinc-900 gap'
                                                title='domingo'
                                                >D</button>
                                                <button 
                                                className='w-8 h-8 rounded bg-zinc-900 gap'
                                                title='segunda'
                                                >S</button>
                                                <button 
                                                className='w-8 h-8 rounded bg-zinc-900 gap'
                                                title='terca'
                                                >T</button>
                                                <button 
                                                className='w-8 h-8 rounded bg-zinc-900 gap'
                                                title='quarta'
                                                >Q</button>
                                                <button 
                                                className='w-8 h-8 rounded bg-zinc-900 gap'
                                                title='quinta'
                                                >Q</button>
                                                <button 
                                                className='w-8 h-8 rounded bg-zinc-900 gap'
                                                title='sexta'
                                                >S</button>
                                                <button 
                                                className='w-8 h-8 rounded bg-zinc-900 gap'
                                                title='sabado'
                                                >S</button>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-2 flex-1'>
                                            <label htmlFor="hourStar">Qual horario?</label>
                                            <div className='grid grid-cols-2 gap-2'>
                                                <Input id="hourStar" type="time" placeholder='De' />
                                                <Input id="hourEnd" type="time" placeholder='Até' />
                                            </div>
                                        </div>
                                    </div>
                                <div className='mt-2 flex gap-2 text-sm'>
                                    <Input type="checkbox" />
                                    Costumo me conectar no voip
                                </div>
                                <footer className=' mt-2 flex justify-end gap-4'>
                                    <Dialog.Close
                                        type='button' 
                                        className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>
                                            Cancelar
                                    </Dialog.Close>
                                    
                                    <button
                                        type='submit'
                                        className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'>
                                        <GameController size={24}/> 
                                        Encontrar duo
                                    </button> 
                                </footer>

                            </form>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
        
    )
}