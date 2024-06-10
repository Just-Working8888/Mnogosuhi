import React, { FC } from 'react'
import classes from './SendeMessege.module.scss'
import { Tag } from 'antd'
import ContactForm from './ContactForm/ContactForm'
import { Link } from 'react-router-dom'

const SendMessege: FC = () => {
    return (
        <div className={classes.main}>

            <div></div>

            <div className={classes.main_container}>
                <div style={{ width: "100%", height: 'fit-content' }}>
                    <Tag>
                        Contact
                    </Tag>
                    <h1>Свяжитесь с Mnogosushi
                    </h1>
                    <p>
                        Я никогда никому не прощу решение получить вещь каким-либо образом.
                    </p>
                    <div className={classes.main_container_btn}>
                        <Link to="/"> Home</Link> / contact
                    </div>
                </div>

                <ContactForm />

            </div>
        </div>
    )
}

export default SendMessege
