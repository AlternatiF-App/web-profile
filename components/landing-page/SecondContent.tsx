import ItemSecondContent from '../items/ItemSecondContent'

const SecondContent = () => {
  return (
      <div className="w-full 2xl:w-10/12 2xl:mx-auto font-sora px-6 py-14 lg:px-8 lg:py-28">
          <h1 className="text-4xl lg:text-5xl text-center">Kenapa harus As - Shodiq ?</h1>
          <span className="block pt-8 font-thin text-xl lg:text-2xl text-center">
                Alasan kenapa kalian semua harus bergabung dengan MI As - Shodiq.
          </span>
          <ul className="pt-14 lg:flex space-y-20 lg:space-y-0 lg:space-x-20 lg:items-center lg:justify-center">
              <ItemSecondContent/>
              <ItemSecondContent/>
              <ItemSecondContent/>
              <ItemSecondContent/>
          </ul>
      </div>
  )
}

export default SecondContent
