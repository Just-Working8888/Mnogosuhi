import React, { useState } from 'react';
import { Button, Row, Col, Card, Flex } from 'antd';


const Slides: React.FC = () => {


    return (
        <div>
            <Flex>
                <Button type='primary'>
                    Ingridients
                </Button>
                <Button type='primary'>
                    Deteil
                </Button>
                <Button type='primary'>
                    Rewue
                </Button>
            </Flex>
        </div>
    );
};

export default Slides;
