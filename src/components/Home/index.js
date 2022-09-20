import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const jobArray = [
    'U',
    'T',
    'K',
    'A',
    'R',
    'S',
    'H',
    '',
    'T',
    'R',
    'I',
    'P',
    'A',
    'T',
    'H',
    'I'
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>HI,</span>
            <span className={`${letterClass} _12`}> </span>
            <br />
            <span className={`${letterClass} _13`}>I </span>
            <span className={`${letterClass} _13`}> </span>
            <span className={`${letterClass} _14`}> 'AM</span>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Developer / Gamer 😜 / Gym Enthusiast 💪</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
