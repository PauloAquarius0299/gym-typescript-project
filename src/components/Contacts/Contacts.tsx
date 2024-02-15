
import {useForm} from 'react-hook-form'
import {motion} from 'framer-motion';
import Htext from '@/shared/Htext';
import imgC from '../../assets/contact-img.png';



const Contacts = () => {
    const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

    const {
        register,
        trigger,
        formState: {errors },
    } = useForm();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    };

  return (
    <section id='contatos' className='mx-auto w-5/6 pt-24 pb-32'>
        <div>

            {/*HEADER */}
            <motion.div
            className='md:w-3/5'
            initial='hidden'
            whileInView='visible'
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
                hidden: {opacity: 0, x: -50},
                visible: {opacity: 1, x:0 },
            }}
            >
                <Htext>
                    <span >APROVEITE PARA ENTRAR NO <span className='text-primary-500'>SHAPE!</span></span> 
                </Htext>
                <p className='my-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus numquam beatae modi! Rem doloremque ullam maiores quaerat fugit dicta, ea sunt ipsa, quam nemo assumenda veritatis voluptatem culpa iure deserunt!
                </p>
            </motion.div>

            {/* FORM E IMAGEM */}
            <div className='mt-10 justify-between gap-8 md:flex'>
                <motion.div
                className="mt-10 basis-3/5 md:mt-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                >
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
                </motion.div>
                <motion.div
                className="relative mt-16 basis-2/5 md:-mt-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                >
                    <div className='w-full before:absolute before:bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext'>
                        <img src={imgC} alt="" className='w-[600px] mt-2 ' />
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Contacts;