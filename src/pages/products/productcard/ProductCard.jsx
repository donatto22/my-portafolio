import './productCard.css'

const ProductCard = ({ title, description, imageUrl, webpage, repository, glasmorphismClass }) => {
    return (
        <div className={`product ${glasmorphismClass}`}>
            <div className="product-image">
                <img src={imageUrl} alt="" loading='lazy' />
            </div>

            <div className="product-content">
                <div className="product-title">{ title }</div>
                <div className="product-description">{ description }</div>
            </div>
        </div>
    )
}

export default ProductCard
