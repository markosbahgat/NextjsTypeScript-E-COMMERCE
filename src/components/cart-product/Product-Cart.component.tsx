import Image from 'next/image';
import React, { useState } from 'react'
import styles from './style.module.scss';
import { IProduct } from '../../models/interfaces/product.model';
import { decreament, increament, removeCart} from 'slices/cart.slice'
import { useAppDispatch } from '../../store/hooks';

interface Props  {
  product:IProduct,
}

const ProductCart:React.FC<Props> = ({product}) => {
  const dispatch = useAppDispatch();
  const  [productsNumber, setProductsNumber] = useState<number>(1);

  const handleDec = () => {
    if(productsNumber > 1){
      setProductsNumber(productsNumber => --productsNumber)
      dispatch(decreament(product.price))
    }
  }
  const handleInc = () => {
      setProductsNumber(productsNumber => ++productsNumber)
      dispatch(increament(product.price))
  }
  const handleDelete = () => {
    dispatch(removeCart({product:product, amount: productsNumber}))
  }
  
  return (
      <div className={styles.main_container}>
        <div className={styles.main_img_container}>
            <div className={styles.img_contaienr}><Image src={product.image} alt="productCart" priority layout='fill'/></div>
            <div className={styles.name_container}>
                <h1>{product.title.slice(0, 11)}....</h1>
                <span>{product.description.slice(0, 30)}</span>  
            </div>
        </div>
        <div className={styles.data_container}>
          <p>${product.price}</p>
          <hr/>
          <div>
            <button onClick={handleDec}><i className="fa-solid fa-minus"></i></button>
            <div>{productsNumber}</div>
            <button onClick={handleInc}><i className="fa-solid fa-plus"></i></button>
          </div>
          <div className={styles.delete_container} onClick={handleDelete}><i className="fa-solid fa-trash-can"></i></div>
        </div>
      </div>
  )
}

export default ProductCart;