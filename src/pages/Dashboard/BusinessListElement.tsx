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
                borderWidth={'1px'}
                borderStyle={'solid'}
                borderColor={'grey.light'}
                _hover={{ bgColor: 'grey.light', borderColor: 'blue.main' }}
            >
                <Text as={'span'} w={'33%'} textAlign={'left'} whiteSpace={'pre-wrap'}>
                    {name.toUpperCase()}
                </Text>
                <Text as={'span'} w={'33%'} textAlign={['center', 'left']}>
                    {siren}
                </Text>
                <Text as={'span'} w={'33%'} textAlign={['center', 'left']}>
                    <Tag size={'lg'} bgColor={'blue.main'} color={'white'} borderRadius={'3px'}>
                        {sector}
                    </Tag>
                </Text>
            </Button>
        </ListItem>
    );
};

export default BusinessListElement;
