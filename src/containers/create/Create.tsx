import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { productCreateAction } from "../../store/product/actions"

const useInput = () => {
  const [v, setV] = useState('')
  
  const handlerChange = (e: any) => {
    const {value} = e.target
    setV(value)
  }    

  return [v, handlerChange]
}

const Create = () => {
  const dispatch = useDispatch()
  const [name, handlerName]: any = useInput()
  const [description, handlerDescription]: any = useInput()
  const [price, handlerPrice]: any = useInput()
  const [imgUrl, handlerImgUrl]: any = useInput()

  const inputRef: any = useRef(null)
  useEffect(() => {
    if(inputRef.current) {
      if (inputRef.current.value === '') inputRef.current.focus()
    }
  }, [inputRef])
  
  const handlerSubmit = (e: any) => {
    e.preventDefault()
    const p = {
      name: `${name}`,
      price: Number.parseInt(price),
      description: `${description}`,
      imgUrl: `${imgUrl}`,
    }
    dispatch(productCreateAction(p))
  }
  return (
    <form onSubmit={handlerSubmit}>
      <label>Nombre</label>
      <input ref={inputRef} value={name} onChange={handlerName} type="text" /><br />
      <label>Descripción</label>
      <input value={description} onChange={handlerDescription} type="text" /><br />
      <label>Precio</label>
      <input value={price} onChange={handlerPrice} type="number" /><br />
      <label>Imagen</label>
      <input value={imgUrl} onChange={handlerImgUrl} type="text" /><br />
      <button>Save</button>
    </form>
  )
}

export default Create
