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
                        <ProductCard key={p.id} title={p.title}
                        imageUrl={p.imageUrl}
                        description={p.description}
                        webpage={p.webpage}
                        repository={p.repository}
                        glasmorphismClass={'black-g'}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Products
