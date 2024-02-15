import React from 'react'
import { SelectedPage } from '@/shared/types';
import {motion} from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const childVariant = {
    hidden: {opacity: 0, scale: 0.9},
    visible: {opacity: 1, scale: 1},
};

type Props = {
    icon: JSX.Element;
    title: string;
    description: string;
    setSelectedPage: (value: SelectedPage) => void;
}

const index = ({icon, title, description, setSelectedPage}: Props) => {
  return (
    <motion.div
    variants={childVariant}
    className='mt-5 rounded-md border-2 border-primary-500 px-5 py-16 text-center'
    >
        <div className='mb-4 flex justify-center'>
            <div className='rounded-full border-2 border-gray-100 bg-black-500 p-4'>
                {icon}
            </div>
        </div>

        <h4 className='font-bold'>
            {title}
        </h4>
        <p className='my-3'>{description}</p>
        <AnchorLink
        className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
        onClick={() => setSelectedPage(SelectedPage.Contatos)}
        href={`#${SelectedPage.Contatos}`}
        >
            <p>Leia Mais</p>
        </AnchorLink>
    </motion.div>
  )
}

export default index;