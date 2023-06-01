import './products.css'
import ProductCard from './productcard/ProductCard'

// data
import productsData from'./products.json'

import { useSelector } from 'react-redux'

const Products = () => {
    const glassmorphism = useSelector(state => state.glassmorphism)

    return (
        <div id="products">
            <div id="products-container">
                {
                    productsData.map(p => (
                        <ProductCard key={p.id} title={p.title}
                        imageUrl={p.imageUrl}
                        borderRadius={p.borderRadius}
                        description={p.description}
                        webpage={p.webpage}
                        repository={p.repository}
                        glasmorphismClass={glassmorphism}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Products
