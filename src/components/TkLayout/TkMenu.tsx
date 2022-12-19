import { Avatar } from '@chakra-ui/react';
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
        <div className="flex flex-col h-[95%]">
            <TKTLogo color="#4E59FF" width={'150px'} height={'50px'} />
            <div className="flex flex-col mt-8">
                <TkMenuButton leftIcon={<DashboardIcon />} onClick={() => navigate('/')}>
                    Dashboard
                </TkMenuButton>
                <TkMenuButton leftIcon={<BellIcon />}>Notification</TkMenuButton>
                <TkMenuButton leftIcon={<ChatBubbleIcon />}>Help</TkMenuButton>
            </div>
            <div className="flex flex-row mt-auto gap-2">
                <Avatar name="Sophe L" src="https://loremflickr.com/320/240/person" />
                <div className="flex flex-col">
                    <p>Sophie L.</p>
                    <p>sophie.l@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default TkMenu;
