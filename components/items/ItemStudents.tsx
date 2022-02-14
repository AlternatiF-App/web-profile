interface ItemStudentsProps{
    total: number;
    title: string;
    padding?: string;
}

const ItemStudents = ({ total, title, padding }:ItemStudentsProps) => {
  return (
    <div className={`${padding} relative shadow-md`}>
        <div className="bg-white h-28 w-28 rounded-2xl rotate-45"/>
        <span className="block absolute top-0 mt-7 ml-6 text-4xl font-bold">{total}</span>
        <span className="block absolute top-0 mt-16 ml-9 font-thin text-xl">{title}</span>
    </div>
  )
}

export default ItemStudents
