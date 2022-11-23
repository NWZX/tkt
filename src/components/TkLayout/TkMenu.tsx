import { Avatar, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import TkMenuButton from './TkMenuButton';
import DashboardIcon from 'icons/DashboardIcon';
import BellIcon from 'icons/BellIcon';
import ChatBubbleIcon from 'icons/ChatBubbleIcon';
import TKTLogo from 'logos/TKTLogo';
import { useNavigate } from 'react-router-dom';

interface Props {}

const TkMenu: React.FC<Props> = () => {
    const navigate = useNavigate();

    return (
        <Flex direction={'column'} h={'95%'}>
            <TKTLogo color="#4E59FF" width={'150px'} height={'50px'} />
            <Flex direction={'column'} mt={'2rem'}>
                <TkMenuButton leftIcon={<DashboardIcon />} onClick={() => navigate('/')}>
                    Dashboard
                </TkMenuButton>
                <TkMenuButton leftIcon={<BellIcon />}>Notification</TkMenuButton>
                <TkMenuButton leftIcon={<ChatBubbleIcon />}>Help</TkMenuButton>
            </Flex>
            <Flex direction={'row'} mt={'auto'} gap={'0.5rem'}>
                <Avatar src="https://loremflickr.com/320/240/person" />
                <Flex direction={'column'}>
                    <Text>Sophie L.</Text>
                    <Text>sophie.l@gmail.com</Text>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default TkMenu;
