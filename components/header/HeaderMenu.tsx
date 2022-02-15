import { useState } from 'react'

interface HeaderMenuProps{
    menu: string;
}

const HeaderMenu = ({ menu }:HeaderMenuProps) => {
  const [show, setShow] = useState(false)
  const [content, setContent] = useState('')

  const showMenu = (e:string) => {
    setShow(true)
    setContent(e)
  }

  return (
        <li className="relative">
            <div className="py-4 lg:py-6 cursor-pointer group transition-all duration-300 ease-in-out inline-block menu-title"
                onMouseOver={() => showMenu(menu)}
                onMouseLeave={() => setShow(false)}
            >
                <div className="group-hover:text-primary">
                    <span className="block py-1">
                        {menu}
                    </span>
                </div>
            </div>
            <div onMouseOver={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
                className={`${(show && menu !== 'PPDB') ? 'opacity-100' : ('opacity-0 invisible')} absolute text-sm mt-0.5 w-56 rounded-md bg-white px-4 py-2 transition-all duration-300 ease-in-out`}>
                {
                    content === 'Beranda' && <>
                        <li className="py-2 hover:text-primary hover:font-medium cursor-pointer transition-all duration-300 ease-in-out">Sambutan Kepala Madrasah</li>
                    </>
                }
                {
                    content === 'Tentang Kami' && <>
                        <li className="py-2 hover:text-primary hover:font-medium cursor-pointer transition-all duration-300 ease-in-out">Profil Madrasah</li>
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
