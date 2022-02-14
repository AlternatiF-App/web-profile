import Header from '../components/header/Header'
import Extracurricular from '../components/landing-page/Extracurricular'
import Greeting from '../components/landing-page/Greeting'
import MainContent from '../components/landing-page/MainContent'
import SecondContent from '../components/landing-page/SecondContent'
import Students from '../components/landing-page/Students'
import Trailer from '../components/landing-page/Trailer'

const Home = () => {
  return (
    <>
      <Header/>
      <MainContent/>
      <SecondContent/>
      <Greeting/>
      <Trailer/>
      <Students/>
      <Extracurricular/>
    </>
  )
}

export default Home
