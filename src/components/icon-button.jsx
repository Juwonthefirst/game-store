import {
    ChevronLeft,
    ChevronRight
} from 'lucide-react'

const icons = {
    next: ChevronRight,
    prev: ChevronLeft,
}

const IconButton = ({className, iconName, onClick}) => {
    const Icon = icons[iconName]
    return (
        <button className={className} onClick={onClick}>
            <Icon/>
        </button>
    )
}