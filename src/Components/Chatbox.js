import React from "react";
import '../css/Chatbox.css'
import user from '../images/user.svg'
import robot from '../images/robot.svg'
const Chatbox = () => {
  return (
    <>
      <div className='align89'>
      <div className='con427'>
        <div className='sec1003'>
          <div className='up023'>
            <div className='up1005'>
              <div className='log056'>
                <img src={user} alt="user" className='ig1023'></img>
              </div>
              <div className='txt189'>Hello !, How are you?</div>
            </div>
            <div className='up2005'>
              <div className='log056'>
                <img src={user} alt="user" className='ig1023'></img>
              </div>
              <div className='txt189'>Great :)</div>
            </div>
          </div>
          <div className='down705'>
            <div className='txt209'>Hi !!</div>
            <div className='txt209'>I am fine.</div>
          </div>
        </div>
        <div className='sec2003'>
          <input type='text' id='in042' name='in' placeholder=' Type something' autoFocus ></input>
          <button id="butt520">Send</button>
        </div>
      </div>

      <div className='c-pic42'>
        <img src={robot}></img>
      </div>
    </div>
    </>
  );
};

export default Chatbox;