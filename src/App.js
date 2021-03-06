import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        {/* Header */}
        <header className="App-header">

          {/* Header container (to center and stuff) */}
          <div className="headerContainer">
            <h1>
              <a href="/" className="mainTitle-font">
                dan merino
              </a>
            </h1>

            {/* Holds the directory at the header */}
            <div className="headerTextContainer">
              <h2>
                <a href="/" className="directory-font">
                  home
                </a>
              </h2>

              <h2>
                <a href="https://s3.amazonaws.com/danmer.info/dan-merino-resume.pdf" className="directory-font">
                  resume
                </a>
              </h2>

              <h2>
                <a href={"mailto:danmerino98@gmail.com"} className="directory-font">
                  email    
                </a>
              </h2>
            </div>
          </div>          
        </header>
        
        {/* Content */}
        <div className="App-content">

          <h1>yeah, like the football player</h1>

          <p>I'm currently a senior at the University of Central Florida (go knights!) studying IT with a minor in Secure Computing and Networks. </p>
          <p>  
            My particular interests include: programming, distributed systems, automation, operating systems, sysadmin, and cloud.
            I also really enjoy writing interesting things in Go and anything Linux.
          </p>
          <p>Outside of SRE-y and DevOps-y things, my hobbies include competitive Super Smash Bros., music, and basketball.</p>

          <span>socials: </span>

          <a className="linkStyle" href="https://www.linkedin.com/in/slaminad/">linkedin</a> - 
          <a className="linkStyle" href="https://github.com/slaminad"> github</a> - 
          <a className="linkStyle" href="https://twitter.com/slaminad"> twitter</a> - 
          <a className="linkStyle" href="https://open.spotify.com/user/1225094990?si=dUsS2C8US6yv8jI9cTJCRQ"> spotify</a>
        
          <h2 className="techHeaders">Languages</h2>
          <span>Go, Python, C, Java</span>

          <h2 className="techHeaders">Technologies</h2>
          <span>AWS, Linux, React, Vagrant</span>

          <h2 className="techHeaders">Tools</h2>
          <span>Docker, Git, CloudFormation</span>

        </div>

        {/* Footer */}
        <div className="App-footer">
          <p className="footerText">
            © {new Date().getFullYear()} Dan Merino <br />
            made with react and tears
            <span role="img" aria-label="tears"> 💦 </span>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
