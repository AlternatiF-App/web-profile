import { FilmIcon } from '@heroicons/react/outline'

const MainContent = () => {
  return (
    <div className="bg-main pt-20 lg:pt-28 font-sora hide-scroll-bar">
        <div className="w-full 2xl:w-10/12 2xl:mx-auto lg:flex">
            <div className="w-full lg:w-1/2 text-white px-6 py-4 lg:py-6 lg:px-8 2xl:px-20 2xl:py-40">
                <span className="block text-sm lg:text-base 2xl:text-xl">Welcome to</span>
                <h1 className="text-[44px] lg:text-6xl 2xl:text-8xl font-bold pt-0 lg:pt-4">MI As - Shodiq</h1>
                <h2 className="text-xl lg:text-2xl 2xl:text-3xl">Kuwolu, Bululawang</h2>
                <p className="pt-6 2xl:pt-10 text-sm lg:text-base">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                </p>
                <div className="pt-8 2xl:pt-16 flex space-x-8">
                    <button className="w-1/2 lg:w-auto lg:px-14 py-2 bg-white text-primary text-base 2xl:text-xl font-medium rounded-xl">
                        Daftar
                    </button>
                    <button className="w-1/2 lg:w-auto lg:px-14 py-2 flex justify-center items-center border-white border text-white text-base 2xl:text-xl font-medium rounded-xl">
                        <FilmIcon className="h-5 w-5 mr-2" fill="none" stroke="currentColor"/>
                        Trailer
                    </button>
                </div>
            </div>
            <div className="w-full lg:w-1/2 py-14 lg:py-8 2xl:py-20 lg:px-10">
                <img className="w-full h-auto mx-auto"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Fstudy-time-poster-with-student-and-books-stack-vector-id1174407595%3Fk%3D6%26m%3D1174407595%26s%3D612x612%26w%3D0%26h%3DVmGGDoshuAYs10POCXbLPbMBvy7ZhXfAOXKJN-i2a4k%3D&f=1&nofb=1"
                    alt="vector" loading="lazy"
                />
            </div>
        </div>
    </div>
  )
}

export default MainContent
