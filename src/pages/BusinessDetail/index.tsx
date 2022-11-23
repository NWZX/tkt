import { Box, Flex, IconButton, Text } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import TkLayout from 'src/components/TkLayout';

interface Props {}

const BusinessDetail: React.FC<Props> = () => {
    const navigate = useNavigate();

    return (
        <TkLayout>
            <Flex direction={'row'}>
                <Box>
                    <IconButton
                        aria-label="Back"
                        onClick={() => {
                            navigate('/');
                        }}
                    />
                </Box>
                <Flex direction={'column'}>
                    <Text>Business name</Text>
                    <Text>N° SIREN {15156446}</Text>
                </Flex>
            </Flex>
        </TkLayout>
    );
};

export default BusinessDetail;
