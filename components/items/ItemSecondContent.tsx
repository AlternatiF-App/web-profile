import { DesktopComputerIcon } from '@heroicons/react/outline'

const ItemSecondContent = () => {
  return (
      <li className="w-full lg:w-80 font-sora">
          <div className="flex justify-center">
                <a className="block p-8 bg-amber-100 rounded-xl">
                    <DesktopComputerIcon className="h-10 w-10 text-amber-400"
                        fill="none" stroke="currentColor"
                    />
                </a>
          </div>
          <div className="pt-5 space-y-4 text-lg lg:text-xl">
            <h1 className="font-semibold text-center">
                Lingkungan Nyaman
            </h1>
            <p className="font-thin text-center">
                Berada di lingkungan yang asri, aman, dan kondusif.
            </p>
          </div>
      </li>
  )
}

export default ItemSecondContent
