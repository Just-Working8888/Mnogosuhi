import { FC, useState } from "react"
import classes from './FAZItem.module.scss'
type ProgressItem = {
    index?: number
    title: string
    description: string
}
const FAQItem: FC<ProgressItem> = ({ index, title, description }) => {
    const [state, setState] = useState(false)

    return (
        <div className={classes.ProgressItem}>
            <div className={classes.box}>
                <div className={classes.title}>
                    <h2>{title}</h2>
                </div>

                <button style={state ? { background: '#00FFFF' } : { background: 'white' }} onClick={() => setState(!state)}>
                    <svg style={state === true ? { transition: '0.3s', transform: ' rotate(0.5turn)' } : { transition: '0.3s', transform: 'rotate(0)' }} xmlns="http://www.w3.org/2000/svg" width="10" height="24" viewBox="0 0 10 24" fill="none">
                        <path d="M5.42406 22.2564L9.33333 18.3777L10 19.0392L5 24L0 19.0392L0.666666 18.3777L4.48125 22.1624L4.48125 0L5.42406 0L5.42406 22.2564Z" fill="black" />
                    </svg>
                </button>
            </div>
            <div style={state === true ? { height: 'fit-content', opacity: 1, marginTop: '30px' } : { height: 0, opacity: 0, margin: 0 }} className={classes.description}>

                {
                    index ? <div>0222</div> : ''
                }
                <h1>{description}</h1>
                <div>0222</div>
            </div>
        </div >
    )
}
export default FAQItem