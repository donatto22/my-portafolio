import './productCard.css'
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined'

const ProductCard = ({ title, description, imageUrl, webpage, repository, borderRadius, glasmorphismClass }) => {
    return (
        <div className={`product ${glasmorphismClass}`}>
            <div className="product-image">
                <img src={imageUrl} alt="" loading='lazy' data-border-radius={borderRadius}/>
            </div>

            <div className="product-content">
                <div className="product-title">{ title }</div>
                <div className="product-description">{ description }</div>

                <div className="product-links">
                    { webpage && <a href={webpage} target='_blank' data-glassmorphism={glasmorphismClass}
                     className={`product-link-btn ${glasmorphismClass}`}><OpenInNewOutlinedIcon/> Sitio Web</a> }

                    { repository && <a href={repository} target='_blank' data-glassmorphism={glasmorphismClass}
                     className={`product-link-btn ${glasmorphismClass}`}><OpenInNewOutlinedIcon/> Repositorio</a> }
                </div>
            </div>
        </div>
    )
}

export default ProductCard
