import React, { Fragment} from 'react';
import {NavigationBar} from './NavigationBar';
import Sound from 'react-sound';
import music_M1HomePage from './music_M1HomePage.mp3';


class Home extends React.Component {
   render () {
      return (
        <Fragment>
            <div id="home">
         
                <NavigationBar />
                <Sound 
                   url={music_M1HomePage} 
                   playStatus={Sound.status.PLAYING}
                />
                <h1>{this.props.inputData.full_name}</h1>
                <h2 className="font-weight-light mb-0">{this.props.inputData.sub_title}</h2>

                <div className="icons">
                    <a href={this.props.inputData.github_link} className="icon"><i className="fab fa-github"></i></a>
                    <a href={this.props.inputData.linked_in_link}className="icon"><i className="fab fa-linkedin"></i></a>
                    <a href={this.props.inputData.ig_link} className="icon"><i className="fab fa-instagram"></i></a>
                </div>
                
                <p className="scrolldown">
                    <a className="smoothscroll icon" href="#about"><i className="fas fa-chevron-circle-down"></i></a>
                </p>
            </div>
        </Fragment>
      )
   }
}

export default Home;
