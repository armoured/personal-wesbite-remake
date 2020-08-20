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
import { useVisible } from 'react-hooks-visible';
import mejohnwick from './img/mejohnwick.jpg';

const scrollToRef = (ref) => window.scrollTo({
  top: ref.current.offsetTop,
  behavior: 'smooth'
})   

class App extends Component {

  constructor( props ) {
    super( props );

    this.state = {
      homeHeight: null,
      fixedNav: false
    }
    this.myRef = React.createRef() 
    

    console.log(React.version);

  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }
  
  listenToScroll = () => {
 
    const scrolled = window.pageYOffset
    let fixedNav = false
    if (this.state.homeHeight !== null && scrolled >= this.state.homeHeight) {
      fixedNav = true
    } 
  
    this.setState({
      fixedNav
    })
  }

  refCallback = el => {
    console.log(el.getBoundingClientRect());
    const homeHeight = el.getBoundingClientRect().height;
    this.setState({
      homeHeight
    })
  };

  render() {


    return (
      <div className="overflow-wrap">

        {/* HOME */}

        <section id="home" className="flex height-fix" ref={this.refCallback}>
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

              <nav className={this.state.fixedNav ? "flex desk fixed" : "flex desk"}>
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

        {/* ABOUT */}

        <section id="about" ref={this.myRef}>
          <div className="container flex">
            <VisibilitySensor once >
              {({ isVisible }) => (
                <div 
                  className={isVisible ? "header waypoint animated slide-in-left" : "header waypoint"} 
                  data-animation={isVisible ? "slide-in-left": ""} 
                >
                  ABOUT
                </div>
              )}
            </VisibilitySensor>
            <VisibilitySensor once >
              {({ isVisible }) => (
                <div 
                  className={isVisible ? "header-bar waypoint animated slide-in-left" : "header-bar waypoint"}  
                  data-animation={isVisible ? "slide-in-left" : ""} 
                  style={{'animation-delay': "0.5s"}}
                />   
              )}
            </VisibilitySensor>
            
           
                <div className="flex row label-wrap">
                  <div className="flex row-gt-sm">
                    <div className="flex bullet-wrap">

                    <VisibilitySensor once >
                      {({ isVisible }) => (
                      <div className={isVisible ? "hex-wrap waypoint animated flip-in-x" : "hex-wrap waypoint"} data-animation={isVisible ? "flip-in-x" : ""} >
                        <div className="hexagon" >
                          <i className="mdi mdi-speedometer">

                          </i>
                        </div>
                      </div> 
                      )}
                      </VisibilitySensor>

                      <VisibilitySensor once >
                      {({ isVisible }) => (
                      <div className={isVisible ? "waypoint animated fade-in" : "waypoint"} data-animation={isVisible ? "fade-in" : ""} style={{'animation-delay': "0.4s"}} >
                        <div className="label bold">
                          Violence
                        </div>
                        <div>
                          Fast load times and lag free interaction, my highest priority
                        </div>
                      </div>
                      )}
                      </VisibilitySensor>

                    </div>

                    <div className="flex bullet-wrap">

                    <VisibilitySensor once >
                      {({ isVisible }) => (
                      <div className={isVisible ? "hex-wrap waypoint animated flip-in-x" : "hex-wrap waypoint"} data-animation={isVisible ? "flip-in-x" : ""} style={{'animation-delay': "0.2s"}}>
                        <div className="hexagon" >
                          <i className="mdi mdi-cellphone-link">

                          </i>
                        </div>
                      </div> 
                      )}
                      </VisibilitySensor>
                      
                      <VisibilitySensor once >
                      {({ isVisible }) => (
                      <div className={isVisible ? "waypoint animated fade-in" : "waypoint"} data-animation={isVisible ? "fade-in" : ""} style={{'animation-delay': "0.6s"}}>
                        <div className="label bold">
                          Speed
                        </div>
                        <div>
                          My layouts will work on any device, big or small.
                        </div>
                      </div>
                      )}
                      </VisibilitySensor>

                    </div>

                  </div>

                  <div className="flex row-gt-sm">
                    <div className="flex bullet-wrap">

                    <VisibilitySensor once >
                      {({ isVisible }) => (
                      <div className={isVisible ? "hex-wrap waypoint animated flip-in-x" : "hex-wrap waypoint"} data-animation={isVisible ? "flip-in-x" : ""} style={{'animation-delay': "0.4s"}} >
                        <div className="hexagon" >
                          <i className="mdi mdi-lightbulb-outline">

                          </i>
                        </div>
                      </div> 
                    )}
                    </VisibilitySensor>

                    <VisibilitySensor once >
                      {({ isVisible }) => (
                      <div className={isVisible ? "waypoint animated fade-in" : "waypoint"} data-animation={isVisible ? "fade-in" : ""} style={{'animation-delay': "0.8s"}} >
                        <div className="label bold">
                          Momentum
                        </div>
                        <div>
                          Strong preference for easy to use, intuitive UX/UI.
                        </div>
                      </div>
                    )}
                    </VisibilitySensor>

                    </div>

                    <div className="flex bullet-wrap">

                    <VisibilitySensor once >
                      {({ isVisible }) => (
                      <div className={isVisible ? "hex-wrap waypoint animated flip-in-x" : "hex-wrap waypoint"} data-animation={isVisible ? "flip-in-x" : ""} style={{'animation-delay': "0.6s"}} >
                        <div className="hexagon" >
                          <i className="mdi mdi-rocket">

                          </i>
                        </div>
                      </div> 
                      )}
                      </VisibilitySensor>

                      <VisibilitySensor once >
                      {({ isVisible }) => (
                      <div className={isVisible ? "waypoint animated fade-in" : "waypoint"} data-animation={isVisible ? "fade-in" : ""} style={{'animation-delay': "1s"}}>
                        <div className="label bold">
                          Dynamic
                        </div>
                        <div>
                          Websites don't have to be static, I love making pages come to life. 
                        </div>
                      </div>
                      )}
                      </VisibilitySensor>

                    </div>

                  </div>
                </div>

                <VisibilitySensor once >
                {({ isVisible }) => (
                  <div className="skills-wrapper flex row-gt-sm">
                    <div
                      className={isVisible ? "flex flex-50-gt-sm waypoint animated slide-in-left" : "flex flex-50-gt-sm waypoint"}
                      data-animated={isVisible ? "slide-in-left" : ""}
                      // style={{'animation-delay': "1s"}}
                    >
                      <img className="me" src={mejohnwick}> 
                      
                      </img>
                      <div className="label bold">
                        Who's this guy?
                      </div>
                      <div>
                        I'm a Mid-Level Backend and DevOps Engineer at Fitsense in Sydney, Australia.
                        <br></br>
                        I'm a recent computer science graduate with a passion for distributed systems.
                      </div>
                    </div>
                  </div>
                )}
                </VisibilitySensor>
              
          </div>
        </section>          
      </div>
    );
  }
}

export default App;
