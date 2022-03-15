import React from 'react'
import styles from './ShippingInfo.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IContact } from '../../models/interfaces/checkoutContactInfo.model';

interface Props  { 
    handlePrevBtn: () => void,
    handleNextBtn: () => void,
}

const ContactInfo: React.FC<Props> = ({handleNextBtn,  handlePrevBtn}) => {
    const {register} = useForm<IContact>()
  return (
    <div>
        <div className={styles.title}>Contact Info:</div>
        <div className={styles.field}>
            <div className={styles.label}>Email Address</div>
            <input type="text" />
        </div>
        <div className={styles.field}>
            <div className={styles.label}>Phone Number</div>
            <input type="Number" />
        </div>
        <div className={styles.field} id={styles.btns}>
            <button className={styles.prev_1} id={styles.prev} onClick={handlePrevBtn}>
                Previous
            </button>
            <button className={styles.next_1} id={styles.next} onClick={handleNextBtn}>
                Next
            </button>
        </div>
    </div>
  )
}

export default ContactInfo;