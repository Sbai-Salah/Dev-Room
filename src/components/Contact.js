import React, { Fragment } from 'react';
import {Container, ListGroupItem, ListGroup} from 'react-bootstrap';

class Portfolio extends React.Component {
    render () {
        let email = this.props.inputData.email_address;
        let linkedIn = this.props.inputData.linked_in_link;
        let name= this.props.inputData.full_name;
        return (
            <Fragment>
                <div id="contact">
                    <Container>
                                <h2><span>Contact Me</span></h2>
                                <ListGroup className="listGroup">
                                    <ListGroupItem className="listItem">Email: <a href={"mailto:"+email}>{email}</a></ListGroupItem>
                                    <ListGroupItem className="listItem">LinkedIn: <a href={linkedIn}>{name}</a></ListGroupItem>
                                </ListGroup>
                    </Container>
                </div>
                <div className="footer">
                    <a href={this.props.inputData.github_link} className="icon"><i className="fab fa-github"></i></a>
                    <a href={this.props.inputData.linked_in_link}className="icon"><i className="fab fa-linkedin"></i></a>
                    <a href={this.props.inputData.twitter_link} className="icon"><i className="fab fa-twitter"></i></a>
                </div>
            </Fragment>
            
        )
    }
}

export default Portfolio;