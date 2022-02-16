import ItemExtracurricular from '../items/ItemExtracurricular'

const Extra = () => {
  return (
      <div className="w-full 2xl:w-8/12 2xl:mx-auto lg:flex font-sora px-6 py-20 2xl:px-10">
          <div className="w-full lg:w-1/2">
                <h1 className="font-medium text-3xl lg:text-4xl">Program Ekstrakurikuler</h1>
                <p className="font-light w-full lg:w-2/3 pt-8">
                    MI As - Shodiq memiliki dua program keahlian yang bisa kalian pilih. Kedua program keahlian ini saling berkaitan satu sama lain. Sehingga dengan dukungan guru-guru kami yang keren nantinya kalian bisa mempelajari keduanya.
                </p>
                <div className="pt-10">
                    <button className="px-8 py-2 w-full lg:w-auto flex justify-center bg-primary text-white border border-transparent hover:bg-white hover:text-primary hover:border hover:border-primary rounded-2xl transition-all duration-300 ease-in-out">
                        Detail
                    </button>
                </div>
          </div>
          <div className="w-full lg:w-1/2 lg:flex pt-10 lg:pt-0">
                <div className="w-full space-y-8">
                    <ItemExtracurricular title={'Kesenian'} subtitle={'5 Cabang'}/>
                    <ItemExtracurricular title={'Olahraga'} subtitle={'1 Cabang'}/>
                    <ItemExtracurricular title={'Akademik'} subtitle={'1 Cabang'}/>
                </div>
          </div>
      </div>
  )
}

export default Extra
