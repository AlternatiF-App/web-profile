import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface HeaderMenuProps{
    menu: string;
}

const HeaderMenu = ({ menu }:HeaderMenuProps) => {
  const router = useRouter()
  const [show, setShow] = useState(false)
  const [content, setContent] = useState('')

  const checkRouter = () => {
    if (router.route.split('/')[1] === 'profile-madrasah') return true
  }

  const showMenu = (e:string) => {
    setShow(true)
    setContent(e)
  }

  return (
        <li className="relative">
            <div className={`${checkRouter() ? 'menu-title2' : 'menu-title'} py-4 lg:py-6 cursor-pointer group transition-all duration-300 ease-in-out inline-block`}
                onMouseOver={() => showMenu(menu)}
                onMouseLeave={() => setShow(false)}
            >
                <div className={`${checkRouter() ? 'group-hover:text-secondary' : 'group-hover:text-primary'} transition-all duration-300 ease-in-out`}>
                    <span className="block py-1">
                        {menu}
                    </span>
                </div>
            </div>
            <div onMouseOver={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
                className={`${(show && menu !== 'PPDB') ? 'opacity-100' : ('opacity-0 invisible')} absolute text-sm mt-0.5 w-56 shadow-md rounded-md bg-white text-black px-4 py-2 transition-all duration-300 ease-in-out`}>
                {
                    content === 'Beranda' && <>
                        <li className="py-2 hover:text-primary hover:font-medium cursor-pointer transition-all duration-300 ease-in-out">Sambutan Kepala Madrasah</li>
                    </>
                }
                {
                    content === 'Tentang Kami' && <>
                        <li className="py-2 hover:text-primary hover:font-medium cursor-pointer transition-all duration-300 ease-in-out">
                            <Link href="/profile-madrasah">Profil Madrasah</Link>
                        </li>
                        <li className="py-2 hover:text-primary hover:font-medium cursor-pointer transition-all duration-300 ease-in-out">Visi & Misi</li>
                    </>
                }
                {
                    content === 'Program' && <>
                        <li className="py-2 hover:text-primary hover:font-medium cursor-pointer transition-all duration-300 ease-in-out">Ekstrakurikuler</li>
                    </>
                }
                {
                    content === 'Hubungi Kami' && <>
                        <li className="py-2 hover:text-primary hover:font-medium cursor-pointer transition-all duration-300 ease-in-out">Kotak Pertanyaan</li>
                        <li className="py-2 hover:text-primary hover:font-medium cursor-pointer transition-all duration-300 ease-in-out">Saran Orang Tua / Wali Murid</li>
                    </>
                }
            </div>
        </li>
  )
}

export default HeaderMenu
