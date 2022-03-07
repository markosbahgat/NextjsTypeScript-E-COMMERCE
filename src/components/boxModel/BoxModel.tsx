import React from 'react';
import styles from './style.module.scss'
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { showModel } from 'slices/essential.slice';
import { essentialState } from '../../slices/essential.slice';

interface Props extends React.HTMLProps<HTMLAllCollection> {}

const BoxModel: React.FC<Props> = ({children}) => {
    const ShowModel = useAppSelector(essentialState);
    const dispatch = useAppDispatch();
    const CloseBtn = () => {
        dispatch(showModel(false))
      };
      const sendBtn = () => {
        dispatch(showModel(false))
      };
    return ( 
        <section className={styles.section} id={styles[`${ShowModel.boxModel && "show"}`]}>
        <div className={styles.popup_outer}>
            <div className={styles.popup_box}>
                <i id={styles.close} className="fas fa-close" onClick={CloseBtn}></i>
                <h1>Cart Products</h1>
                <div style={{width:"85%"}}>
                    {children}
                </div>
                <div className={styles.button}>
                    <button  className={styles.cancel} onClick={CloseBtn}>Cancel</button>
                    <button className={styles.send} onClick={sendBtn} type="submit">Checkout</button>
                </div>
            </div>
        </div>
    </section>
     );
}
 
export default BoxModel;