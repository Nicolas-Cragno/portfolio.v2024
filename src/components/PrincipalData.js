import React from 'react';
import Img from '../assets/statics/ImgPerfil.png';
import '../assets/css/Data.css';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ImgGitHub from '../assets/statics/GitHubLogo.png';
import ImgGmail from '../assets/statics/GmailLogo.png';
import ImgLinkedIn from '../assets/statics/LinkedInLogo.png';
import ImgWhatsApp from '../assets/statics/WhatsAppLogo.png';

export default function PrincipalData() {
  return (
      <div className='data-header'>
        <Container>
            <Row>
                <Col xs={8} className='data-header-left'>
                    <h1 className='data-header-title'>Nicolás Cragno</h1>
                    <h2 className='data-header-txt'>Desarrollador | 28 años</h2>
                    <h2 className='data-header-txt'>San Fernando, Buenos Aires, Argentina</h2>
                    <h4 className='data-header-txt-alert'>Disponible full-time</h4>
                </Col>
                <Col xs={4} className='data-header-right'>
                    <img src={Img} className='data-header-img'></img>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className='data-body'>
                <p className='data-header-txt'>
                Me interesa mucho el proceso que lleva a transformar una idea a un proyecto tangible, 
                participando activamente en su estructura, diseño y todo lo que el mismo requiera.
                Estoy comprometido con el aprendizaje continuo y siempre busco desafíos nuevos que me 
                lleven a crecer profesionalmente.
                <br/>
                ¡Espero que disfrutes explorando mi trabajo!
                </p>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className='data-footer'>
                    <ul>
                        <Link to="https://github.com/nicolas-cragno" target='_blank'>
                            <li className='data-footer-item'><img src={ImgGitHub} className='data-footer-item-img'></img>Git Hub</li>
                        </Link>
                        <Link to ="https://www.linkedin.com/in/nicolascragno/" target='_blank'>
                            <li className='data-footer-item'><img src={ImgLinkedIn} className='data-footer-item-img'></img>LinkedIn</li>
                        </Link>
                        <Link to="mailto:nicolaslautaro.cragno@gmail.com" target='_blank'>
                            <li className='data-footer-item'><img src={ImgGmail} className='data-footer-item-img'></img>Gmail</li>
                        </Link>
                        <Link to="https://wa.me/+5491135978416" target='_blank'>
                            <li className='data-footer-item'><img src={ImgWhatsApp} className='data-footer-item-img'></img>WhatsApp</li>
                        </Link>
                    </ul>
                </Col>
            </Row>
        </Container>
      </div>
  )
}
