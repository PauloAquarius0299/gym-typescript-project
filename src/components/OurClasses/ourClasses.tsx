import React from 'react'
import image1 from '@/assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4.jpg'
import image5 from '../../assets/image5.jpg'
import image6 from '../../assets/image6.jpg'

import {motion} from 'framer-motion'
import HText from '@/shared/Htext';
import Class from './Class'
import { SelectedPage, ClassType  } from '@/shared/types';

const classes: Array<ClassType> = [
    {
        name: 'Aulas de Aeróbica ',
        description: 'lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: image1,
    },
    {
        name: 'Aulas de FitDance',
        description: 'lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: image2,
    },
    {
        name: 'Aulas de Yoga',
        description: 'lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: image3,
    },
    {
        name: 'Aulas Fitness',
        description: 'lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: image4,
    },
    {
        name: 'Seção de Analise Corporal',
        description: 'lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: image5,
    },
    {
        name: 'Area de Musculação',
        description: 'lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: image6,
    },
];

type Props = {
    setSelectedPage: (value: SelectedPage) => void;

}

const ourClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id='ourclasses' className='w-full bg-black-100 p-8 py-40'>
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div
            className='mx-auto w-5/6'
            initial='hidden'
            whileInView='visible'
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
                hidden: {opacity: 0, x:-50},
                visible: {opacity: 1, x: 0},
            }}
            >
                <div  >
                    <HText>Nossas Aulas</HText>
                    <p className='py-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facere labore consequuntur facilis id dolores perferendis officia ipsa aperiam, recusandae iure qui sit natus ea ut voluptates dolorem ullam eos, Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores numquam asperiores labore voluptatum.
                    </p>
                </div>
            </motion.div>
            <div>
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
            </div>
        </motion.div>
    </section>
  )
}

export default ourClasses;