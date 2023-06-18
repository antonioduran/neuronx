import { UserContext } from "../../contexts/user.context";
import ProductCard from '../../components/product-card/product-card.component';

import { ProductsContext } from "../../contexts/products.context";
import { useContext } from "react";
import './shop.styles.scss';

const Shop = () => {
    const {products} = useContext(ProductsContext)
    console.log(JSON.stringify(products));
    return (
        <div className='products-container'>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default Shop;