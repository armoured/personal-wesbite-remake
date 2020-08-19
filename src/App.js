import React, { Component } from 'react';
import {QuickStartCanvas} from "react-pts-canvas";
import {LineExample} from './LineExample';
import {PointsGraphic} from './PointsGraphic';
import {Util, Line} from 'pts';
import './App.css';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import VisibilitySensor from 'react-visibility-sensor';
import VisibilitySensor from "./VisibilitySensor";
import { useVisible } from 'react-hooks-visible'

const scrollToRef = (ref) => window.scrollTo({
  top: ref.current.offsetTop,
  behavior: 'smooth'
})   


const Slidingtext = () => {
  const [targetRef, visible] = useVisible()

  return (
    <div ref={targetRef} className={visible ? "header waypoint animated slide-in-left" : "header waypoint"} data-animation={visible ? "slide-in-left": ""} >
      ABOUT
    </div> 
  )
}

class App extends Component {

  constructor( props ) {
    super( props );

    this.state = {
      isVisible: false
    }
    this.myRef = React.createRef() 

    console.log(React.version);

  }

  onChange(isVisible) {
     this.setState({isVisible: isVisible})
  }

  // VisibleComponent = () => {
  //   const [targetRef, visible] = useVisible()
  //   return (
  //     <div ref={targetRef} className={visible ? "header waypoint animated slide-in-left" : "header waypoint"} data-animation={visible ? "slide-in-left": ""} >
  //       ABOUT
  //     </div>    
  //   )
  // }

  render() {


    return (
      <div className="overflow-wrap">
        <section id="home" className="flex height-fix">
            <PointsGraphic name="canvas" background="#252934" />
            <div className="flex">

              <div className="text">
                Hello, I'm 
                <span className="highlight"> Mitchell Shelton</span>
                .
                <br></br>
                I'm a full stack web developer
              </div>

              <div 
                className="button page-link" 
                dest="about"
                onClick={()=>scrollToRef(this.myRef)}
              >
                View my work <ArrowRightAltIcon className="mdi" />
              </div>

              <nav className="flex desk">
                <div className="link-wrap">
                  <div className="page-link active" dest="home">home</div>
                  <div className="page-link" dest="about">about</div>
                  <div className="page-link" dest="portfolio">portfolio</div>
                  <div className="page-link" dest="blog">blog</div>
                  <div className="page-link" dest="contact">contact</div>

                </div>
              </nav>

            </div>
        </section>
        <section id="about" ref={this.myRef}>
          {/* <div class="header waypoint animated slide-in-left" data-animation="slide-in-left">
            ABOUT
          </div> */}

        <VisibilitySensor once >
          {({ sensorRef, isVisible }) => (
            <div ref={sensorRef} className={isVisible ? "header waypoint animated slide-in-left" : "header waypoint"} data-animation={isVisible ? "slide-in-left": ""} >
              ABOUT
            </div>
          )}
        </VisibilitySensor>

  
        </section>          
      </div>
    );
  }
}

// View my work <ArrowRightAltIcon />


export default App;
