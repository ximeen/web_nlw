import { GameBanner } from './componets/GameBanner'
import Logo from './assets/logo.svg'
import { CreateGameAd } from './componets/CreateGameAd'

export function App(){
    return(
        <div className='flex items-center max-w-[1344px] mx-auto my-20 flex-col'>
            <img src={Logo} alt="Logo da aplicação nlw eSport" />

            <h1 className='text-6xl text-white font-black mt-20'>
                 Seu <span className='bg-duo-gradiant bg-clip-text text-transparent'>duo</span> está aqui 
            </h1>
            <div className='grid grid-cols-6 gap-6 mt-16'>
                <GameBanner
                    banner_url='/game-1.png'
                    ads_count={5}
                    title="League of legends"
                />
                <GameBanner
                    banner_url='/image2.png'
                    ads_count={1}
                    title="Dota 2"
                />
            
            </div>
            <CreateGameAd/>
        </div>
        
    )
}