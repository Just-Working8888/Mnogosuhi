import React, { useEffect, useState } from 'react';
import { Table, Divider, Button, Avatar, Card, Progress, Flex, List } from 'antd';
import classes from './Test.module.scss'

import { AntDesignOutlined, FullscreenExitOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from 'store/hook';
import { fetchQuetions } from 'store/reducers/producRedusers';
import TestCard from 'Components/Card/Card';


interface Question {
    question: string;
    options: string[];
    correctAnswer: string;
}

interface SurveyProps {
    questions: Question[];
    image: string;
}

const Survey: React.FC<SurveyProps> = ({ questions, image }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);
    const [showResults, setShowResults] = useState(false);
 
    const handleAnswerSelect = (answer: string) => {
        const updatedAnswers = [...answers];
        updatedAnswers[currentQuestionIndex] = answer;
        setAnswers(updatedAnswers);
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowResults(true);
        }
    };

    const currentQuestion = questions[currentQuestionIndex];

    const calculateScore = () => {
        let score = 0;
        answers.forEach((answer, index) => {
            if (answer === questions[index].correctAnswer) {
                score++;
            }
        });
        return score;
    };

    const columns = [
        {
            title: 'Question',
            dataIndex: 'question',
            key: 'question',
        },
        {
            title: 'Correct Answer',
            dataIndex: 'correctAnswer',
            key: 'correctAnswer',
        },
        {
            title: 'Your Answer',
            dataIndex: 'yourAnswer',
            key: 'yourAnswer',
        },
    ];
    const progress = Math.floor(((currentQuestionIndex) / questions.length) * 100)

    const dataSource = questions.map((question, index) => ({
        key: index,
        question: question.question,
        correctAnswer: question.correctAnswer,
        yourAnswer: answers[index],
    }));



    return (
        <div>

            {showResults ? (
                <div>
                    <Card>
                        <Flex gap={20} justify='space-between'>
                            <Progress type="circle" percent={Math.floor(((calculateScore()) / questions.length) * 100)} />
                            <p>Your score: {calculateScore()} / {questions.length}</p>

                        </Flex>

                    </Card>
                    {/* <Card>/</Card> */}

                    <Table columns={columns} dataSource={dataSource} />
                    <Divider />

                </div>
            ) : (
                <div>
                    {currentQuestion && (
                        <Card>
                            <Progress percent={progress} status="active" />
                            <div className={classes.Upload_content} >
                                <div className={classes.Upload_content_uploaded}>
                                    <Avatar
                                        shape="square"
                                        src={image}
                                        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                                        icon={<AntDesignOutlined />}
                                    />
                                    <h2>{currentQuestion.question}</h2>
                                </div>

                                <div className={classes.Upload_content_actions}>
                                    {currentQuestion.options.map((option, index) => (
                                        <li key={index}>
                                            <div onClick={() => handleAnswerSelect(option)}>
                                                <Button><FullscreenExitOutlined /></Button>
                                                {option}
                                            </div>
                                        </li>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    )}
                </div>
            )}

        </div>
    );
};

export default Survey;
