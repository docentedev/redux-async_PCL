import { PRODUCT_GETALL_FAILED, PRODUCT_GETALL_START, PRODUCT_GETALL_SUCCESS } from "./getAllReducer"
import { createProduct, getAllProduct } from "../../client/product"
import { ProductCreate } from "./types"
import { PRODUCT_CREATE_FAILED, PRODUCT_CREATE_START, PRODUCT_CREATE_SUCCESS } from "./createReducer"

export const productGetAllAction = () => (dispatch: any, getState: any) => {
    dispatch({ type: PRODUCT_GETALL_START, payload: null })
    getAllProduct().then(data => {
        dispatch({ type: PRODUCT_GETALL_SUCCESS, payload: data })
    }).catch(e => {
        dispatch({ type: PRODUCT_GETALL_FAILED, payload: e })
    })
}

export const productCreateAction = (product: ProductCreate) => (dispatch: any, getState: any) => {
    dispatch({ type: PRODUCT_CREATE_START, payload: null })
    createProduct(product).then(data => {
        dispatch({ type: PRODUCT_CREATE_SUCCESS, payload: data })
    }).catch(e => {
        dispatch({ type: PRODUCT_CREATE_FAILED, payload: e })
    })
}