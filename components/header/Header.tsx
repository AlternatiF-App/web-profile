import { MenuIcon } from '@heroicons/react/outline'
import { useState, useEffect } from 'react'
import HeaderMenu from './HeaderMenu'

const Header = () => {
  const [bg, setBg] = useState('')

  const listenScrollEvent = () => {
    if (window.scrollY > 25) {
      setBg('bg-white')
    } else {
      setBg('')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
  })

  return (
    <div className="fixed top-0 left-0 right-0 font-sora">
        <div className={`${bg} ${bg !== '' && 'shadow-md'}`}>
            <div className="w-full 2xl:w-10/12 2xl:mx-auto px-4 py-4 lg:px-8 lg:py-6">
                <div className="flex justify-between items-center">
                    <div>
                        <img className="w-auto h-8 lg:h-16"
                            src={`/assets/images/${bg === '' ? 'logo.png' : 'logo-white.png'}`}
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
                        <MenuIcon className={`h-5 w-5 ${bg === '' ? 'text-white' : 'text-primary'}`}
                            fill="none" stroke="currentColor"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
