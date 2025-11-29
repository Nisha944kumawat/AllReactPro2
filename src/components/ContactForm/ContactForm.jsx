import { useState } from "react";
import image from "../../assets/Service.png";
import Button from '../Button/Button';
import styles from './ContactForm.module.css';
import { MdOutlineMessage } from "react-icons/md";
import { MdWifiCalling } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";

const ContactForm = () => {

const [name,setName]=useState("Nisha");
const [email,setEmail]=useState("nisha@gmail.com");
const [text,setText]=useState("Hi!  Krishna");


const onSubmit=(event)=>{
  event.preventDefault();

  setName(event.target[0].value);
  setEmail(event.target[1].value);
  setText(event.target[2].value);

};


  return (
    <section className={styles.container}>
      
      <div className={styles.contact_Form}>
           <div className={styles.top_btn}>
           <Button text="VIA SUPPORT CHAT" icon={<MdOutlineMessage fontSize="24px"/>}/>
           <Button  text="VIA CALL" icon={<MdWifiCalling fontSize="24px"/>}/>
           </div>

          <Button isOutline={true}
           text="VIA EMAIL FORM" icon={<MdAttachEmail fontSize="24px"/>}
           />

           <form onSubmit={onSubmit}>
           <div className={styles.form_control}>
               <label htmlFor="name">Name</label>
                <input type="text" name="name"/>
           </div>

            <div className={styles.form_control}>
                <label htmlFor="email">E-mail</label>
                <input type="mail" name="email"/>
           </div>

            <div className={styles.form_control}>
                <label htmlFor="text">Text</label>
                <textarea  name="text" rows="8"/>
           </div>

             <div style={{display:"flex",justifyContent:"end",}}>
             <Button text="SUBMIT BUTTON"/>
             </div>
             <div>
              {name+" "+email+" "+text}
             </div>
           </form>
      </div>
      
      <div className={styles.contact_Image}>
       <img src={image} alt="image-simple" />
      </div>
    </section>
  )
}

export default ContactForm;