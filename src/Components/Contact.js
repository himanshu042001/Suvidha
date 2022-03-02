import React, { Component } from 'react';
import '../css/Contact.css';
import shape from '../images/shape.png'
import loc from '../images/location.png'
import em from '../images/email.png'
import pn from '../images/phone.png'

export default function Contact() {
    return ( 
    <>
    <div>
            <div className="mainBox">
      <span className="big-circle"></span>
      <img src={shape} className="square" alt="" />
      <div className="detailForm">
        <div className="contactInformation">
          <h3 className="contactInformationTitle">Let's get in touch</h3>
          <p className="contactInformationText">
            Thanks for Joining Suvidha!!<br/>
            Linked In: Suvidha Foundation<br/>
            Instagram: SuvidhaFoundationedutech<br/>
            Youtube Channels: Suvidha Foundation, Codekaro Yaaro
          </p>

          <div className="suvidhaInfo">
            <div className="suvidhaInformation">
              <img src={loc} className="icon" alt="" />
              <p style={{textAlign:'left'}}>H.No. 1951,W.N.4,Khaperkheda, Saoner,Nagpur</p>
            </div>
            <div className="suvidhaInformation">
              <img src={em} className="icon" alt="" />
              <p>Info@Suvidhafoundationedutech.Org</p>
            </div>
            <div className="suvidhaInformation">
              <img src={pn} className="icon" alt="" />
              <p>7020044091</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="index.html" autocomplete="off">
            <h3 className="contactInformationTitle">Contact us</h3>
            <div className="inputBox">
              <input type="text" name="name" className="directInput" placeholder='Username' />
              {/* <label for="">Username</label> */}
              {/* <span>Username</span> */}
            </div>
            <div className="inputBox">
              <input type="email" name="email" className="directInput" placeholder='Email' />
              {/* <label for="">Email</label> */}
              {/* <span>Email</span> */}
            </div>
            <div className="inputBox">
              <input type="tel" name="phone" className="directInput" placeholder='Phone'/>
              {/* <label for="">Phone</label> */}
              {/* <span>Phone</span> */}
            </div>
            <div className="inputBox textarea" placeholder='Message'>
              <textarea name="message" className="directInput" placeholder='Feedback Us !!'></textarea>
              {/* <label for="">Message</label> */}
              {/* <span>Message</span> */}
            </div>
            <input type="submit" value="Send" className="submitSendButton" />
          </form>
        </div>
      </div></div></div>
   </>
    )
  }