import Header from '../components/header/Header'
import Greeting from '../components/landing-page/Greeting'
import MainContent from '../components/landing-page/MainContent'
import SecondContent from '../components/landing-page/SecondContent'

const Home = () => {
  return (
    <>
      <Header/>
      <MainContent/>
      <SecondContent/>
      <Greeting/>
    </>
  )
}

export default Home
