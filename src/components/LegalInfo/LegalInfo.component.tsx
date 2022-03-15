import React from 'react'
import styles from './LegalInfo.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IContact } from '../../models/interfaces/checkoutContactInfo.model';

interface Props  { 
    handlePrevBtn: () => void,
    handleNextBtn: () => void,
}

const LegalInfo: React.FC<Props> = ({handleNextBtn, handlePrevBtn}) => {
    const {register} = useForm<IContact>()
  return (
    <div style={{position:"relative"}}>
		<div className={styles.title}>Contact Info:</div>
		<div className={styles.field}>
			<div className={styles.label}>fuck Address</div>
			<input type="text" />
		</div>
		<div className={styles.field}>
			<div className={styles.label}>Phone Number</div>
			<input type="Number" />
		</div>
		<div className={styles.field} id={styles.btns}>
			<p className={styles.prev_1} id={styles.prev} onClick={handlePrevBtn}>
				Previous
			</p>
			<p className={styles.next_1} id={styles.next} onClick={handleNextBtn}>
				Next
			</p>
		</div>
	</div>
  )
}

export default LegalInfo;