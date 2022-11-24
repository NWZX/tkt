import { List, Flex, Text, Box } from '@chakra-ui/react';
import React from 'react';

interface Props {
    children?: React.ReactNode;
}

const BusinessList: React.FC<Props> = ({ children }) => {
    return (
        <Box>
            <Box>
                <Flex w={['100%']} h={'2.5rem'} justifyContent={'space-between'} color={'grey.main'}>
                    <Text w={'33%'}>COMPANY</Text>
                    <Text w={'33%'}>N° SIREN</Text>
                    <Text w={'33%'}>CATEGORY</Text>
                </Flex>
            </Box>
            <List spacing={3} overflowY={'auto'}>
                {children}
            </List>
        </Box>
    );
};

export default BusinessList;
