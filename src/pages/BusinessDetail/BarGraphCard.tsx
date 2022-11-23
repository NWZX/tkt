import { Card, CardHeader, Heading } from '@chakra-ui/react';
import React from 'react';
import { Bar, BarChart, CartesianGrid, Label, ResponsiveContainer, XAxis, YAxis } from 'recharts';

interface Props {
    name: string;
    data: {
        year: number;
        ammount: number;
    }[];
}

const BarGraphCard: React.FC<Props> = ({ name, data }) => {
    return (
        <Card w={['100%', '100%', '45%']} h={'300px'}>
            <CardHeader>
                <Heading size="md">{name}</Heading>
            </CardHeader>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={300}
                    height={300}
                    data={data}
                    margin={{
                        top: 30,
                        right: 30,
                        left: 30,
                        bottom: 20,
                    }}
                >
                    <XAxis dataKey="year" tickLine={false}>
                        <Label value="Année" offset={0} position="insideBottomRight" />
                    </XAxis>
                    <YAxis dataKey="ammount" orientation="left" type="number" axisLine={false} tickLine={false}>
                        <Label value="Montant (en €)" offset={18} position="top" />
                    </YAxis>
                    <CartesianGrid strokeDasharray="3" vertical={false} />
                    <Bar name="Année" dataKey="year" fill="#282D30" barSize={7} radius={[3, 3, 0, 0]} />
                    <Bar name="Montant (en €)" dataKey="ammount" fill="#4E59FF" barSize={50} radius={[3, 3, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </Card>
    );
};

export default BarGraphCard;
