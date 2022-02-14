import ItemNews from '../items/ItemNews'

const News = () => {
  return (
    <div className="w-full 2xl:w-8/12 2xl:mx-auto px-6 lg:px-8 py-20">
        <h1 className="text-3xl lg:text-4xl font-bold text-center pt-4">Berita Terbaru</h1>
        <p className="text-center text-sm lg:text-xl font-light">Ikuti terus informasi dan berita-berita terbaru tentang MI As - Shodiq.</p>
        <div className="lg:flex lg:space-x-8 pt-20">
            <div className="w-full lg:w-1/3 lg:px-6">
                <h1 className="text-3xl lg:text-3xl font-bold">Kategori Berita</h1>
                <ul className="pt-10 space-y-6">
                    <li className="text-2xl font-light cursor-pointer">Informasi Umum</li>
                    <li className="text-2xl font-light cursor-pointer">Prestasi</li>
                    <li className="text-2xl font-light cursor-pointer">Pengumuman Siswa</li>
                    <li className="text-2xl font-light cursor-pointer">Pengumuman Pegawai</li>
                    <li className="text-2xl font-light cursor-pointer">Pengumuman Orang Tua Siswa</li>
                    <li className="text-2xl font-light cursor-pointer">Karya Siswa</li>
                </ul>
            </div>
            <div className="w-full lg:w-2/3 pt-10 lg:pt-0 lg:px-8 justify-center grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-x-8 lg:gap-y-8">
                <ItemNews/>
                <ItemNews/>
                <ItemNews/>
                <ItemNews/>
            </div>
        </div>
    </div>
  )
}

export default News
