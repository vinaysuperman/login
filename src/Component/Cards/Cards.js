// Cards Component
import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import cimg1 from '../../assets/img1.jpg';
import cimg2 from '../../assets/img2.jpg';
import cimg3 from '../../assets/img3.jpg';

const Cards = (props) => {

    return (
        <>
           <Container fluid>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={cimg1} />
                        <Card.Body>
                            <Card.Title>Ben Nevis</Card.Title>
                            <Card.Text>
                            Ben Nevis is the highest mountain in the United Kingdom and the British Isles. 
                            The summit is 1,345 metres above sea level and is the highest land in any direction for 459 miles.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Mountain in Scotland</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={cimg2} />
                        <Card.Body>
                            <Card.Title>Canadian Rockies</Card.Title>
                            <Card.Text>
                            The Canadian Rockies mountain range spans the provinces of British Columbia and Alberta. With jagged, ice-capped peaks,
                            including towering Mt. Robson, it's a region of alpine lakes, diverse wildlife and outdoor recreation sites.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Mountain in Canada</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={cimg3} />
                        <Card.Body>
                            <Card.Title>Mount Saint Elias</Card.Title>
                            <Card.Text>
                            Mount Saint Elias, the second-highest mountain in both Canada and the United States, 
                            stands on the Yukon and Alaska border about 26 miles southwest of Mount Logan, the highest mountain in Canada.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Mount in North America</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </Container>
            <hr />           
        </>
    )
}
export default Cards;
