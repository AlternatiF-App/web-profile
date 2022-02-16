import ItemSecondContent from '../items/ItemSecondContent'

const SecondContent = () => {
  return (
      <div className="w-full 2xl:w-10/12 2xl:mx-auto font-sora px-6 py-10 lg:px-8 lg:py-28">
          <h1 className="text-4xl lg:text-5xl font-medium text-center">Kenapa harus As - Shodiq ?</h1>
          <span className="block pt-8 font-thin text-xl lg:text-2xl text-center">
                Alasan kenapa kalian semua harus bergabung dengan MI As - Shodiq.
          </span>
          <ul className="pt-16 lg:flex space-y-20 lg:space-y-0 lg:space-x-20 lg:items-center lg:justify-center">
            <ItemSecondContent
                icon={1}
                title={'Fasilitas Memadai'}
                subtitle={'Fasilitas di Madrasah memenuhi standard.'}
            />
            <ItemSecondContent
                icon={2}
                title={'Pengajar Kompeten'}
                subtitle={'Guru yang up-to-date dengan metode pembelajaran.'}
            />
            <ItemSecondContent
                icon={3}
                title={'Lingkungan Nyaman'}
                subtitle={'Berada di lingkungan yang asri, aman, dan kondusif.'}
            />
            <ItemSecondContent
                icon={4}
                title={'Lokasi Strategis'}
                subtitle={'Lokasi yang strategis untuk anak - anak.'}
            />
          </ul>
      </div>
  )
}

export default SecondContent
