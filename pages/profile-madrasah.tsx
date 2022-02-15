import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

const ProfileMadrasah = () => {
  return (
    <>
        <Header/>
            <div className="hide-scroll-bar font-sora">
                <div className="bg-primary text-white h-[200px] lg:h-[450px] pt-24 lg:pt-60">
                    <h1 className="text-4xl text-center font-semibold">Profil Madrasah</h1>
                </div>
                <div className="w-full 2xl:w-8/12 2xl:mx-auto px-6 py-10 lg:px-8 lg:py-20">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl lg:text-4xl font-semibold">Profil Madrasah</h1>
                        <div className="flex items-center space-x-3">
                            <a className="hidden lg:block text-xl font-light">Bagikan</a>
                            <img className="w-10 h-auto cursor-pointer -mr-1" alt="facebook" src="/assets/icons/facebook.png"/>
                            <img className="w-10 h-auto cursor-pointer" alt="facebook" src="/assets/icons/ig.png"/>
                            <img className="w-10 h-auto cursor-pointer" alt="facebook" src='/assets/icons/twitter.png'/>
                        </div>
                    </div>
                    <div className="pt-10">
                        <p className="text-base lg:text-lg text-justify lg:text-left">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
            </div>
        <Footer/>
    </>
  )
}

export default ProfileMadrasah
