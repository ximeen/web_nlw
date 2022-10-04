import * as Dialog from '@radix-ui/react-dialog'
import * as Checkbox from '@radix-ui/react-checkbox'
import * as ToggleGroup from '@radix-ui/react-toggle-group'

import { Check, GameController } from 'phosphor-react'
import { Input } from './Input'
import { useEffect, useState } from 'react';

interface Game{
    id: string;
    title: string;

}
export function CreateAdModal(){


        const [games, setGames] = useState<Game[]>([])
        const [weekDays, setWeekDays] = useState<string[]>([])
        useEffect(()=>{
            fetch('http://localhost:3000/games')
                .then(res => res.json())
                .then(data => {
                    setGames(data)
                })
        },[])
    
    return(
        
        
        <Dialog.Portal>
                    <Dialog.Overlay className='bg-black/60 inset-0 fixed'/>

                    <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'>
                        <Dialog.Title className='text-3xl font-black'>Publique seu anúncio</Dialog.Title>
 
                            <form className='mt-8 flex flex-col gap-4'>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="game" className='font-semibold'
                                    > Qual o game?
                                    </label>
                                   <select
                                    className='bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500'
                                    id='game'
                                    defaultValue=''
                                    >
                                        {games.map(game =>{
                                            return(
                                                <option key={game.id} value={game.id}>{game.title}</option>
                                            )
                                        })}
                                        <option disabled >Selecione o game que deseja jogar</option>
                                    </select>
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

                                                <ToggleGroup.Root 
                                                    type='multiple' 
                                                    className='grid grid-cols-4 gap-2'
                                                    onValueChange={setWeekDays}
                                                >

                                                <ToggleGroup.ToggleGroupItem 
                                                    value='0'
                                                    className={`w-8 h-8 rounded  gap ${weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                                    title='domingo'
                                                >D</ToggleGroup.ToggleGroupItem>

                                                <ToggleGroup.ToggleGroupItem 
                                                    value='1'
                                                    className={`w-8 h-8 rounded  gap ${weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                                    title='segunda'
                                                >S</ToggleGroup.ToggleGroupItem>

                                                <ToggleGroup.ToggleGroupItem
                                                    value='2' 
                                                    className={`w-8 h-8 rounded  gap ${weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                                    title='terca'
                                                >T</ToggleGroup.ToggleGroupItem>

                                                <ToggleGroup.ToggleGroupItem
                                                    value='3' 
                                                    className={`w-8 h-8 rounded  gap ${weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                                    title='quarta'
                                                >Q</ToggleGroup.ToggleGroupItem>

                                                <ToggleGroup.ToggleGroupItem
                                                    value='4' 
                                                    className={`w-8 h-8 rounded  gap ${weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                                    title='quinta'
                                                >Q</ToggleGroup.ToggleGroupItem>

                                                <ToggleGroup.ToggleGroupItem
                                                    value='5' 
                                                    className={`w-8 h-8 rounded  gap ${weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                                    title='sexta'
                                                >S</ToggleGroup.ToggleGroupItem>

                                                <ToggleGroup.ToggleGroupItem
                                                    value='6' 
                                                    className={`w-8 h-8 rounded  gap ${weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                                    title='sabado'
                                                >S</ToggleGroup.ToggleGroupItem>
                                                </ToggleGroup.Root> 
                                          
                                        </div>
                                        <div className='flex flex-col gap-2 flex-1'>
                                            <label htmlFor="hourStar">Qual horario?</label>
                                            <div className='grid grid-cols-2 gap-2'>
                                                <Input id="hourStar" type="time" placeholder='De' />
                                                <Input id="hourEnd" type="time" placeholder='Até' />
                                            </div>
                                        </div>
                                    </div>
                                <label className='mt-2 items-center flex gap-2 text-sm'>
                                    <Checkbox.Root className='p-1 w-6 h-6 rounded bg-zinc-900 '>
                                        <Checkbox.CheckboxIndicator>
                                            <Check className='w-4 h-4 text-emerald-400'/>
                                        </Checkbox.CheckboxIndicator>
                                    
                                    </Checkbox.Root>
                                    Costumo me conectar no voip
                                </label>
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
    )
}
