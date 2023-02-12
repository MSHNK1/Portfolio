import React from 'react';
import PageContent from '../../UI/pageContent/pageContent';
import './contact.css';
import Form from './form/form';

function Contact() {
  return (
    <PageContent idTp='Contact' classTp='contact text-center'>
        <h1 className='text-2xl tablet:text-3xl laptop:text-4xl font-bold uppercase pb-8 mobile-xl:pb-20 animate__animated animate__zoomInDown'>Contact Me</h1>
        <div className='flex flex-col gap-8 mobile-xl:flex-row justify-center mobile-xl:gap-x-32'>
            <div className='flex flex-col items-center'>
                <i className="fa fa-envelope"></i>
                <a href='mailto:nikaqochqiani@yahoo.com'>nikaqochqiani@yahoo.com</a>
                <a href='mailto:qochqianin@yahoo.com'>qochqianin@yahoo.com</a>
            </div>
            <div className='flex flex-col items-center'>
                <i className="fa fa-phone"></i>
                <a href='tel:+995598825487'>(+995) 598 82 54 87</a>
            </div>
        </div>
        <Form />
    </PageContent>
  )
};

export default Contact;