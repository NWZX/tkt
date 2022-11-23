import { Card, CardHeader, Heading } from '@chakra-ui/react';
import React from 'react';

interface Props {
    name: string;
    year: number;
    ammount: number;
}

const BarGraphCard: React.FC<Props> = ({ name, year, ammount }) => {
    return (
        <Card>
            <CardHeader>
                <Heading size="md">{name}</Heading>
            </CardHeader>
        </Card>
    );
};

export default BarGraphCard;
