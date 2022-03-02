import React, { Component } from 'react';
import '../ccard.css'
export default class Course extends Component {
  render() {
    return <div >
      <h1 style={{textAlign: 'center'}}>Course</h1>
      <div className="ccontainer">
        <div className="ccard">
          <div className="chead">
          <img className="cimg"src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" alt=""/>
          </div>
          <div className="cbody">
            <h3>HTML</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, dicta.</p>
            <button>Select</button>
          </div>
        </div>

        <div className="ccard">
          <div className="chead">
          <img className="cimg"src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt=""/>
          </div>
          <div className="cbody">
            <h3>CSS</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, dicta.</p>
            <button>Select</button>
          </div>
        </div>

        <div className="ccard">
          <div className="chead">
          <img className="cimg"src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" alt=""/>
          </div>
          <div className="cbody">
            <h3>Js</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, dicta.</p>
            <button>Select</button>
          </div>
        </div>
      </div>
    </div>;
  }
}
