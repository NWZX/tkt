import { Box, Flex, Heading, IconButton, Skeleton, SkeletonText, Text } from '@chakra-ui/react';
import BackIcon from 'icons/BackIcon';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
    businessName?: string;
    businessSiren?: number;
}

const BusinessDetailHead: React.FC<Props> = ({ businessName, businessSiren }) => {
    const navigate = useNavigate();

    return (
        <Flex direction={'row'} gap={'1rem'}>
            <Box my="auto">
                <IconButton
                    aria-label="Back"
                    mr={'5%'}
                    borderRadius={'50px'}
                    bg={'linear-gradient(161.01deg, #01F2CF -8.06%, #99ACFF -8.05%, #4E6EFC 108.81%);'}
                    boxShadow={'0px 6px 20px rgba(5, 55, 156, 0.25)'}
                    icon={<BackIcon />}
                    color={'white'}
                    onClick={() => {
                        navigate('/');
                    }}
                />
            </Box>
            <Flex direction={'column'} gap={'1rem'}>
                <Skeleton isLoaded={!!businessName} height={'32px'}>
                    <Heading as={'h1'} size={'lg'}>
                        {businessName ? businessName : <SkeletonText noOfLines={1} spacing="15" />}
                    </Heading>
                </Skeleton>
                <SkeletonText noOfLines={1} spacing="4" isLoaded={!!businessSiren}>
                    <Text fontSize={'xs'} color={'grey.light'}>
                        N° SIREN {businessSiren}
                    </Text>
                </SkeletonText>
            </Flex>
        </Flex>
    );
};

export default BusinessDetailHead;
