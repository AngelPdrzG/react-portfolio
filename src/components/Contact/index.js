import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    const lClass = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(lClass)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'FreelancerDev_AngPdrGz',
        'contact_form',
        refForm.current,
        'R3ZxgeJPhUSA4RYD3'
      )
      .then(
        () => {
          alert('Mensaje correctamente enviado!')
          window.location.reload(false)
        },
        () => {
          alert(
            'Ocurrio un error al enviar su mensaje, por favor intente otra vez'
          )
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', 'a', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Estoy interesado de oir propuestas de Freelance, Soy especialmente
            ambicioso con los proyectos y cumplo con todas las tareas y
            necesidades, no dudes en enviar un mensaje!
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Tú Nombre"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="correo"
                    placeholder="Tú Correo Electronico"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Asunto"
                    type="text"
                    name="asunto"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Deja tu mensaje"
                    name="mensaje"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Angel Pedroza,
          <br />
          México,
          <br />
          Avenida Lazaró Cardenas, 62577 <br />
          Jiutepec, Morelos <br />
          <br />
          <span>pedrozaangel9812@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[18.924263, -99.178116]} zoom={10}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[18.924263, -99.178116]}>
              <Popup>Yo me encuentro aqui, Ven a por una taza de cafe!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
