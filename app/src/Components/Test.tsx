import React, { useState } from 'react';
import axios from 'axios';

const MyComponent: React.FC = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [quetion, setQuestion] = useState('');
    const [options, setOptions] = useState<string[]>([]);
    const [correctAnswer, setCorrectAnswer] = useState('');

    const handleAddOption = () => {
        setOptions([...options, '']);
    };

    const handleOptionChange = (index: number, value: string) => {
        const updatedOptions = [...options];
        updatedOptions[index] = value;
        setOptions(updatedOptions);
    };

    const handleRemoveOption = (index: number) => {
        const updatedOptions = options.filter((_, i) => i !== index);
        setOptions(updatedOptions);
    };

    const handleSubmit = async () => {
        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('image', image!);
            formData.append('userId', "1");
            formData.append(
                'quetions',
                JSON.stringify([
                    {
                        quetion,
                        options,
                        correctAnswer
                    }
                ])
            );

            const response = await axios.post('http://localhost:7002/quetions', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('Успешно создана новая запись Quetions:', response.data);
        } catch (error) {
            console.error('Ошибка при создании новой записи Quetions:', error);
        }
    };

    return (
        <div>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)} />
            <input type="text" value={quetion} onChange={(e) => setQuestion(e.target.value)} placeholder="Question" />
            <input type="text" value={correctAnswer} onChange={(e) => setCorrectAnswer(e.target.value)} placeholder="Correct Answer" />
            {options.map((option, index) => (
                <div key={index}>
                    <input type="text" value={option} onChange={(e) => handleOptionChange(index, e.target.value)} placeholder={`Option ${index + 1}`} />
                    <button onClick={() => handleRemoveOption(index)}>Remove</button>
                </div>
            ))}
            <button onClick={handleAddOption}>Add Option</button>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default MyComponent;
