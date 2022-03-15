import React from 'react'
import styles from './contactInfo.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IContact } from '../../models/interfaces/checkoutContactInfo.model';

interface Props  { 
    handleNextBtn: () => void,
}

const ShippingInfo: React.FC<Props> = ({handleNextBtn}) => {
    const {register} = useForm<IContact>()
  return (
    <div style={{position:"relative"}}>
    <div className={styles.title}>Basic Info:</div>
    <div className={styles.names_container}>
        <div className={styles.field}>
            <div className={styles.label}>First Name</div>
            <input type="text" {...register("First_Name")} />
        </div>
        <div className={styles.field}>
            <div className={styles.label}>Last Name</div>
            <input type="text" {...register("Last_Name")}/>
        </div>
    </div>
    <div className={styles.fullWidth_field}>
        <div className={styles.label}>Email</div>
        <input type="email" {...register("Email")}/>
    </div>
    <div className={styles.fullWidth_field}>
        <div className={styles.label}>Phone Number</div>
        <input type="phone" {...register("Phone_Number")}/>
    </div>
    <div className={styles.fullWidth_field}>
        <div className={styles.label}>Company</div>
        <input type="text" {...register("Company")}/>
    </div>
    <div className={styles.fullWidth_field}>
        <div className={styles.label}>Postal Code</div>
        <input type="number" {...register("Postal_Code")}/>
    </div>
    <div className={styles.fullWidth_field}>
        <button   className={styles.firstNext} id={styles.next} onClick={handleNextBtn}>
            Next
        </button>
    </div>
</div> 
  )
}

export default ShippingInfo;