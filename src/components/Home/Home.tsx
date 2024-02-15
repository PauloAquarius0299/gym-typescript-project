import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/shared/types'

import ActionButton from '@/shared/ActionButton';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import home from '../../assets/home-image.png';

import logo1 from '../../assets/marca1.png';
import logo2 from '../../assets/marca2.png';
import logo3 from '../../assets/marca4.png';
import logo4 from '../../assets/marca5.png';

import { motion } from 'framer-motion';


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

export const Home = ({setSelectedPage}: Props) => {
    const isAboutMediumScreens = useMediaQuery("(min-width:1060px)");

    return (
        <section id='inicio' className='gap-16 bg-black-500 py-10 md:h-full md:pb-0'>
            {/*IMAGE AND MAIN HEADER*/}
            <motion.div
            className='mx-auto w-5/6 items-center justify-center md:flex md:h-5/6'
            onViewportEnter={() => setSelectedPage(SelectedPage.Inicio)}
            >
            {/*MAIN HEADER*/}
            <div className='z-10 mt-32 md:basis-3/5'>
                {/* HEADINGS*/}
                <motion.div
                className='md:-mt-20'
                initial='hidden'
                whileInView='visible'
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: {opacity: 1, x: 0},
                }}
                >

                    <div className='relative'>
                        <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:context-evolvetext'>
                            <h1 className='text-primary-500 font-semibold text-8xl flex items-center '>Energizar Envolve</h1>
                            
                        </div>
                        
                    </div>
                    

                    <p className='mt-8 text-sm'>
                    Academia incomparável. Aulas de fitness de treinamento incomparáveis. Equipamentos profissinais
               para obter as formas corporais que você sonha. 
                    </p>

                    {/* ACTIONS */}
                    <motion.div
                    className='mt-8 flex items-center gap-8'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay: 0.2, duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -50},
                        visible: {opacity: 1, x: 0},
                    }}
                    >
                        <ActionButton setSelectedPage={setSelectedPage} >
                            Aproveite
                        </ActionButton>
                        <AnchorLink
                        className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                        onClick={() => setSelectedPage(SelectedPage.Contatos)}
                        href={`#${SelectedPage.Contatos}`}
                        >
                            <a href="#">Leia Mais</a>
                        </AnchorLink>
                    </motion.div>
                </motion.div>

                
                </div>
            {/*IMAGEM */}
                <div
                className='flex  justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'
                >
                    <img src={home} alt="home imagem" className='flex  w-200 h-200' />
                </div>

                 
            </motion.div>

           
            {/* SPONSORS */}
                {isAboutMediumScreens && (
                    <div className='h-[150px] w-full bg-black-100 py-10 '>
                    <div className='mx-auto w-5/6 items-center -mt-8'>
                      <div className='flex items-center justify-center grid-cols-4 gap-40'>
                        <img className='w-30 h-20' src={logo1} alt="" />
                        <img className='w-30 h-20' src={logo2} alt="" />
                        <img className='w-36 h-30 ' src={logo3} alt="" />
                        <img className='w-36 h-30' src={logo4} alt="" />
                      </div>
                    </div>
                  </div>
                  
                )}
        </section>
    )
}

export default Home;