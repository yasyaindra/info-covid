import React from 'react'
import Particles from 'react-particles-js';


const style = {
    fontFamily:"'Source Code Pro', monospace", 
    fontSize:"5ch",
    textAlign: 'center', 
    marginTop: 50,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  }

const styledText = {
  textAlign:'center'
}

const particle = {
    position:'absolute'
}

function Welcome(){
    return(
        <div>
            <Particles style={particle}
        params={{ 
          particles: { 
            "number": {
                "value": 43,
                "density": {
                  "enable": true,
                  "value_area": 1025.940511234049
                }
              },
              "color": {
                "value": "#ffffff"
              },
              "shape": {
                "type": "edge",
                "stroke": {
                  "width": 0,
                  "color": "#000000"
                },
                "polygon": {
                  "nb_sides": 4
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 6,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }, 
          }, 
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          }
        }} 
      /> 
      <div style={styledText}>
       <h1 style={{fontSize:'48px', textShadow:'2px 2px #FF0000'}}>Selamat Datang Di Info Covid</h1>
      </div>
        </div>
    )
}

export default Welcome