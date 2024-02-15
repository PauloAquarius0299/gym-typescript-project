import React from 'react';
import { SelectedPage } from '@/shared/types';
import {useForm} from 'react-hook-form'
import {motion} from 'framer-motion';
import Htext from '@/shared/Htext';
import imgC from '../../assets/contact-img.png';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Contacts = ({ setSelectedPage }: Props) => {
    const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

    const {
        register,
        trigger,
        formState: {errors },
    } = useForm();

    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    };

  return (
    <section id='contatos' className='mx-auto w-5/6 pt-24 pb-32'>
        <div>

            {/*HEADER */}
            <div>
                <Htext>
                    <span >APROVEITE PARA ENTRAR NO <span className='text-primary-500'>SHAPE!</span></span> 
                </Htext>
                <p className='my-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus numquam beatae modi! Rem doloremque ullam maiores quaerat fugit dicta, ea sunt ipsa, quam nemo assumenda veritatis voluptatem culpa iure deserunt!
                </p>
            </div>

            {/* FORM E IMAGEM */}
            <div className='mt-10 justify-between gap-8 md:flex'>
                <div>
                    <form action="https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e"
                    onSubmit={onSubmit}
                    target='_blank'
                    method='POST'
                    >
                        <input type="text" 
                        className={inputStyles}
                        placeholder='NOME'
                        {...register("name", {
                            required: true,
                            maxLength: 100,
                        })}
                        />
                        {errors.name && (
                            <p className='mt-1 text-primary-500'>
                                {errors.name.type === 'required' && 'This field id required.'}
                                {errors.name.type === 'maxLength' && 'Max lenght is 100 char'}
                            </p>
                        )}
                        <input type="text" 
                        className={inputStyles}
                        placeholder='SEU EMAIL'
                        {...register('email', {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        } )}
                        />
                        {errors.email && (
                            <p className='mt-1 text-primary-500'>
                                {errors.email.type === 'required' && 'This field is required'}
                                {errors.email.type === 'pattern' && 'Invalid email address'}
                            </p>
                        )}      

                        <textarea className={inputStyles} placeholder='SUA MENSSAGEM' 
                        cols={50} 
                        rows={4}
                        {...register('message', {
                            required: true,
                            maxLength: 2000,
                        })} 
                        >
                        {errors.message && (
                            <p className='mt-1 text-primary-500'>
                                {errors.message.type === 'required' && 'This field is required.'}
                                {errors.message.type === 'maxLength' && 'Max lenght is 2000 char'}
                            </p>
                        )}
                            </textarea>
                        <button
                        type='submit'
                        className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:bg-primary-300'
                        >
                            ENVIAR
                        </button>             
                    </form>
                </div>
                <div>
                    <div className='w-full before:absolute before:bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext'>
                        <img src={imgC} alt="" className='w-[600px] mt-2 ' />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contacts;