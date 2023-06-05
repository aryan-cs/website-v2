import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./App.css";

import Text from "./components/Text";

import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App () {

       const [index, setIndex] = useState(0);
       const [indicator, setIndicator] = useState("-");

       useEffect(() => {

              const INDICATION = ["-", "\\", "|", "/"];

              setTimeout(() => {

                     setIndicator(INDICATION[(index) % INDICATION.length]);
                     setIndex(index + 1);

              }, 200);

       }, [index]);

       return (

              <>
              
                     <div className = "App">

                            <Text text = {indicator + " Aryan Gupta " + indicator} size = "large"/>

                            <div className = "links">

                                   <Link activeClass = "active"
                                          to = "about"
                                          spy = {true}
                                          smooth = {true}
                                          duration = {500}>

                                          <Text text = {"About"} size = "small"/>

                                   </Link>

                                   <Link activeClass = "active"
                                          to = "projects"
                                          spy = {true}
                                          smooth = {true}
                                          duration = {1000}>

                                          <Text text = {"Projects"} size = "small"/>

                                   </Link>

                                   <Link activeClass = "active"
                                          to = "contact"
                                          spy = {true}
                                          smooth = {true}
                                          duration = {1500}>

                                          <Text text = {"Contact"} size = "small"/>

                                   </Link>

                            </div>

                            <div className = "logo">

                                   <Text text = {<img src = {require("./assets/images/icon.png")} className = "icon" alt = ""/>} size = "large"/>
                      
                            </div>
                            
                            {/* <img src = {require("./assets/images/icon.png")} alt = "owienfl" className = "icon"/> */}

                     </div>      

                     <About/>
                     <Projects/>
                     <Contact/>

              </>

       );

}

export default App;