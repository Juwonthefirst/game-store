import {
    ChevronLeft,
    ChevronRight,
    ShoppingCart
} from 'lucide-react'

const icons = {
    next: ChevronRight,
    prev: ChevronLeft,
    cart: ShoppingCart
}

const IconButton = ({className, iconName, onClick}) => {
    const Icon = icons[iconName]
    return (
        <button className={className} onClick={onClick}>
            <Icon/>
        </button>
    )
}

export default IconButton