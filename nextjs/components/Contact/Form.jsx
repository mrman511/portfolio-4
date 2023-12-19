export default function ContactForm({styles, formRef, handleFormSubmit}){
  const inputClass = 'w-full h-10 p-2  bg-transparent rounded-lg';

  
  return(
    <form 
        className="relative w-full h-auto sm:w-11/12 md:w-10/12 lg:w-8/12 flex flex-wrap justify-between text-lg"
        // onSubmit={handleFormSubmit}
        method="POST"
        name="contact"
        ref={ formRef }
        >
        <div className="relative w-full sm:w-[49%] my-2 sm:my-4">
          <input 
            className={ [styles.input, inputClass].join(' ') } 
            type='text' 
            name='name' 
            placeholder="Name"
          />
        </div>

        <div className="relative w-full sm:w-[49%] my-2 sm:my-4">
          <input 
            className={ [styles.input, inputClass].join(' ') } 
            type='email' 
            name='email' 
            placeholder="Email"
          />
        </div>

        <div className="relative w-full my-2 sm:my-4">
          <input 
            className={ [styles.input, inputClass].join(' ') } 
            type='text' 
            name='subject' 
            placeholder="Subject"
          />
        </div>
        
        <div className="relative w-full h-48 my-2 sm:my-4">
          <textarea 
            className={ [styles.input, 'w-full h-full p-2 bg-transparent rounded-lg '].join(' ') } 
            type='text' 
            name='message' 
            placeholder="Please type your message here."
          />
        </div>

        <button onClick={handleFormSubmit} className={[styles.input, 'w-48 h-10 rounded-lg my-2 sm:my-4'].join(' ')} type="submit" >Send</button>
      </form>
  );
}