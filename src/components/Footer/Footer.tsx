import React from  'react'


const Footer = () => {
    return(
        <footer className='bg-primary-100 py-16'>
            <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
                <div className='mt-16 basis-1/2 md:mt-0'>
                <h2 className='text-primary-500 font-semibold text-2xl flex items-center'>Energizar <span className='flex inline-block p-2 mr-4'>Envolve</span></h2>
                    <p className='my-5'>
                    Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
                    </p>
                    <p>© Energizar Evolve All Rights Reserved.</p>
                </div>
                <div className='mt-16 basis-1/4 md:mt-0'>
                    <h4 className='font-bold '>LINK</h4>
                    <a href='#' className='my-5 hover:text-primary-500  flex' >Inicio</a>
                    <a href='#' className='my-5 hover:text-primary-500 flex' >Beneficios</a>
                    <a href='#' className='my-5 hover:text-primary-500 flex' >Aulas</a>
                    <a href='#' className='my-5 hover:text-primary-500 flex' >Contatos</a>
                </div>
                <div className='mt-16 basis-1/4 md:mt-0'>
                    <h4 className='font-bold '>EMPRESA</h4>
                    <a href='#' className='my-5 hover:text-primary-500  flex' >Nutricionista</a>
                    <a href='#' className='my-5 hover:text-primary-500 flex' >Suporte</a>
                    <a href='#' className='my-5 hover:text-primary-500 flex' >Marcas</a>
                    <a href='#' className='my-5 hover:text-primary-500 flex' >Carreira</a>
                </div>
                <div className='mt-16 basis-1/4 md:mt-0'>
                    <h4 className='font-bold'>Nossos Contatos</h4>
                    <p className='my-5'>Tempus metus mattis risus volutpat egestas.</p>
                    <p>(31) 987654321</p>
                    <p className='my-5'>fulano@123gmail.com</p>
                </div>

            </div>
            <div>
                <a href='https://github.com/PauloAquarius0299' target='_blank' className='items-center justify-center flex basis-1/4 md:mt-2 hover:text-primary-500 '>Feito por Paulo.Dev</a>
            </div>
        </footer>
    )
}

export default Footer;