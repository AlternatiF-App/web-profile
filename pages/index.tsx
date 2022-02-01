import Header from '../components/header/Header'
import Greeting from '../components/landing-page/Greeting'
import MainContent from '../components/landing-page/MainContent'
import SecondContent from '../components/landing-page/SecondContent'
import Trailer from '../components/landing-page/Trailer'

const Home = () => {
  return (
    <>
      <Header/>
      <MainContent/>
      <SecondContent/>
      <Greeting/>
      <Trailer/>
    </>
  )
}

export default Home
