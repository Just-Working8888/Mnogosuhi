import { BreadCrumps, SendMessege } from 'Components'
import React, { FC } from 'react'
import classes from './Contact.module.scss'
const Contact: FC = () => {
    return (
        <>
            <SendMessege />
            <div className={classes.main}>

                <section className={classes.main_numbers}>
                    <div className={classes.main_numbers_item}>
                        <h1>
                            01
                        </h1>
                        <div>
                            <h2>Welcome</h2>
                            <p>Montréal, 1510 Rue Sauvé

                            </p>
                        </div>
                    </div>
                    <div className={classes.main_numbers_item}>
                        <h1>
                            02
                        </h1>
                        <div>
                            <h2>Call
                            </h2>
                            <p>+996 777 77 77 77 </p>
                        </div>
                    </div>
                    <div className={classes.main_numbers_item}>
                        <h1>
                            03
                        </h1>
                        <div>
                            <h2>Write</h2>
                            <p>starbelly@mail.com </p>
                        </div>
                    </div>
                </section>
                <section>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12133.64669422799!2d72.79318835000001!3d40.510391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1716375379300!5m2!1sru!2skg"
                        width={'100%'}
                        height="450"
                        style={{ border: 'none' }}
                        loading="lazy"
                    ></iframe>
                </section>
            </div>
        </>

    )
}

export default Contact
