import React, { FC } from 'react'
import items from '../../data/test/headeritems.json'
import { useLocation, useNavigate } from 'react-router-dom'
import classes from './MobileNav.module.scss'
import './MobileNav.scss'

const MobileNav: FC<any> = ({ setMobileOpen }) => {
    const navigate = useNavigate()
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div className={classes.main}>
            <div className={classes.main_container}>
                <ol>
                    {
                        items.map((item) => {
                            return <li onClick={() => {
                                navigate(item.href)
                                setMobileOpen(false)
                            }}> <span className={classes.span} style={currentPath === item.href ? {} : { display: 'none' }}>•</span> {item.title}</li>
                        })
                    }
                </ol>
            </div>

        </div>
    )
}

export default MobileNav
