'use client'

import { useState, useRef } from 'react';

import ContactForm from './Form';
import Header from './Header';
import styles from '@/styles/Contact.module.scss';

import { sendEmail } from '@/utils/api/sendEmail';

export default function ContactPage({globalStyles}){
  const [errObj, setErrObj] = useState({})
  const formRef = useRef()
  const emailRegrex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 

  const handleFormSubmit = () => {
    const formData = new FormData(formRef.current)
    const formErrors = validateForm(formData)
    if (formErrors){
      setErrObj(prev=>({ ...formErrors }))
    } else {
      sendEmail(formData)
    }
  }

  const validateForm = (formData) => {
    const subject = formData.get('subject');
    const message = formData.get('message');
    const errors={};
    if (!formData.get('name')){
      errors.name = 'Please enter a name.';
    } 
    if (!formData.get('email')){
      errors.email = 'Please enter a email to reply to';
    } else if (!formData.get('email').match(emailRegrex)){
      errors.email = `Email should match pattern: "johndoe@web.com".`;
    }
    if (!subject && !message){
      errors.subject = 'Please include either a subject or a message.';
    } else if (!message && subject.length < 10){
      errors.subject = 'Please include a more detailed subject';
    } else if (!subject && message.length < 10){
      errors.message = 'Please include a more detailed message';
    } else if ( subject.length < 10 && message.length < 10){
      errors.subject = 'Please include a more detailed subject or message';
    }

    return Object.keys(errors).length > 0 ? errors : null;
  }

  return(
    <section className="w-full h-full px-[7%] sm:px-4 flex flex-col justify-center items-center">
      <Header />
      <ContactForm styles={ styles } handleFormSubmit={ handleFormSubmit } errObj={ errObj } formRef={ formRef } />
    </section>
  );
}