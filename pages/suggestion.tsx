import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import { useState } from 'react'

const Suggestion = () => {
  const [dropclass, setDropClass] = useState(false)
  const [dropunit, setDropUnit] = useState(false)
  const [classroom, setClassroom] = useState('I')
  const [unit, setUnit] = useState('Kepala Sekolah')

  const btnClass = (e:string) => {
    setClassroom(e)
    setDropClass(false)
  }

  const btnUnit = (e:string) => {
    setUnit(e)
    setDropUnit(false)
  }

  return (
    <>
        <Header/>
            <div className="hide-scroll-bar font-sora">
                <div className="bg-primary text-white h-[200px] lg:h-[450px] pt-28 lg:pt-60">
                    <h1 className="text-2xl lg:text-4xl text-center font-semibold">Layanan Orang Tua</h1>
                </div>
                <div className="w-full 2xl:w-6/12 2xl:mx-auto px-6 py-10 lg:px-8 lg:py-20">
                    <ol className="list-decimal px-10 py-4 bg-green-100 text-primary">
                        <li>Silahkan isi form ini untuk memberikan saran dan masukan untuk MI As - Shodiq.</li>
                        <li>Mohon untuk menyertakan solusi untuk setiap saran yang disampaikan sebagai bahan pertimbangan untuk manajemen.</li>
                        <li>Mohon menggunakan bahasa yang baik dan sopan dalam menyampaikan saran.</li>
                    </ol>
                    <div className="space-y-6 pt-10">
                        <div>
                            <span className="block text-xl font-medium text-gray-600">Nama Siswa</span>
                            <input name='name' type="text"
                                className="mt-2 px-4 py-2 rounded-md w-full outline-none border-[1px] border-gray-400 focus:border-primary shadow-md"
                            />
                        </div>
                        <div className="relative">
                            <span className="block text-xl font-medium text-gray-600">Kelas</span>
                            <button onClick={() => setDropClass(!dropclass)}
                                className="mt-2 px-4 py-2 rounded-md text-left w-full outline-none border-[1px] border-gray-400 focus:border-primary shadow-md">
                                {classroom}
                            </button>
                            {
                                dropclass && <ul className="absolute w-full rounded-md">
                                    <li onClick={() => btnClass('I')} className="px-4 py-2 cursor-pointer bg-white text-black hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">I</li>
                                    <li onClick={() => btnClass('II')} className="px-4 py-2 cursor-pointer bg-white text-black hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">II</li>
                                    <li onClick={() => btnClass('III')} className="px-4 py-2 cursor-pointer bg-white text-black hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">III</li>
                                    <li onClick={() => btnClass('IV')} className="px-4 py-2 cursor-pointer bg-white text-black hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">IV</li>
                                    <li onClick={() => btnClass('V')} className="px-4 py-2 cursor-pointer bg-white text-black hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">V</li>
                                    <li onClick={() => btnClass('VI')} className="px-4 py-2 cursor-pointer bg-white text-black hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">VI</li>
                                </ul>
                            }
                        </div>
                        <div>
                            <span className="block text-xl font-medium text-gray-600">Nama Orang Tua</span>
                            <input name='name' type="text"
                                className="mt-2 px-4 py-2 rounded-md w-full outline-none border-[1px] border-gray-400 focus:border-primary shadow-md"
                            />
                        </div>
                        <div>
                            <span className="block text-xl font-medium text-gray-600">Telepon Aktif</span>
                            <input name='name' type="number"
                                className="mt-2 px-4 py-2 rounded-md w-full outline-none border-[1px] border-gray-400 focus:border-primary shadow-md"
                            />
                        </div>
                        <div>
                            <span className="block text-xl font-medium text-gray-600">Email Aktif</span>
                            <input name='name' type="email"
                                className="mt-2 px-4 py-2 rounded-md w-full outline-none border-[1px] border-gray-400 focus:border-primary shadow-md"
                            />
                        </div>
                        <div className="relative">
                            <span className="block text-xl font-medium text-gray-600">Unit Tujuan</span>
                            <button onClick={() => setDropUnit(!dropunit)}
                                className="mt-2 px-4 py-2 rounded-md text-left w-full outline-none border-[1px] border-gray-400 focus:border-primary shadow-md">
                                {unit}
                            </button>
                            {
                                dropunit && <ul className="absolute w-full rounded-md">
                                    <li onClick={() => btnUnit('Kepala Madrasah')} className="px-4 py-2 cursor-pointer bg-white text-black hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">Kepala Madrasah</li>
                                    <li onClick={() => btnUnit('Kurikulum')} className="px-4 py-2 cursor-pointer bg-white text-black hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">Kurikulum</li>
                                    <li onClick={() => btnUnit('Sarana dan Prasarana')} className="px-4 py-2 cursor-pointer bg-white text-black hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">Sarana dan Prasarana</li>
                                    <li onClick={() => btnUnit('Kesiswaan')} className="px-4 py-2 cursor-pointer bg-white text-black hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">Kesiswaan</li>
                                </ul>
                            }
                        </div>
                        <div>
                            <span className="block text-xl font-medium text-gray-600">Saran</span>
                            <textarea name='name' typeof='text' rows={5}
                                className="mt-2 px-4 py-2 rounded-md w-full outline-none border-[1px] border-gray-400 focus:border-primary shadow-md"
                            />
                            <span className="block text-xl text-gray-600">
                                Mohon untuk menuliskan pesan dengan lengkap dan detail. Saran yang tidak jelas tidak akan dimasukkan dalam kategori komplain
                            </span>
                        </div>
                        <div>
                            <span className="block text-xl font-medium text-gray-600">Solusi</span>
                            <textarea name='name' typeof='text' rows={5}
                                className="mt-2 px-4 py-2 rounded-md w-full outline-none border-[1px] border-gray-400 focus:border-primary shadow-md"
                            />
                        </div>
                        <div>
                            <button className="px-6 py-2 w-full lg:w-auto text-center rounded-md bg-primary text-white">
                                Kirim Saran
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
    </>
  )
}

export default Suggestion
