import './products.css'
import ProductCard from './productcard/ProductCard'

// data
import productsData from'./products.json'

const Products = () => {
    return (
        <div id="products">
            <div id="products-container">
                {
                    productsData.map(p => (
                        <ProductCard key={p.id} glasmorphismClass={'black-g'}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Products
