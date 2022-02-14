import ItemArt from '../items/ItemArt'

const Sport = () => {
  return (
    <div className="w-full 2xl:w-10/12 2xl:mr-auto lg:flex font-sora px-6 py-10 lg:px-8 lg:py-20">
        <div className="w-full lg:w-1/2 py-10 lg:px-10 lg:py-0">
          <img className="w-full lg:w-2/3 h-auto lg:mr-auto"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F005%2F251%2F959%2Fnon_2x%2Fpeople-video-conference-vector.jpg&f=1&nofb=1"
            alt="video" loading="lazy"
          />
        </div>
        <div className="w-full lg:w-1/2 2xl:px-10">
            <h1 className="text-4xl lg:text-6xl 2xl:text-7xl font-medium pt-2">Olahraga</h1>
            <p className="font-light pt-4 w-full 2xl:w-[82%] text-justify lg:text-left text-base lg:text-lg 2xl:text-xl">
                Pada cabang olahraga masih fokus untuk cabang catur.
            </p>
            <div className="pt-8 space-y-0.5">
                <ItemArt title={'Catur'} show={true}
                    paragraph={'Dalam kelas ini siswa akan diajarkan berpidato. Ada 3 bahasa dalam pidato yaitu bahasa indonesia, arab dan inggris.'}
                />
            </div>
        </div>
    </div>
  )
}

export default Sport
