import ItemArt from '../items/ItemArt'

const Academic = () => {
  return (
    <div className="w-full 2xl:w-10/12 2xl:ml-auto lg:flex font-sora px-6 lg:px-8 lg:py-20">
        <div className="w-full lg:w-1/2 2xl:px-10">
            <h1 className="text-4xl lg:text-6xl 2xl:text-7xl font-medium pt-2">Akademik</h1>
            <p className="font-light pt-4 w-full 2xl:w-[82%] text-justify lg:text-left text-base lg:text-lg 2xl:text-xl">
                Pada cabang Akademik insya Allah kami memulai untuk membuka kelas Olimpiade untuk disiapkan dalam perlombaan yang akan datang.
            </p>
            <div className="pt-8 space-y-0.5">
                <ItemArt title={'Kelas Olimpiade'} show={true}
                    paragraph={'Dalam kelas ini siswa akan diajarkan berpidato. Ada 3 bahasa dalam pidato yaitu bahasa indonesia, arab dan inggris.'}
                />
            </div>
        </div>
        <div className="w-full lg:w-1/2 py-10 lg:px-10 lg:py-0">
            <img className="lg:ml-auto w-full lg:w-2/3 h-auto"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.clipartof.com%2Fsmall%2F1234969-Clipart-Of-A-Caucasian-Female-Teacher-And-Mother-Talking-At-A-Conference-Royalty-Free-Vector-Illustration.jpg&f=1&nofb=1"
                alt="principal" loading="lazy"
            />
        </div>
    </div>
  )
}

export default Academic
