import Header from '../components/header/Header'
import Extra from '../components/landing-page/Extra'
import Greeting from '../components/landing-page/Greeting'
import Art from '../components/landing-page/Art'
import MainContent from '../components/landing-page/MainContent'
import SecondContent from '../components/landing-page/SecondContent'
import Students from '../components/landing-page/Students'
import Trailer from '../components/landing-page/Trailer'
import Sport from '../components/landing-page/Sport'
import Academic from '../components/landing-page/Academic'
import Gallery from '../components/landing-page/Gallery'
import News from '../components/landing-page/News'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <>
      <Header/>
      <MainContent/>
      <SecondContent/>
      <Greeting/>
      <Trailer/>
      <Students/>
      <Extra/>
      <Art/>
      <Sport/>
      <Academic/>
      <Gallery/>
      <News/>
      <Footer/>
    </>
  )
}

export default Home
