import React from 'react'
//import '../css/btn1.css'
//import '../css/btn2.css'
//import '../css/arrow.css'
import video from '../images/video.jpg'
import video2 from '../images/video2.jpg'
//import video3 from '../images/video3.jpg'
const Button = () => {
  return (
    <>
    <div className="vinn">
        
        <div className="texas">
            <h1> <span>Teachers'</span> Section! <br/>Upload <br> Your </br><span>Videos</span></h1>
        </div>


        <div className="pper">

             <div id="wrapper12">
                <div id="wrapper-inner31">
                    <div id="scroll-down56">
                        <span className="arrows144">
                        </span>
                        <span id="scroll-title130">
                            Here
                        </span>
                    </div>
                </div>
            </div>

            <div className="wrapper126">
                <div className="link_wrapper21">
                    <a href="#">Upload</a>
                    <div className="icon468">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                        <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
                        </svg>
                    </div>
                </div>  
            </div>  

        </div> 

       

        <div className="imv">
            <img src={video} alt=""/>
        </div>      
        <div className="mi">
            <img src={video2} alt=""/>
        </div>      


    </div>
    </>
  )
}

export default Button;