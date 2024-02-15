import React, {useState}  from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import Link from './Link';
import {SelectedPage} from '../../shared/types';
import { useMediaQuery } from '../../hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton';



type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

export const Navbar = ({isTopOfPage, selectedPage, setSelectedPage }: Props) => {

    const flexBetween = 'flex items-center justify-between';
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboutMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage ? " " : 'bg-primary-100 drop-shadow'


    return (
        <nav className=''>
            <div
            className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6 bg-black-500`}
            >
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    {/* LEFT SIDE */}
                    <h2 className='text-primary-500 font-semibold text-2xl flex items-center'>Energizar <span className='flex inline-block p-2 mr-4'>Envolve</span></h2>
                    

                    {/* RIGHT SIDE */}
                   {isAboutMediumScreens ? (
                   <div className={`${flexBetween} w-full font-semibold`}>
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <Link page='Inicio' 
                            selectedPage={selectedPage} 
                            setSelectedPage={setSelectedPage} />
                            <Link page='Beneficios' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page='Nosso Espaço' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page='Contatos' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        </div>
                        <div className={`${flexBetween} gap-8 `}>
                            <a href="#" className='hover:text-secondary-500'>Login In</a>
                            <ActionButton setSelectedPage={setSelectedPage} >
                                Se Torne Membro
                            </ActionButton>
                        </div>
                    </div>
                   ) : (
                        <button
                        className='rounded-full  bg-primary-500 hover:bg-secondary-500 p-2'
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <Bars3Icon className='h-6 w-6 text-white' />
                        </button>
                    )}
                </div>
            </div>
            </div>
            {/*MOBILE MENU MODAL */}
            {!isAboutMediumScreens && isMenuToggled && (
                <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-500 drop-shadow-xl'>
                    {/*CLOSE MENU MODAL */}
                    <div className='flex justify-end p-12'>
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <XMarkIcon className='h-6 w-6 text-white ' />
                        </button>
                    </div>
                    {/* MENU ITENS */}
                    <div className='ml-[33%] flex flex-col gap-10 text-2xl'>
                    <Link page='Inicio' 
                            selectedPage={selectedPage} 
                            setSelectedPage={setSelectedPage}
                             />
                            <Link page='Beneficios' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page='Nosso Espaço' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page='Contatos' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

                            
                            
                    </div>
                </div>
                
            )}
        </nav>
    )
}

export default Navbar;
