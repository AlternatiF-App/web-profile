import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/outline'

function SampleNextArrow (props:any) {
  const { onClick } = props
  return (
    <div className="absolute right-8 lg:right-10 h-auto z-40 inset-y-2/4 -mt-4 opacity-70 hover:opacity-100 transition-opacity duration-500 shadow-md">
      <button onClick={onClick} className="float-right cursor-pointer">
        <ChevronRightIcon className="w-10 h-10 px-1 bg-white rounded-full -mr-4 shadow-md"/>
      </button>
    </div>
  )
}
function SamplePrevArrow (props:any) {
  const { onClick } = props
  return (
    <div className="absolute left-8 lg:left-10 h-auto z-40 inset-y-2/4 -mt-4 opacity-70 hover:opacity-100 transition-opacity duration-500 shadow-md">
      <button onClick={onClick} className="float-left cursor-pointer">
        <ChevronLeftIcon className="w-10 h-10 px-1 bg-white rounded-full -ml-4 shadow-md"/>
      </button>
    </div>
  )
}

const Gallery = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    arrows: true,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
    slidesToShow: 4,
    slidesToScroll: 1,
    customPaging: function () {
      return <div className="dot"></div>
    },
    dotsClass: 'slick-dots slick-thumb',
    beforeChange: function (current:any, next:any) {

    },
    responsive: [
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1080,
        settings: {
          className: 'center',
          centerMode: true
        }
      }
    ]
  }

  return (
    <div className="font-sora py-10">
        <div className="bg-primary">
            <div className="w-full 2xl:w-10/12 2xl:mx-auto px-6 lg:px-8 py-20">
                <p className="text-center text-sm lg:text-xl font-light">Yuk, pelajari lebih dalam tentang MI As - Shodiq</p>
                <h1 className="text-3xl lg:text-4xl font-bold text-center pt-4">Galeri Foto Aktivitas MI As - Sodiq.</h1>
            </div>
        </div>
        <div>
            <Slider {...settings}>
                <div className="w-36 h-52">
                    <img className="w-auto h-auto object-cover"
                        src="/assets/images/slide1.jpeg"
                        alt="slide" loading="lazy"
                    />
                </div>
                <div className="w-36 h-52">
                    <img className="w-auto h-auto object-cover"
                        src="/assets/images/slide2.jpeg"
                        alt="slide" loading="lazy"
                    />
                </div>
                <div className="w-36 h-52">
                    <img className="w-auto h-auto object-cover"
                        src="/assets/images/slide1.jpeg"
                        alt="slide" loading="lazy"
                    />
                </div>
                <div className="w-36 h-52">
                    <img className="w-auto h-auto object-cover"
                        src="/assets/images/slide2.jpeg"
                        alt="slide" loading="lazy"
                    />
                </div>
                <div className="w-36 h-52">
                    <img className="w-auto h-auto object-cover"
                        src="/assets/images/slide1.jpeg"
                        alt="slide" loading="lazy"
                    />
                </div>
                <div className="w-36 h-52">
                    <img className="w-auto h-auto object-cover"
                        src="/assets/images/slide2.jpeg"
                        alt="slide" loading="lazy"
                    />
                </div>
            </Slider>
        </div>
    </div>
  )
}

export default Gallery
