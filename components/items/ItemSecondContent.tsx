import { DesktopComputerIcon, UserGroupIcon, ClockIcon, LocationMarkerIcon } from '@heroicons/react/outline'
import { useState, useEffect } from 'react'

interface ItemSecondContentProps{
    icon: number;
    title: string;
    subtitle: string;
}

const ItemSecondContent = ({ icon, title, subtitle }:ItemSecondContentProps) => {
  const [bg, setBg] = useState('')

  useEffect(() => {
    if (icon === 1) {
      setBg('bg-amber-100')
    } else if (icon === 2) {
      setBg('bg-red-100')
    } else if (icon === 3) {
      setBg('bg-green-100')
    } else if (icon === 4) {
      setBg('bg-blue-100')
    }
  }, [])

  return (
      <li className="w-full lg:w-80 font-sora">
          <div className="flex justify-center">
                <a className={`${bg} block p-8 rounded-xl`}>
                    {icon === 1 && <DesktopComputerIcon className="h-10 w-10 text-amber-400"
                        fill="none" stroke="currentColor"/>
                    }
                    {icon === 2 && <UserGroupIcon className="h-10 w-10 text-red-400"
                        fill="none" stroke="currentColor"/>
                    }
                    {icon === 3 && <ClockIcon className="h-10 w-10 text-green-400"
                        fill="none" stroke="currentColor"/>
                    }
                    {icon === 4 && <LocationMarkerIcon className="h-10 w-10 text-blue-400"
                        fill="none" stroke="currentColor"/>
                    }
                </a>
          </div>
          <div className="pt-5 space-y-4 text-lg lg:text-xl">
            <h1 className="font-semibold text-center">
                {title}
            </h1>
            <p className="font-thin text-center">
                {subtitle}
            </p>
          </div>
      </li>
  )
}

export default ItemSecondContent
