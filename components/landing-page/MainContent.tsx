
const MainContent = () => {
  return (
    <div className="bg-main pt-16 lg:pt-28 font-sora hide-scroll-bar">
        <div className="w-full 2xl:w-10/12 2xl:mx-auto lg:flex px-0 lg:px-8">
            <div className="w-full lg:w-1/2 bg-primary lg:bg-transparent text-white px-6 py-10 lg:py-6 lg:px-8 2xl:px-20 2xl:py-40">
                <span className="block text-sm lg:text-base 2xl:text-xl">Welcome to</span>
                <h1 className="text-[44px] lg:text-6xl 2xl:text-8xl font-bold pt-0 lg:pt-4">MI As - Shodiq</h1>
                <h2 className="text-xl lg:text-2xl 2xl:text-3xl">Kuwolu, Bululawang</h2>
                <p className="pt-6 2xl:pt-10 text-sm lg:text-base">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                </p>
                <div className="pt-8 2xl:pt-16">
                    <button className="w-full lg:w-auto lg:px-16 py-2 bg-white text-primary text-base 2xl:text-xl font-medium rounded-xl">
                        Daftar
                    </button>
                </div>
            </div>
            <div className="w-full lg:w-1/2 py-14 lg:py-8 2xl:py-20 lg:px-10">
                <img className="w-full h-auto mx-auto"
                    src="/assets/images/vector.png"
                    alt="vector" loading="lazy"
                />
            </div>
        </div>
    </div>
  )
}

export default MainContent
