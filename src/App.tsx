import {useEffect, useState} from 'react'
import { GameBanner } from './componets/GameBanner'
import { CreateGameAd } from './componets/CreateGameAd'

import Logo from './assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { CreateAdModal } from './componets/Form/CreateAdModal'
import axios from 'axios'

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
        axios('https://backen-nlw-esports.herokuapp.com/games')
            .then(res => {
                setGames(res.data)
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
                <CreateAdModal/>
            </Dialog.Root>
        </div>
        
    )
}
