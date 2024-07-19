import React from 'react';
import '../assets/css/Header.css';
import { Link } from 'react-router-dom';
import Curriculum from '../assets/docs/nicolascragnocv2024.pdf';
import { Container, Row, Col } from 'react-bootstrap';
import ImgPdf from '../assets/statics/PdfLogo.png';


export default function Header() {
  return (
    <div>  
      <header className="app-header">
        <Container>
          <Row>
            <Col md={12} className='app-header-ul'>
              <ul >
                <Link to="/">
                  <li className='app-header-item home-item '>Sobre mi</li>
                </Link>
                <Link to="/curriculum">
                    <li className='app-header-item cv-item'>Experiencia & educación</li>
                </Link>
                <Link to ="/proyectos">
                    <li className='app-header-item projects-item'>Proyectos</li>
                </Link>
                <Link to="/elflion">
                    <li className='app-header-item game-item'>Jugar</li>
                </Link>
                {/* Al descargar el pdf sale en blanco 
                <Link to={Curriculum} target='_blank' download="CV Nicolás Cragno (2024)">
                    <li className='app-header-item download-item'>
                      CV
                      <img src={ImgPdf} className='logo-item'></img>
                      ↓
                      </li>
                </Link>
                */}
              </ul>  
            </Col>
          </Row>
        </Container>
      

      </header>
    </div>
  )
}
