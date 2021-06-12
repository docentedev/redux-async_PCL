import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { productGetAllAction } from "../../store/product/actions"
import { initialStateGetAll } from "../../store/product/getAllReducer"
import { productGetAllSelector } from "../../store/product/selectors"
import { Product } from "../../store/product/types"

const Home = () => {
    const productData: any = useSelector(productGetAllSelector)
    const productCreateData = useSelector((s: any) => s.products.create)
    const [products, setProducts] = useState(initialStateGetAll) 
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productGetAllAction())
    }, [dispatch])

    useEffect(() => {
        setProducts(productData)
    }, [productData])

    useEffect(() => {
        if (productCreateData.success) {
            setProducts((prevState): any => ({
                ...prevState,
                data: [...prevState.data, productCreateData.data],
            }) )
        }
    }, [productCreateData])

    
    if (!products.loading && products.error) return (<div>{products.errorMessage}</div>)
    
    if (products.loading ||products.success === null) return (<div>Cargando...</div>)

    return (<div>
        {JSON.stringify(productCreateData)}
        {Array.isArray(products.data) && products.data.map((product: Product) => (
            <div key={product.id}>
                <strong>{product.name}</strong>
            </div>
        ))}
    </div>)
}

export default Home