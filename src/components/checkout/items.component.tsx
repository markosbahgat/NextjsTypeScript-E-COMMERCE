import React from 'react'
import Image from 'next/image';
import { IProWithAmount } from '../../models/interfaces/product.model';
import styles from './items.module.scss';
import { useAppDispatch } from '../../store/hooks';
import { showModel } from 'slices/essential.slice';

interface ItemsProps {
  product: IProWithAmount,
}

const Items: React.FC<ItemsProps> = ({product}) => {
  return (
        <div className={styles.main_item_container}>
            <div className={styles.img_container}>
              <Image src={product.image} layout="fill" priority alt='productImg'/>
            </div>
            <div className={styles.data_container}>
              <h4>{product.title.slice(0, 22)}...</h4>
              <span>PRICE: ${product.price}</span>
              <p>
                <span>Quantity : {product.amount}</span><span>No Size</span>
              </p>
            </div>
        </div>
  )
}

interface ContainerProps {
  cartProucts: IProWithAmount[],
  total: number,
}

const ItemsContianer:React.FC<ContainerProps> = ({cartProucts, total}) => {
  const dispatch = useAppDispatch();
  const handleCartClick = () => {
    dispatch(showModel(true))
  }
  return (
    <div className={styles.items_contaienr}>
      <div className={styles.header_container}>
        <h1>{cartProucts.length} ITEMS</h1>
        <button onClick={handleCartClick}>Edit</button>
      </div>
      <hr/>
      <div className={styles.all_items_container}>
        {cartProucts.map(item => (
          <Items product={item}/>  
        ))}
      </div>
      <hr/>
      <div className={styles.total_container}>
          <p>
            <span>Shipping</span>
            <span>$ 15.99</span>
          </p>
          <p>
            <span>Total</span>
            <span>$ {Math.round(total)}</span>
          </p>
          <p>
            <span>TOTAL TO PAY</span>
            <span>$ {Math.round(total + 15.99)}</span>
          </p>
      </div>
    </div>
  )
} 

export default ItemsContianer;