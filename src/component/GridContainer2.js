import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class GridContainer2 extends Component {
    render() {
        return (
            <div>
                <Container >
                    <Row>
                        <Col><img src="Sw.jpg" className="mission-content2"/></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default GridContainer2;