import React from 'react';
import '../assets/css/Projects.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ImgEngrupir from '../assets/statics/LogoEngrupir.png';
import ImgGF from '../assets/statics/LogoGF.png';
import ImgCragno from '../assets/statics/FondoSanFernando.png';
import ImgMantenimiento from '../assets/statics/MantenimientoLogo.png';

export default function Projects() {
  return (
    <div className='projects-page'>
      <Container>
        <Row className='projects-page-row'>
          <Col md={4} className='projects-page-col'>
            <Card style={{ width: '18rem' }} className='projects-page-card card-engrupir'>
                <Link to="https://engrupir-producciones.web.app/" target='_blank' className='projects-page-card-img-link'>
                  <Card.Img variant="top" src={ImgEngrupir} className='projects-page-card-img'/>
                </Link>
              <Card.Body>
                <Card.Title className='projects-page-card-title'>Engrupir</Card.Title>
                  <hr/>
                <Card.Text className='projects-page-card-txt'>
                  Sitio de moda & música underground.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className='projects-page-col'>
            <Card style={{ width: '18rem' }} className='projects-page-card card-gf'>
                <Link to="https://centro-gf.web.app/" target='_blank' className='projects-page-card-img-link'>
                  <Card.Img variant="top" src={ImgGF} className='projects-page-card-img'/>
                </Link>
              <Card.Body>
                <Card.Title className='projects-page-card-title'>GF Fútbol</Card.Title>
                  <hr/>
                <Card.Text className='projects-page-card-txt'>
                  Centro de entrenamiento para jugadores amateurs.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className='projects-page-col'>
            <Card style={{ width: '18rem' }} className='projects-page-card card-cragno'>
                <Link to="https://cragnoconstrucciones.web.app/" target='_blank' className='projects-page-card-img-link'>
                  <Card.Img variant="top" src={ImgCragno} className='projects-page-card-img'/>
                </Link>
              <Card.Body>
                <Card.Title className='projects-page-card-title'>Cragno Construcciones</Card.Title>
                  <hr/>
                <Card.Text className='projects-page-card-txt'>
                  Empresa familiar de construcción.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12} className='projects-page-col'>
            <h4 className='projects-page-txt'>
              Próximamente podrás ver su código en mi perfil de github. Me encuentro trabajando en ello...
            </h4>
          </Col>

          <Col md={12} className='projects-page-col'>
            <img src={ImgMantenimiento} className='txt-logo'></img>   
          </Col>


          {/*  
          <Col md={12} className='projects-page-col'>
            <h4 className='projects-page-txt'>
              Puedes ver el código de estos proyectos en mi perfil de github ↓
            </h4>
          </Col>

          <Col md={12} className='projects-page-col'>
            <Link to="https://github.com/Nicolas-Cragno/" target='_blank' className='projects-page-link'>
              <h4 className='projects-page-txt2'>
                github.com/nicolas-cragno/
              </h4>
            </Link>
          
          </Col>
          */}
        </Row>
      </Container>
    </div>
  )
}
