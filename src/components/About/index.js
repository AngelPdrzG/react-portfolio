import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { useEffect, useState } from 'react';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const lClass = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(lClass)
  }, [])

  return (
    <>
      <div className='container about-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A','c','e','r','c','a',' ','d','e',' ','M','i']}
              idx={19}
            />
          </h1>

          <p>
            Recién Egresado, busco mejorar mis habilidades constantemente, mi pasión es la tecnología y la programación, así que continúo aprendiendo constantemente para no quedarme atrás en este mundo, soy una persona determinada y muy persistente, siempre que se presente un reto, yo estoy dispuesto a cumplirlo sin importar de la dificultad de este. Tengo amplios conocimientos en Desarrollo Web, Calculo y he participado en cursos de desarrollo, así como en talleres. Continúo mejorando día con día.
          </p>
          <p>
            Desarrollo de distintos programas computacionales en lenguaje C/C++ para resolver diferentes necesidades, tales como la validación, guardado y manejo de distintos cálculos para usos empresariales (Inventario, Salario, etc.) Así como también el desarrollo de clases y objetos para el manejo de inf ormación de f orma eficiente y organizada, lectura de archivos para extracción de información, así como la escritura en archivos para posterior uso del programa o para realización de reportes.
          </p>
          <p>
          Asimismo, tambien cuento con un amplio tiempo de trabajo como desarrollador freelance, especialmente en desarrollo fullstack realizando el front-end utilizando frameworks como React o Bootstrap, asimismo utilizando tecnologias como NodeJS y C#, Java o Python para el back-end.
          </p>
        </div>

        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <FontAwesomeIcon icon={faAngular} color='#dd0031' />
            </div>
            <div className='face2'>
              <FontAwesomeIcon icon={faHtml5} color='#f06529' />
            </div>
            <div className='face3'>
              <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
            </div>
            <div className='face4'>
              <FontAwesomeIcon icon={faReact} color='#5eD4F4' />
            </div>
            <div className='face5'>
              <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
            </div>
            <div className='face6'>
              <FontAwesomeIcon icon={faGitAlt} color='#EC4B28' />
            </div>
          </div>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  );
}

export default About;