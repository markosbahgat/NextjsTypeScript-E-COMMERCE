import React from 'react'
import styles from './ConfirmCheckout.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IContact } from '../../models/interfaces/checkoutContactInfo.model';

interface Props  { 
    handlePrevBtn: () => void,
    handleSubmitBtn: () => void,
}

const ConfirmCheckout: React.FC<Props> = ({handleSubmitBtn, handlePrevBtn}) => {
    const {register} = useForm<IContact>()
  return (
	<div style={{position:"relative"}}>
		<div className={styles.title}>Login Details:</div>
		<div className={styles.field}>
			<div className={styles.label}>Username</div>
			<input type="text" />
		</div>
		<div className={styles.field}>
			<div className={styles.label}>Password</div>
			<input type="password" />
		</div>
		<div className={styles.field} id={styles.btns}>
			<button className={styles.prev_3} id={styles.prev} onClick={handlePrevBtn}>
				Previous
			</button>
			<button className={styles.submit} onClick={handleSubmitBtn}>
				Submit
			</button>
		</div>
	</div>
  )
}

export default ConfirmCheckout;