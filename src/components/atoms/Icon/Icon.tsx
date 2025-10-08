import './Icon.scss'

interface Params {
    size?: number
    width?: number
    height?: number
    className?: string
    src: string
    alt?: string
    aspectRatio?: 'square' | 'rectangle' | 'auto'
}

export const Icon = ({size = 24, width, height, className = '', src, alt = '', aspectRatio = 'square'}: Params) => {

    const finalWidth = width || (aspectRatio === 'rectangle' ? size * 2 : size)
    const finalHeight = height || size

    return (
        <img
            src={src}
            alt={alt}
            width={finalWidth}
            height={finalHeight}
            className={`icon icon--${aspectRatio} ${className}`}
        />
    )
}