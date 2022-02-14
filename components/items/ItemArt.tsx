import { BeakerIcon } from '@heroicons/react/outline'
import { useState } from 'react'

interface ItemArtProps{
    title: string;
    paragraph: string;
    show: boolean;
}

const ItemArt = ({ title, paragraph, show }:ItemArtProps) => {
  const [read, setRead] = useState(show)
  return (
    <div className="font-sora">
        <div onClick={() => setRead(!read)}
            className="flex items-center space-x-4 cursor-pointer">
            <BeakerIcon className="h-5 w-5 text-primary" fill="none" stroke="currentColor"/>
            <h1 className="font-medium">{title}</h1>
        </div>
        <div className={`${read ? ('h-32 lg:h-20') : ('h-0 invisible')} pl-9 py-2 transition-all duration-300 ease-in-out`}>
            <p className={`${read ? ('opacity-100') : ('opacity-0 invisible')} font-light transition-all duration-300 ease-in-out`}>
                {paragraph}
            </p>
        </div>
    </div>
  )
}

export default ItemArt
