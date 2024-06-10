import { BreadCrumps, SendMessege } from 'Components'
import React, { FC, useEffect } from 'react'
import classes from './Contact.module.scss'
import { useAppDispatch, useAppSelector } from 'store/hook'
import { fetchSetting } from 'store/reducers/settingReduser'
const Contact: FC = () => {
    const data = useAppSelector((state) => state.setting.data.results[0])
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchSetting({}))
    }, [])
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
                            <h2>Добро пожаловать</h2>
                            <p>
                                {data?.address}
                            </p>
                        </div>
                    </div>
                    <div className={classes.main_numbers_item}>
                        <h1>
                            02
                        </h1>
                        <div>
                            <h2>
                                Позвонить
                            </h2>
                            <p>{data?.phone} </p>
                        </div>
                    </div>
                    <div className={classes.main_numbers_item}>
                        <h1>
                            03
                        </h1>
                        <div>
                            <h2>Написать</h2>
                            <p>{data?.email} </p>
                        </div>
                    </div>
                </section>
                <section>
                    <iframe
                        style={{ border: 'none' }}
                        width={'100%'}
                        height="560"
                        loading="lazy"
                        src="https://widgets.2gis.com/widget?type=firmsonmap&amp;options=%7B%22pos%22%3A%7B%22lat%22%3A42.871718262613314%2C%22lon%22%3A74.60871219635011%2C%22zoom%22%3A16%7D%2C%22opt%22%3A%7B%22city%22%3A%22bishkek%22%7D%2C%22org%22%3A%2270000001044582059%22%7D"></iframe>

                </section>
            </div>
        </>

    )
}

export default Contact
