import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

const QuestionBox = () => {
  return (
    <>
        <Header/>
            <div className="hide-scroll-bar font-sora">
                <div className="bg-primary text-white h-[200px] lg:h-[450px] pt-28 lg:pt-60">
                    <h1 className="text-2xl lg:text-4xl text-center font-semibold">Kotak Pertanyaan</h1>
                </div>
                <div className="w-full 2xl:w-6/12 2xl:mx-auto px-6 py-10 lg:px-8 lg:py-20">
                    <div className="space-y-6">
                        <div>
                            <span className="block text-xl font-medium text-gray-600">Nama Lengkap</span>
                            <input name='name' type="text"
                                className="mt-2 px-4 py-2 rounded-md w-full outline-none border-[1px] border-gray-400 focus:border-primary shadow-md"
                            />
                        </div>
                        <div>
                            <span className="block text-xl font-medium text-gray-600">Nomor Telepon</span>
                            <input name='name' type="number"
                                className="mt-2 px-4 py-2 rounded-md w-full outline-none border-[1px] border-gray-400 focus:border-primary shadow-md"
                            />
                        </div>
                        <div>
                            <span className="block text-xl font-medium text-gray-600">Alamat Email</span>
                            <input name='name' type="email"
                                className="mt-2 px-4 py-2 rounded-md w-full outline-none border-[1px] border-gray-400 focus:border-primary shadow-md"
                            />
                        </div>
                        <div>
                            <span className="block text-xl font-medium text-gray-600">Subyek</span>
                            <input name='name' type="text"
                                className="mt-2 px-4 py-2 rounded-md w-full outline-none border-[1px] border-gray-400 focus:border-primary shadow-md"
                            />
                        </div>
                        <div>
                            <span className="block text-xl font-medium text-gray-600">Pertanyaan</span>
                            <textarea name='name' typeof='text' rows={5}
                                className="mt-2 px-4 py-2 rounded-md w-full outline-none border-[1px] border-gray-400 focus:border-primary shadow-md"
                            />
                        </div>
                        <div>
                            <button className="px-6 py-2 w-full text-center rounded-md bg-primary text-white">
                                Kirim Pertanyaan
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
    </>
  )
}

export default QuestionBox
