import { PaperAirplaneIcon } from '@heroicons/react/outline'

interface ItemExtracurricularProps{
  title: string;
  subtitle?: string;
}

const ItemExtracurricular = ({ title, subtitle }:ItemExtracurricularProps) => {
  return (
    <div className="flex items-center space-x-4">
        <div className="block p-6 bg-red-100 rounded-2xl">
            <PaperAirplaneIcon className="h-10 w-10 text-red-500" fill="none" stroke="currentColor"/>
        </div>
        <div>
            <h1 className="text-4xl font-medium">{title}</h1>
            <span className="text-lg font-light">{subtitle}</span>
        </div>
    </div>
  )
}

export default ItemExtracurricular
