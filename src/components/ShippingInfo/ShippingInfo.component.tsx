import React from 'react'
import styles from './ShippingInfo.module.scss';
import { UseFormRegister } from 'react-hook-form';
import { FormValues } from 'components/checkout/Checkout.component';

interface Props  { 
    handlePrevBtn: () => void,
    handleNextBtn: () => void,
    register: UseFormRegister<FormValues>,
    isValid: boolean
}

const ContactInfo: React.FC<Props> = ({handleNextBtn,  handlePrevBtn, register, isValid}) => {
  return (
    <div>
        <div className={styles.title}>Contact Info:</div>
        <div className={styles.field}>
            <div className={styles.label}>Email Address</div>
              <input type="text"  {...register("Email_Address", {required:true})}/>
        </div>
        <div className={styles.field}>
            <div className={styles.label}>Phone Number</div>
              <input type="Number" {...register("fuck")}/>
        </div>
        <div className={styles.field} id={styles.btns}>
            <button type="button" className={styles.prev_1} id={styles.prev} onClick={handlePrevBtn}>
                Previous
            </button>
            <button type="button" disabled={!isValid} className={styles.next_1} id={styles.next} onClick={handleNextBtn}>
                Next
            </button>
        </div>
    </div>
  )
}

export default ContactInfo;