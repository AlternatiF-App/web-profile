import { MenuIcon } from '@heroicons/react/outline'
import { useState, useEffect } from 'react'
import HeaderMenu from './HeaderMenu'
import Link from 'next/link'
import { useRouter } from 'next/router'
import HeaderMenuMobile from './HeaderMenuMobile'

const Header = () => {
  const router = useRouter()
  const [bg, setBg] = useState('bg-primary lg:bg-transparent')
  const [menu, setMenu] = useState(false)

  const checkRouter = () => {
    if (router.route.split('/')[1] === 'profile-madrasah') return true
  }

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
    <div className="fixed top-0 left-0 right-0 font-sora z-50">
        <div className={`${bg} ${bg !== 'bg-primary lg:bg-transparent' && 'shadow-md'}`}>
            <div className="w-full 2xl:w-10/12 2xl:mx-auto px-4 py-4 lg:px-8 lg:py-0">
                <div className="flex justify-between items-center">
                    <div>
                        <Link href="/">
                        <img className="w-auto h-8 lg:h-16 cursor-pointer"
                            src={`/assets/images/${bg === 'bg-primary lg:bg-transparent' ? 'logo.png' : 'logo-white.png'}`}
                            alt='logo' loading='lazy'
                        />
                        </Link>
                    </div>
                    <ul className={`${checkRouter() ? 'text-white' : 'text-black'} hidden lg:flex lg:space-x-6 items-center`}>
                        <HeaderMenu menu={'Beranda'}/>
                        <HeaderMenu menu={'Tentang Kami'}/>
                        <HeaderMenu menu={'Program'}/>
                        <HeaderMenu menu={'Hubungi Kami'}/>
                        <HeaderMenu menu={'PPDB'}/>
                        <li className={`${checkRouter() ? 'hidden' : 'flex'} items-center space-x-3`}>
                            <img className="w-6 h-auto cursor-pointer -mr-1" alt="facebook" src="/assets/icons/facebook.png"/>
                            <img className="w-6 h-auto cursor-pointer" alt="facebook" src="/assets/icons/ig.png"/>
                            <img className="w-6 h-auto cursor-pointer" alt="facebook" src='/assets/icons/twitter.png'/>
                        </li>
                    </ul>
                    <div className="block lg:hidden">
                        <MenuIcon onClick={() => setMenu(!menu)}
                            className={`h-5 w-5 ${bg === 'bg-primary lg:bg-transparent' ? 'text-white' : 'text-primary'}`}
                            fill="none" stroke="currentColor"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="block lg:hidden relative z-50 transition duration-300 ease-in-out">
        <div onClick={() => setMenu(!menu)} className={`${menu ? 'opacity-40' : 'opacity-0 invisible'} fixed inset-0 bg-black transition-all duration-300 ease-in-out"`}/>
        <nav className={`${menu ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 w-5/6 max-w-sm bg-white shadow-md overflow-y-auto transition duration-300 ease-in-out`}>
            <div className="py-8">
                <div className="px-4">
                  <img className="h-16 w-auto"
                    src="/assets/images/logo-white.png"
                    alt='logo' loading='lazy'
                  />
                </div>
                <ul className="px-2 pt-8">
                    <HeaderMenuMobile title={'Beranda'}/>
                    <HeaderMenuMobile title={'Tentang Kami'}/>
                    <HeaderMenuMobile title={'Program'}/>
                    <HeaderMenuMobile title={'Hubungi Kami'}/>
                    <HeaderMenuMobile title={'PPDB'}/>
                </ul>
                <div className="fixed w-full inset-x-0 bottom-0 px-4 mb-4">
                    <button className="w-full px-4 py-2 rounded-xl bg-primary text-white">
                        <a href="https://wa.me/6282142931584?text=We%20are%20interested%20in%20working%20with%20you">
                            WhatsApp Kami
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
