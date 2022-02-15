import { FilmIcon } from '@heroicons/react/solid'

const Trailer = () => {
  return (
    <div className="w-full 2xl:w-10/12 2xl:mr-auto lg:flex font-sora px-6 py-10 lg:px-8 lg:py-20">
        <div className="w-full lg:w-1/2 py-10 lg:px-10 lg:py-0">
          <img className="w-full lg:w-2/3 h-auto lg:mr-auto"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F005%2F251%2F959%2Fnon_2x%2Fpeople-video-conference-vector.jpg&f=1&nofb=1"
            alt="video" loading="lazy"
          />
        </div>
        <div className="w-full lg:w-1/2 2xl:px-10">
          <span className="block text-base lg:text-lg 2xl:text-xl">Yuk, nonton!</span>
          <h1 className="text-4xl lg:text-6xl 2xl:text-7xl font-medium pt-2">Video Profil MI As - Shodiq</h1>
          <p className="font-light pt-4 w-full 2xl:w-[82%] text-justify lg:text-left text-base lg:text-lg 2xl:text-xl">
            Video profil sekolah memperkenalkan kepada kalian hal-hal berkaitan dengan lingkungan sekolah, fasilitas umum sekolah, fasilitas pembelajaran, ruang belajar, kegiatan siswa dan masih banyak lagi.
          </p>
          <p className="font-light pt-4 w-full 2xl:w-[82%] text-justify lg:text-left text-base lg:text-lg 2xl:text-xl">
            Biar kalian tidak penasaran apa saja yang ada di dalam SMK Telkom Malang, segera tonton video profilnya.
          </p>
          <div className="pt-8">
            <button className="px-14 py-2 w-full lg:w-auto flex items-center justify-center text-base lg:text-lg 2xl:text-xl rounded-xl text-white bg-primary">
              <FilmIcon className="h-5 w-5 mr-2" fill="none" stroke="currentColor"/>
              Play
            </button>
          </div>
        </div>
    </div>
  )
}

export default Trailer
