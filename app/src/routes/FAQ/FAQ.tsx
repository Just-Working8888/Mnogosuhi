import { FAQItem } from 'Components'
import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'store/hook'
import { fetchFaq } from 'store/reducers/FAQREduser'

const FAQ: FC = () => {
    const { data } = useAppSelector((state) => state.faq)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchFaq({}))
    }, [])
    return (
        <div>
            {data.results.map((item) =>
                <FAQItem index={item.id} title={item.question} description={item.answer} />
            )}
        </div>
    )
}

export default FAQ
