
import { useAppDispatch, useAppSelector } from "store/hook";
import classes from "./TestPage.module.scss";
import { FC, useEffect } from "react";
import { Survey } from "Components";
import { fetchQuetionsById } from "store/reducers/producRedusers";
import { useParams } from "react-router-dom";
const TestPage: FC = () => {
    const { singleProduct } = useAppSelector((state) => state.quetions)
    const { id } = useParams()
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchQuetionsById({ id: Number(id) }))
    }, [])
    return (
        <div className={classes.main}>

            <Survey image={singleProduct ? singleProduct?.image : ''} questions={singleProduct ? singleProduct.questions : []} />

        </div >
    );
};

export default TestPage;
