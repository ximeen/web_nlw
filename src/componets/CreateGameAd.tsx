import Lupa from '../assets/lupa.png'


export function CreateGameAd(){
    return(
        <div className='self-stretch bg-duo-gradiant pt-1 overflow-hidden rounded-lg mt-8'>
                <div className='bg-[#2A2634] py-4 px-6 flex justify-between items-center'>
                    <div className=''>
                        <strong className='text-white text-2xl block'>Não encontrou seu duo?</strong>
                        <span className='text-zinc-400'>Publique um anúncio para encontrar novos players!</span>
                    </div>
            
                    <a href="" className='flex text-white bg-violet-500 px-4 py-3 rounded-lg hover:bg-violet-600 transition-all duration-200'>
                        <img src={Lupa} alt="Icone de Lupa" className='' />
                        <strong className='pl-2'>Publicar anuncio</strong>
                    </a>
                    
                </div>
            </div>
    )
}