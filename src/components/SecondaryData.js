import React from 'react';
import '../assets/css/Data.css';
import { Container, Col, Row } from 'react-bootstrap';

export default function SecondaryData() {
  return (
    <div className='data-header'>
        <Container>
            <Row>
                <Col xs={8}><hr className='section-line'/></Col>
                <Col xs={4}><h1 className='data-header-section1'>Habilidades</h1></Col>
                <Col xs={12}>
                    <h3 className='data-header-subtitle1'>CREATIVIDAD</h3>
                    <h3 className='data-header-txt'>
                        Soy bueno buscando soluciones originales a problemas de distintas complejidades.
                    </h3>
                </Col>

                <Col xs={12}>
                    <h3 className='data-header-subtitle1'>TRABAJO EN EQUIPO</h3>
                    <h3 className='data-header-txt'>
                        Me gusta intercambiar ideas y puntos de vista con otras personas, sin importar su área.
                    </h3>
                </Col>

                <Col xs={12}>
                    <h3 className='data-header-subtitle1'>PENSAMIENTO CRÍTICO</h3>
                    <h3 className='data-header-txt space'>
                        Soy capaz de analizar la información y su contexto para llegar al mejor resultado posible.
                    </h3>
                </Col>

                <Col xs={7}><h1 className='data-header-section2'>Stack de tecnologías</h1></Col>
                <Col xs={5}><hr className='section-line'/></Col>
                <Col xs={12}>
                    <h3 className='data-header-txt3'>
                    HTML, CSS, JavaScript, React & Firebase. ← Principales <br/>
                    Unity, C++, C#, .NET & SQL. ← Otros<br/>
                    Canva & Figma. ← Diseño
                    </h3>
                </Col>
            </Row>

        </Container>
      
    </div>
  )
}
