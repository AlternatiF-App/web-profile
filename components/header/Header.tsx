import { MenuIcon } from '@heroicons/react/outline'
import { useState, useEffect } from 'react'
import HeaderMenu from './HeaderMenu'

const Header = () => {
  const [bg, setBg] = useState('bg-primary lg:bg-transparent')
  const [menu, setMenu] = useState(false)
  const [slide, setSlide] = useState('opacity-0')

  const listenScrollEvent = () => {
    if (window.scrollY > 25) {
      setBg('bg-white')
    } else {
      setBg('bg-primary lg:bg-transparent')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
  })

  return (
    <>
    <div className="fixed top-0 left-0 right-0 font-sora">
        <div className={`${bg} ${bg !== 'bg-primary lg:bg-transparent' && 'shadow-md'}`}>
            <div className="w-full 2xl:w-10/12 2xl:mx-auto px-4 py-4 lg:px-8 lg:py-6">
                <div className="flex justify-between items-center">
                    <div>
                        <img className="w-auto h-8 lg:h-16"
                            src={`/assets/images/${bg === 'bg-primary lg:bg-transparent' ? 'logo.png' : 'logo-white.png'}`}
                            alt='logo' loading='lazy'
                        />
                    </div>
                    <ul className="hidden lg:flex lg:space-x-6 2xl:space-x-10 items-center text-black">
                        <HeaderMenu menu={'Beranda'}/>
                        <HeaderMenu menu={'Profil Madrasah'}/>
                        <HeaderMenu menu={'Berita Madrasah'}/>
                        <HeaderMenu menu={'Kurikulum'}/>
                        <HeaderMenu menu={'PPDB'}/>
                        <HeaderMenu menu={'Kontak'}/>
                        <li className="flex items-center space-x-3">
                            <img className="w-6 h-auto -mr-1" alt="facebook" src="/assets/icons/facebook.png"/>
                            <img className="w-6 h-auto" alt="facebook" src="/assets/icons/ig.png"/>
                            <img className="w-6 h-auto" alt="facebook" src='/assets/icons/twitter.png'/>
                        </li>
                    </ul>
                    <div className="block lg:hidden">
                        <MenuIcon onClick={() => {
                          setMenu(!menu)
                          setSlide('opacity-100')
                        }}
                            className={`h-5 w-5 ${bg === 'bg-primary lg:bg-transparent' ? 'text-white' : 'text-primary'}`}
                            fill="none" stroke="currentColor"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="block lg:hidden relative z-50 transition duration-300 ease-in-out">
        <div onClick={() => setMenu(!menu)} className={`${menu ? 'opacity-40' : 'opacity-0'} fixed inset-0 bg-black transition-all duration-300 ease-in"`}/>
        <nav className={`${menu ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 w-5/6 max-w-sm bg-white shadow-md overflow-y-auto transition duration-300 ease-in-out`}>
            <div className="py-8">
                <div className="px-4">
                  <img className="h-16 w-auto"
                    src="/assets/images/logo-white.png"
                    alt='logo' loading='lazy'
                  />
                </div>
                <ul className="pl-4 pt-8 text-xl">
                    <li className={'py-3 border-r-4 border-primary cursor-pointer'}>Beranda</li>
                    <li className={'py-3 cursor-pointer'}>Profil Madrasah</li>
                    <li className={'py-3 cursor-pointer'}>Berita Madrasah</li>
                    <li className={'py-3 cursor-pointer'}>Kurikulum</li>
                    <li className={'py-3 cursor-pointer'}>PPDB</li>
                    <li className={'py-3 cursor-pointer'}>Kontak</li>
                </ul>
                <div className="fixed w-full inset-x-0 bottom-0 px-4 mb-4">
                    <button className="w-full px-4 py-2 rounded-xl bg-primary text-white">
                        <a href="https://wa.me/6282142931584?text=We%20are%20interested%20in%20working%20with%20you">
                            WhatsApp Me
                        </a>
                    </button>
                </div>
            </div>
        </nav>
    </div>
    </>
  )
}

export default Header
