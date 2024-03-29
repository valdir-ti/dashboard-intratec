import { Icon } from 'lucide-react'
interface CardProps {
  title: string
  Icon: Icon
}

const Card = ({ title, Icon }: CardProps) => {
  return (
    <div className="bg-slate-300 h-auto w-full p-4"><Icon />{title}</div>
  )
}

export default Card