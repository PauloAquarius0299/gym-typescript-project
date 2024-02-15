import React from 'react';
import HText from '@/shared/Htext';
import ActionButton from '@/shared/ActionButton';
import { BenefitType, SelectedPage } from '@/shared/types';
import { CgGym } from "react-icons/cg";
import { FaUsers } from "react-icons/fa";
import { MdOutlineDiversity2 } from "react-icons/md";
import {motion} from 'framer-motion'
import Benefit from './benefit'
import Bimg from '../../assets/benefit-img.png'

const benefits: Array<BenefitType> = [
    {
        icon: <CgGym className='h-6 w-6' />,
        title: 'Equipamentos de Ultima Geração',
        description: 'lorem eque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et'
    },
    {
        icon: <MdOutlineDiversity2 className='h-6 w-6' />,
        title: 'Centenas de Aulas Diversas',
        description: 'lorem eque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et'
    },
    {
        icon: <FaUsers className='h-6 w-6' />,
        title: 'Treinadores  Profissionais',
        description: 'lorem eque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et'
    },
];

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2},
    },
};

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({setSelectedPage }: Props) => {
  return (
    <section id='benefits' className='mx-auto min-h-full w-5/6 py-20'>
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefit)}
        >
            {/*HEADER */ }
            <motion.div className='md:my-5 md:w-3/5'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            >
                <HText>MUITO MAIS DO QUE UMA ACADEMIA</HText>
                <p className='my-5 text-sm'>
                Fornecemos equipamentos de ginástica, treinadores e aulas de classe mundial para
            levar você aos seus objetivos finais de condicionamento físico com facilidade. Fornecemos verdadeiro
            cuidado com cada membro.
                </p>
                 </motion.div>

                {/* BENEFICIOS */}
                <motion.div 
                className='mt-5 items-center justify-between gap-8 md:flex'
                initial='hidden'
                whileInView='visible'
                viewport={{once:true, amount:0.5 }}
                variants={container}
                >
                    {benefits.map((benefit: BenefitType) =>(
                       <Benefit 
                       key={benefit.title}
                       icon={benefit.icon}
                       title={benefit.title}
                       description={benefit.description}
                       setSelectedPage={setSelectedPage}
                       />
                    ))}
                </motion.div>

                {/* DESCRIÇÃO DO GRAFICO */}
                <div className=' mt-16 items-center justify-center gap-20 md:mt-28 md:flex'>
                    {/* GRAFICO */}
                    <img src={Bimg} alt="" 
                    className='flex mx-auto mb-10 w-[520px]'
                    />
                    {/* DESCRIÇÃO */}
                
                <div>
                    {/*TITLE*/}
                    <div className='relative'>
                        <div className='before:absolute before:-top-20  before:-left-20 before:content-abstractwaves'>
                            <motion.div
                            initial='hidden'
                            whileInView='visible'
                            viewport={{once: true, amount: 0.5}}
                            transition={{duration: 0.5}}
                            variants={{
                                hidden: {opacity:0,x:50},
                                visible: {opacity:1, x:0},
                            }}
                            >
                                <HText >
                                    MILHÕES DE MEMBROS SATISFEITOS EM FAZEREM PARTE DA
                                    <span className='text-primary-500 '> ENERGIZAR EVOLVE</span>
                                </HText>
                            </motion.div>
                        </div>
                    </div>
                    {/* DESCRIPT */}

                    <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once: true, amount:0.5}}
                    transition={{delay:0.2, duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: 50},
                        visible: {opacity:1, x:0},
                    }}
                    >
                        <p className='my-5'>
                        lorem Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                Felis orci diam odio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque iure exercitationem impedit atque.
                        </p>
                        <p className='mb-5'>
                        lorem Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                enim mattis odio in risus nunc.
                        </p>
                    </motion.div>
                    <div className='relative mt-16'>
                        <div className='before:absolute before:-bottom-20 before:right-40 before:z-[1] before:content-sparkles'>
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Aproveite
                            </ActionButton>
                        </div>
                    </div>
                </div>
           </div>
        </motion.div>
    </section>
  )
}

export default Benefits