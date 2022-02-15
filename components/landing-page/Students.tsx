import ItemStudents from '../items/ItemStudents'

const Students = () => {
  return (
      <div className="bg-primary font-sora my-6">
          <div className="w-full 2xl:w-10/12 2xl:mx-auto py-10 px-4 lg:py-20 lg:px-10">
                <h1 className="text-4xl lg:text-5xl text-white text-center">Siswa Kami Lebih dari 200++</h1>
                <div className="w-full lg:w-1/2 mx-auto pt-8">
                    <p className="text-center text-xl text-white">
                        Mayoritas siswa kami tidak hanya dari Malang, namun juga dari berbagai daerah.
                        Semuanya berkesempatan bergabung dengan kami.
                    </p>
                </div>
                <div className="pt-20 pb-10 flex flex-wrap lg:flex-auto justify-center space-x-4 lg:space-x-20">
                    <ItemStudents total={212} title={'total'} />
                    <ItemStudents total={212} title={'total'} padding={'mt-20'} />
                    <ItemStudents total={212} title={'total'} />
                    <ItemStudents total={212} title={'total'} padding={'mt-20'} />
                </div>
          </div>
      </div>
  )
}

export default Students
