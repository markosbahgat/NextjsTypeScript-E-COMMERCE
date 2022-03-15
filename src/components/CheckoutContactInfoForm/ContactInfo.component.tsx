import React from 'react'
import styles from './contactInfo.module.scss';

interface Props  {}

const ContactInfo = (props: Props) => {
  return (
          <div className={styles.main_container}>
              <h3>Contact Info</h3>
              <div className={styles.inputs_container}>
                  <div className={styles.names_container}>
                      <input type="text" name='firstName' placeholder='First Name' />
                      <input type="text"  name='lastName' placeholder='Last Name'/>
                  </div>
                  <input type="email" name='email' placeholder='Name'/>
                  <input type="text" name='company' placeholder='Company (Optional)'/>
                  <input type="number" name='postalCode' placeholder='Postal Code'/>
                  <input type="phone" name='phoneNumber' placeholder='Phone Number (Optional)'/>
                  
              </div>
          </div>      
  )
}

export default ContactInfo;