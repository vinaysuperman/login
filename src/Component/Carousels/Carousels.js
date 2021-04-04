//Carousels component
import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import img2 from '../../assets/image2.jpg';
import img3 from '../../assets/image3.jpg';
import img4 from '../../assets/image4.jpg';
import style from './Carousels.module.css';


const Carousels = (props) => {
    return (
        <>
            <Container className={style.mTop}>
                <Carousel>
                    <Carousel.Item className={style.hei}>
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Denali</h3>
                            <p>Denali is the highest mountain peak in North America</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className={style.hei}>
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Nanga Parbat</h3>
                            <p>Nanga Parbat, known locally as Diamer,Mountain in Asia</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className={style.hei}>
                        <img
                            className="d-block w-100"
                            src={img4}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Broad Peak</h3>
                            <p>Broad Peak is a mountain in the Karakoram on the border of Pakistan and China</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </>
    )
}
export default Carousels;
