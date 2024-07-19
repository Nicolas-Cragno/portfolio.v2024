import React from 'react';
import '../assets/css/Cv.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Curriculum from '../assets/docs/nicolascragnocv2024.pdf';
import Img from '../assets/statics/ImgPerfil.png';
import ImgGitHub from '../assets/statics/GitHubLogo.png';
import ImgGmail from '../assets/statics/GmailLogo.png';
import ImgLinkedIn from '../assets/statics/LinkedInLogo.png';
import ImgWhatsApp from '../assets/statics/WhatsAppLogo.png';

export default function Cv() {
  return (
    <div className='cv-page'>
      <Container>
        <Row>
          <Col md={6} className='cv-page-column-left'>
            <h1 className='cv-page-title'>EXPERIENCIA LABORAL</h1>
            <hr className='section-line'/>

            <h2 className='cv-page-subtitle'>Desarrollador Front End | Freelance | 2022-Actulidad </h2>
            <h3 className='cv-page-txt'>
            Diseño & desarrollo de páginas web. 
            Maquetación e implementación respetando principios SOLID. 
            Soluciones orientadas a las necesidades puntuales del cliente.
            Investigación y comprensión del producto. <br/>

            Stack: HTML, CSS, Bootstrap, JavaScript, React, Git, Figma & Responsive Desing.
            </h3>

            <h2 className='cv-page-subtitle'>Customer Service | Probelt SRL | 2022-24 </h2>
            <h3 className='cv-page-txt'>
            Organización y mantenimiento de información en el sistema.
            Atención y asesoramiento a empresas que utilizan o desean utilizar los productos ofrecidos. 
            Búsqueda de nuevos clientes.
            </h3>

            <h2 className='cv-page-subtitle'>Logistica | Transportes GLAM | 2018-22 </h2>
            <h3 className='cv-page-txt'>
            Preparación y armado de rutas de reparto. Cobro y facturación. 
            Entrega en puerta de mercadería. 
            </h3>

            {/*  
            <h2 className='cv-page-subtitle'>Cadete repartidor | Coto CICSA | 2016-18 </h2>
            <h3 className='cv-page-txt'>
            Armado de pedidos y distribución acorde a zonas. 
            Organización de rutas de reparto. 
            Entrega a domicilio y cobro en efectivo o tarjeta.
            </h3>
            */}

          </Col>
          <Col md={6} className='cv-page-column-right'>
            <h1 className='cv-page-title'>EDUCACIÓN</h1>
            <hr className='section-line'/>

            <h3 className='cv-page-txt'>Técnico en programación y sistemas informáticos </h3>
            <h2 className='cv-page-subtitle'>Universidad Tecnológica Nacional FRGP </h2>
            <h3 className='cv-page-txt2 space2'>2024 - En curso </h3>

            <h3 className='cv-page-txt'>Bachiller en Ciencias Naturales</h3>
            <h2 className='cv-page-subtitle'>Juan Pablo Duarte y Diez (nº6 Vicente López)</h2>
            <h3 className='cv-page-txt2 space'>2008 - 2014 (c/analítico)</h3>

            <Row> {/* APARTADO DE CURSOS */}
              <Col xs={6}><hr className='section-line'/></Col>
              <Col xs={6}><h1 className='data-header-section1'>CURSOS REALIZADOS</h1></Col>
              <Col xs={12}>
                  <h3 className='cv-page-txt3'>Programación (C# Nv1) | Maxi Programa (Enero - Marzo '23)</h3>
                  <h3 className='cv-page-txt3'>.Net - POO - SQL (C# Nv2) | Maxi Programa (Marzo - Mayo '23)</h3>
                  <h3 className='cv-page-txt3'>ASP .Net - WebForms (C# Nv3) | Maxi Programa (Mayo - Julio '23)</h3>            
              
                  <h3 className='cv-page-txt3'>HTML | Codea Rock (Enero - Febrero '22)</h3>
                  <h3 className='cv-page-txt3'>CSS | Codea Rock (Febrero - Marzo '22)</h3>
                  <h3 className='cv-page-txt3'>JavaScript | Codea Rock (Marzo - Abril '22)</h3>    
                  <h3 className='cv-page-txt3'>React | Codea Rock (Abril - Mayo '22)</h3>
                  <h3 className='cv-page-txt3'>Firebase | Codea Rock (Octubre - Noviembre '22)</h3>
              </Col>
            </Row>
          </Col> 
        </Row>
      </Container>
    </div>
  )
}
