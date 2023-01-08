import React, { Fragment } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Sound from 'react-sound';
import music_M1HomePage from './music_M1HomePage.mp3';
class About extends React.Component {
   render () {
      return (
         <Fragment>
            <div id="about">
               <Container className="about-container">
                  <Row className="about-row">
                     <Col className="about-cols image-col" xs={12} md={3}>
                        <img className="me" src={this.props.inputData.profile_pic_url} alt={"A picture of me, "+this.props.inputData.full_name}/>
                     </Col>
                     <Col className="about-cols" xs={12} md={9}>
                     <Sound 
                   url={music_M1HomePage} 
                   playStatus={Sound.status.PLAYING}
                />
                           <Container>
                              <h3>About Me</h3>
                              <p>{this.props.inputData.about_me_paragraph} If you wish to get in touch please don't hesitate to <a href="#contact" className="smoothscroll">contact me.</a></p>
                           </Container>
                        </Col>
                  </Row>
               </Container>
            </div>
         </Fragment>
      )
   }
}

export default About;