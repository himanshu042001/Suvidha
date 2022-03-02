import React, { Component } from 'react';
import '../css/Why.css';
import any from '../images/learn anywhere.png'
import free from '../images/free.png'
import cer from '../images/certificate.png'

export default class Why extends Component {
  render() {
    return <div>
        <section class="suvidha">
      <h1 className='h1890'>Why we learn on Suvidha ?</h1>
      <div class="row">

        <div class="suvidha-col1">
          <img src={any} alt="" class="pngr"/>
          <h3>Learn Anywhere</h3>
          <p>Join classes from anywhere on mobile or desktop</p>
        </div>
        
        <div class="suvidha-col2">
          <img src={free} alt="" class="pngr" />
          <h3>Free Of Cost</h3>
          <p>We ensure quality education for Free to every student</p>
        </div>
        <div class="suvidha-col3">
          <img src={cer} alt="" class="pngr" />
          <h3>Certification</h3>
          <p>We ensure Course completion certification to every student</p>
        </div>
      </div>
    </section>
    </div>;
  }
}
