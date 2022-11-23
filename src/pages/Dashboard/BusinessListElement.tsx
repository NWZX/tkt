import { Button, ListItem, Tag, Text } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IBusiness } from 'interface/Interfaces';

interface Props extends IBusiness {
    onClick?: () => void;
}

const BusinessListElement: React.FC<Props> = ({ id, name, siren, sector }) => {
    const navigate = useNavigate();

    return (
        <ListItem
            onClick={() => {
                navigate(`/business/${id}`);
            }}
        >
            <Button
                w={['100%']}
                h={'5rem'}
                bgColor={'transparent'}
                justifyContent={'space-between'}
                border={'1px solid #D6D6D6'}
            >
                <Text as={'span'} w={'33%'} textAlign={'left'} whiteSpace={'pre-wrap'}>
                    {name.toUpperCase()}
                </Text>
                <Text as={'span'} w={'33%'} textAlign={['center', 'left']}>
                    {siren}
                </Text>
                <Text as={'span'} w={'33%'} textAlign={['center', 'left']}>
                    <Tag size={'lg'} bgColor={'#4E59FF'} color={'white'}>
                        {sector}
                    </Tag>
                </Text>
            </Button>
        </ListItem>
    );
};

export default BusinessListElement;
