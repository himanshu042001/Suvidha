import React, { Component } from 'react';
import '../css/filtclas.css'
export default class Classes extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(){
    // let val = document.getElementById("Classes").value;
    // console.log(val);

    // if(val == "School"){
    //   document.getElementById("University").style.display = "none";
    //   document.getElementById("School").style.display = "block";
    // }
    // else if(val == "University"){
    //   document.getElementById("School").style.display = "none";
    //   document.getElementById("University").style.display = "block";
    // }
    // else{
      document.getElementById("School").style.display = "Block";
      document.getElementById("University").style.display = "block";
    // }
  }


  render() {
    return <div style={{padding:"50px",position:"relative",display:'flex',justifyContent:"center",alignItems:"center"}}>
        {/* <h1 className="st">Classes</h1> */}
        <div className="transparent"style={{padding: "10px",width: "fit-content"}}>
        <ul>
        {/* <select name="cars" id="Classes" onChange={this.handleChange} className="FiltClas ">
          <option value="School">School</option>
          <option value="University">University</option>
        </select> */}
          <div id="School">
          <h1 style={{color:'#00B8A9'}}>Select Class</h1>
          <div className="st" style={{fontWeight:"bolder"}}>
          <li><input type="checkbox"></input>Class 1</li>
            <li><input type="checkbox"></input>Class 2</li>
            <li><input type="checkbox"></input>Class 3</li>
            <li><input type="checkbox"></input>Class 4</li>
            <li><input type="checkbox"></input>Class 5</li>
            <li><input type="checkbox"></input>Class 6</li>
            <li><input type="checkbox"></input>Class 7</li>
            <li><input type="checkbox"></input>Class 8</li>
            <li><input type="checkbox"></input>Class 9</li>
            <li><input type="checkbox"></input>Class 10</li>
            <li><input type="checkbox"></input>Class 11</li>
            <li><input type="checkbox"></input>Class 12</li>
          </div>
            
          </div>
      <br/><br/><br/><br/>
          <div id="University">
          <h1 style={{color:'#00B8A9'}}>Select Year</h1>
            <div className="st" style={{fontWeight:"bolder"}}>
            <li><input type="radio"></input>Year 1</li>
            <li><input type="checkbox"></input>Year 2</li>
            <li><input type="checkbox"></input>Year 3</li>
            <li><input type="checkbox"></input>Year 4</li>
            </div>
            </div>
        </ul>
        </div>
    </div>;
  }
}
