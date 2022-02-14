import { CalendarIcon } from '@heroicons/react/solid'

const ItemNews = () => {
  return (
    <div className="w-full h-52 relative">
        <img className="w-full h-full object-cover"
            src="/assets/images/slide1.jpeg"
            alt="news" loading="lazy"
        />
        <div className="absolute inset-0 px-6 py-10 text-white bg-black bg-opacity-25">
            <h1 className="text-lg font-semibold h-16">PPDB Gelombang 1 ditutup pada 28 Februari</h1>
            <span className="flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2" fill="currentColor" stroke="none"/>
                15 Februari 2022
            </span>
        </div>
    </div>
  )
}

export default ItemNews
