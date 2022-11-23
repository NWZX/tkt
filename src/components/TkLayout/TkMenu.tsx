import { Avatar, Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

interface Props {}

const TkMenu: React.FC<Props> = () => {
    return (
        <Flex direction={'column'} h={'95%'}>
            <Image src={'https://via.placeholder.com/150x50/'} />
            <Flex direction={'column'}>
                <Button>Dashboard</Button>
                <Button>Notification</Button>
                <Button>Help</Button>
            </Flex>
            <Flex direction={'row'} mt={'auto'}>
                <Avatar />
                <Flex direction={'column'}>
                    <Text>Sophie L.</Text>
                    <Text>sophie.l@gmail.com</Text>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default TkMenu;
