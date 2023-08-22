import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['A', 'n', 'g', 'e', 'l']
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    const lClass = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(lClass)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>o</span>
            <span className={`${letterClass} _13`}>l</span>
            <span className={`${letterClass} _14`}>a,</span>
            <br />
            <span className={`${letterClass} _15`}>S</span>
            <span className={`${letterClass} _16`}>o</span>
            <span className={`${letterClass} _17`}>y</span>
            <span> </span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={18}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={23}
            />
          </h1>
          <h2>Frontend Developer / Javascript Expert / Freelancer</h2>
          <Link to="/contact" className="flat-button">
            CONTACTAME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
