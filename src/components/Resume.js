import React, { Fragment } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import SkillBars from './SkillBar';

class Resume extends React.Component {
    address(item) {
        if (item.address != null && item.address !== "") {
            return <h6>{item.address} <span>&bull;</span> {item.start_date} - {item.end_date}</h6>
        }
    }

    line(idx, len) {
        if (idx < len-1) {
            return <hr />
        }
    }

    render () {
        let education = this.props.inputData.education;
        let work = this.props.inputData.work;
        let interests = this.props.inputData.interests;
        return (
            <Fragment>
                <Container className="resume-container">
                    <Row className="resume-row">
                        <Col className="resume-heading-col" md={3}>
                            <h3><span>Education</span></h3>
                        </Col>
                        <Col ClassName="resume-field"md={9}>
                            {education.map((item, i) => (
                                <Fragment>
                                    <h5>{item.type}</h5>
                                    <h6>{item.school} <span>&bull;</span> {item.start_date} - {item.end_date}</h6>
                                    <p>{item.description}</p>
                                    {this.line(i, education.length)}
                                </Fragment>
                            ))}
                        </Col>
                    </Row>
                    <hr/>
                    <Row className="resume-row">
                        <Col className="resume-heading-col" md={3}>
                            <h3><span>Work Experience</span></h3>
                        </Col>
                            <Col md={9}>
                                {work.map((item, i) => (
                                    <Fragment>
                                        <h5>{item.workplace}</h5>
                                        {this.address(item)}
                                        <p>{item.description}</p>
                                        {this.line(i, work.length)}
                                    </Fragment>
                                ))}
                        </Col>
                    </Row>
                    <hr/>
                    <Row className="resume-row">
                        <Col className="resume-heading-col" md={3}>
                            <h3><span>Skills</span></h3>
                        </Col>
                        <Col md={9}>
                            <p>{this.props.inputData.skills_paragraph}</p>
                            <SkillBars hue="52" saturation="100" skills={this.props.inputData.skills}/>
                        </Col>
                    </Row>
                    <hr/>
                    <Row className="resume-row">
                        <Col className="resume-heading-col" md={3}>
                            <h3><span>Other Interests</span></h3>
                        </Col>
                        <Col md={9}>
                            <p className="interests">I'm not a complete geek I swear! Some of my other interests include,</p>
                            <ListGroup className="fun-facts">
                                {interests.map(item => (
                                    <ListGroupItem className="fact">{item}</ListGroupItem>
                                ))}
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Resume;