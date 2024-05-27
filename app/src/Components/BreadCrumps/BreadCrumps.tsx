import React, { FC } from 'react'
import classes from './BreadCrumps.module.scss'
import { Link } from 'react-router-dom'

type Props = {
    title: string
    hrefs: { label: string, href: string }[]
}
const BreadCrumps: FC<Props> = ({ title, hrefs }) => {
    return (
        <div className={classes.main}>

            <div></div>

            <div className={classes.main_container}>
                <h1>{title}</h1>
                <div className={classes.main_container_btn}>
                    {hrefs.map((href) => <><Link to={href.href}>{href.label}</Link> /</>)}
                </div>
            </div>
        </div>
    )
}

export default BreadCrumps
