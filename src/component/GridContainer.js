import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class GridContainer extends Component {
    render() {
        return (
            <div>
                <Container className="Grid-Container">
                    <Row>
                        <Col>
                            <div>
                                <iframe width="480" height="360" src="https://www.youtube.com/embed/P-LbqizLS4k"
                                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                                      gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </Col>
                        <Col>
                            <h2>Who We Are ?</h2>
                            <p>मिशन आरोग्यम एक ऐसा मिशन है जिसकी शुरुआत बीके आरोग्यम<br />
                            प्राइवेट लिमिटेड ने की है। इस मिशन का लक्ष्य है लोगों को स्वास्थ और सम्पन्न बनाना।<br />
                            मिशनआरोग्यम 'हेल्थ इज वेल्थ' कहावत को वास्तविकता में बदलने का एक जरिया है।<br />
                            आज के समय में जहां स्वस्थ शरीर पाने की कोशिश में लोग अपना वेल्थ खो देते हैं,<br />
                            वहीं हम लेकर आये हैं एक ऐसा मिशन जो हेल्थ के साथ-साथ आपको वेल्थ भी देगा।<br />

                            मिशन आरोग्यम से रोज ढेर सारे डॉक्टर्स और एडवाइजर्स जुड़ रहे हैं और लोगों के स्वास्थ्य<br />
                            और सपनों के लिए काम कर रहे हैं।<br />
                            मिशन आरोग्यम एडवाइजर प्रोग्राम डायरेक्ट सेलिंग और नेटवर्क मार्केटिंग का एकमात्र<br />
                            ऐसा प्लेटफार्म है जो महत्वकांक्षी लोगों को<br />
                            सफल और संपन्न के साथ-साथ स्वस्थ भी बनाता है।<br />
                            मिशन आरोग्यम एडवाइजर प्रोग्राम आपको एक ऐसे मुकाम ओर लेकर जाएगा जहां<br /> से आप और आपका
  परिवार अपने सपनों की जिंदगी को जी सकता है।</p>
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col>1 of 3</Col>
                        <Col>2 of 3</Col>
                        <Col>3 of 3</Col>
                    </Row> */}
                </Container>
            </div>
        );
    }
}

export default GridContainer;