import React, { Fragment } from 'react';
import { Container, Card, Row, Col} from 'react-bootstrap';

class Portfolio extends React.Component {
    portfolioGrid() {
        let portfolio = this.props.inputData.portfolio
        
        const rows = [...Array( Math.ceil(portfolio.length / 2) )];
        const productRows = rows.map( (row, idx) => portfolio.slice(idx * 2, idx * 2 + 2) );
        const content = productRows.map((row, idx) => (
            <Row className="row">   
                { row.map(item => (
                    <Col className="col" md={6} xs={12}>
                        <Card className="card">
                            {this.printImage(item)}
                            <Card.Body>
                                <Card.Title className="card-text">{item.title}</Card.Title>
                                    <Card.Body>
                                        {item.body.map(paragraph => (
                                            <p>{paragraph}</p>
                                        ))}
                                    </Card.Body>
                                    {this.printGithubLink(item)}
                                    {this.printWebsiteLink(item)}
                            </Card.Body>
                        </Card>
                    </Col>
                ))} </Row> )
        );
        return (
            <div>
                {content}
            </div>
        );
        
    }

    printGithubLink(item) {
        if (item.githuburl != null && item.githuburl !== "") {
            return <a href={item.githuburl}><i class="fab fa-github"></i></a>
        }
    }
    printWebsiteLink(item) {
        if (item.websiteurl != null && item.websiteurl !== "") {
            return <a href={item.websiteurl}><i class="fas fa-link"></i></a>
        }
    }
    printImage(item) {
        let content = []
        item.imgurl.forEach(url => {
            content.push(<Card.Img src={url} className="cardimg" />);
        })
        return content;
    }
    

    render () {
        return (
            <Fragment>
                <div id="work">
                    <h2>Portfolio</h2>
                    <Container>
                        {this.portfolioGrid()}
                    </Container>
                </div>
            </Fragment>
        )
    }
}

export default Portfolio;