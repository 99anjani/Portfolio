import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import background_contact from "../Assets/background.png";
import {ToastContainer, toast } from "react-toastify";
import "./Contact.css";
import { BrowserRouter } from "react-router-dom";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const { user_name, user_email, message } = form.current;
    if (!user_name.value || !user_email.value || !message.value) {
      toast.error("Please fill in all the fields.");
      return;
    }
    emailjs
      .sendForm(
        "service_crk1uiq",
        "template_jo8dwmj",
        form.current,
        "V1rRXQeTneDP1vqJ0"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success(result.text);
        },
        (error) => {
          console.log(error.text);
          toast.error("Send Fail");
        }
      );
  };


  return (
    <div className="contact-container" id="contact">
      <div className="ptf-contact">📧 Contact</div>
      <div className="contact">
        
        <form className="form-box" ref={form} onSubmit={sendEmail}>
          <table>
          <tr className="form-item">
            <td className="name-td">Name</td>
            <input className="form-input" type="text" name="user_name" />
          </tr>

          <tr className="form-item">
            <td className="email-td">Email</td>
            <input className="form-input" type="email" name="user_email" />
          </tr>
          <tr className="form-item">
            <td className="message-td">Message</td>  
            <textarea name="message" />
          </tr><tr>
          <input className="form-submit" type="submit" value="Send" />
          </tr>
          </table>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
