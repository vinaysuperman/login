//Company details component
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Company = (props) => {
    return (
        <>

            <Container style={{ textAlign: "center" }}>
                <Row className="justify-content-md-center">
                    <Col md={4}>
                        <div>
                            <img src="https://img.icons8.com/color/48/000000/pied-piper-2.png" alt="img" />
                        </div>
                        <div>
                            <h4>Personal growth</h4>
                            <p>Through challenging yourself, both physically and mentally, you grow.
                            Through pushing yourself outside of your comfort zone and getting out there,
                                you flourish. Through completing something you started and seeing it through to the end, you make progress. </p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div>
                            <img src="https://img.icons8.com/color/48/000000/big-eats-small.png" alt="img" />
                        </div>
                        <div>
                            <h4>Disconnect to reconnect</h4>
                            <p>Spending time out in the mountains really takes things back to basics. There is no wifi, no cell service,
                                no social media – money doesn’t matter out in the woods or up on a mountain top. It’s just you and mother nature.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div>
                            <img src="https://img.icons8.com/color/48/000000/podio.png" alt="img" />
                        </div>
                        <div>
                            <h4>Good for the soul</h4>
                            <p>With the lovely, lush green forests and foothills, the tantalizing teal lakes hidden away like a secret prize waiting to be found,
                            and those stunning sky-high jagged peaks, it was love at first sight.
                                 But more than that, hiking in the mountains became an immediate passion because of the way it made me feel.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div>
                            <img src="https://img.icons8.com/color/48/000000/opportunity.png" alt="img" />
                        </div>
                        <div>
                            <h4>Healing powers</h4>
                            <p>
                                It’s as if there is an energy source in those summits that you can tap into and feed off of.
                                Getting out there literally fuels you and rebalances you; you will notably feel more calm and happy, and less irritable or anxious.
                                There was never a time that I left the mountains without feeling refreshed, happy and inspired – ready to take on anything that came my way.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
export default Company;
