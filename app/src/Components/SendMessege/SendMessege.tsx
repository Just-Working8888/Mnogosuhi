import React, { FC } from 'react'
import classes from './SendeMessege.module.scss'
import { Tag } from 'antd'
import ContactForm from './ContactForm/ContactForm'

const SendMessege: FC = () => {
    return (
        <div className={classes.main}>

            <div></div>

            <div className={classes.main_container}>
                <div style={{ width: "100%", height: 'fit-content' }}>
                    <Tag>
                        Contact
                    </Tag>
                    <h1>Get in Touch with Starbelly
                    </h1>
                    <p>
                        Consectetur numquam poro nemo veniam
                        eligendi rem adipisci quo modi.
                    </p>
                    <div className={classes.main_container_btn}>
                        Home / menu
                    </div>
                </div>

                <ContactForm />

            </div>
        </div>
    )
}

export default SendMessege
