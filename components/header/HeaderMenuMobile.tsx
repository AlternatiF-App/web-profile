import { ChevronDownIcon } from '@heroicons/react/outline'
import { useState, useEffect } from 'react'
import Link from 'next/link'

interface HeaderMenuMobileProps{
    title: string;
}

const HeaderMenuMobile = ({ title }:HeaderMenuMobileProps) => {
  const [show, setShow] = useState(false)
  const [content, setContent] = useState('')
  const [height, setHeight] = useState('')

  const btnExpand = () => {
    setShow(!show)
    setContent(title)
  }

  useEffect(() => {
    if (title === 'Beranda') {
      setHeight('h-10')
    } else if (title === 'Tentang Kami') {
      setHeight('h-20')
    } else if (title === 'Program') {
      setHeight('h-10')
    } else if (title === 'Hubungi Kami') {
      setHeight('h-20')
    }
  })

  return (
    <li className="font-sora">
        <div onClick={() => btnExpand()}
            className="py-2 px-4 flex items-center justify-between cursor-pointer">
            <div>{title}</div>
            {title !== 'PPDB' && <ChevronDownIcon className="h-5 w-5" fill="none" stroke="currentColor"/>}
        </div>
        <div className={`${(show && content !== 'PPDB') ? height : ('h-0')} ml-4 px-4 transition-all duration-300 ease-in-out`}>
            {
                (content === 'Beranda' && show) && <div className={`${(show && content === 'Beranda') ? ('opacity-100') : ('opacity-0 invisible')} transition-all duration-1000 ease-in-out`}>
                    <div className="py-2 cursor-pointer">
                        Sambutan Kepala Madrasah
                    </div>
                </div>
            }
            {
                (content === 'Tentang Kami' && show) && <div className={`${(show && content === 'Tentang Kami') ? ('opacity-100') : ('opacity-0 invisible')} transition-all duration-1000 ease-in-out`}>
                    <li className="py-2 cursor-pointer">
                        <Link href="/profile-madrasah">Profil Madrasah</Link>
                    </li>
                    <li className="py-2 cursor-pointer">
                        <Link href="/vision-and-mission">Visi & Misi</Link>
                    </li>
                </div>
            }
            {
                (content === 'Program' && show) && <div className={`${(show && content === 'Program') ? ('opacity-100') : ('opacity-0 invisible')} transition-all duration-1000 ease-in-out`}>
                    <li className="py-2 cursor-pointer">
                        <Link href="/extracurricular">Ekstrakurikuler</Link>
                    </li>
                </div>
            }
            {
                (content === 'Hubungi Kami' && show) && <div className={`${(show && content === 'Hubungi Kami') ? ('opacity-100') : ('opacity-0 invisible')} transition-all duration-1000 ease-in-out`}>
                    <li className="py-2 cursor-pointer">Kotak Pertanyaan</li>
                    <li className="py-2 cursor-pointer">Saran Orang Tua / Wali Murid</li>
                </div>
            }
        </div>
    </li>
  )
}

export default HeaderMenuMobile
