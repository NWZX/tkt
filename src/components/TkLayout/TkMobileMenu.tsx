import {
    Avatar,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    IconButton,
    useDisclosure,
} from '@chakra-ui/react';
import BellIcon from 'icons/BellIcon';
import CancelIcon from 'icons/CancelIcon';
import ChatBubbleIcon from 'icons/ChatBubbleIcon';
import DashboardIcon from 'icons/DashboardIcon';
import MenuIcon from 'icons/MenuIcon';
import TKTLogo from 'logos/TKTLogo';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import TkMenuButton from './TkMenuButton';

interface Props {
    hiddenMenuButton?: boolean;
}

const TkMobileMenu: React.FC<Props> = ({ hiddenMenuButton }) => {
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef(null);

    return (
        <>
            <div className="flex flex-row justify-between">
                <TKTLogo color="#4E59FF" width={'100px'} height={'33px'} />
                <IconButton
                    display={hiddenMenuButton ? 'none' : 'inline-flex'}
                    ref={btnRef}
                    aria-label="Menu"
                    mr={'5%'}
                    borderRadius={'50px'}
                    bg={'linear-gradient(161.01deg, #01F2CF -8.06%, #99ACFF -8.05%, #4E6EFC 108.81%);'}
                    boxShadow={'0px 6px 20px rgba(5, 55, 156, 0.25)'}
                    icon={<MenuIcon />}
                    color={'white'}
                    onClick={onOpen}
                />
            </div>
            <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef} size={'full'}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader>
                        <div className="flex flex-row justify-between">
                            <TKTLogo color="#4E59FF" width={'100px'} height={'33px'} />
                            <IconButton
                                ref={btnRef}
                                aria-label="Close"
                                borderRadius={'50px'}
                                bg={'linear-gradient(161.01deg, #01F2CF -8.06%, #99ACFF -8.05%, #4E6EFC 108.81%);'}
                                boxShadow={'0px 6px 20px rgba(5, 55, 156, 0.25)'}
                                icon={<CancelIcon />}
                                color={'white'}
                                onClick={onClose}
                            />
                        </div>
                    </DrawerHeader>

                    <DrawerBody>
                        <div className="flex flex-col mt-8">
                            <TkMenuButton leftIcon={<DashboardIcon />} onClick={() => navigate('/')}>
                                Dashboard
                            </TkMenuButton>
                            <TkMenuButton leftIcon={<BellIcon />}>Notification</TkMenuButton>
                            <TkMenuButton leftIcon={<ChatBubbleIcon />}>Help</TkMenuButton>
                        </div>
                    </DrawerBody>

                    <DrawerFooter justifyContent={'left'}>
                        <div className="flex flex-row gap-2 ml-4">
                            <Avatar name="Sophe L" src="https://loremflickr.com/320/240/person" />
                            <div className="flex flex-col">
                                <p>Sophie L.</p>
                                <p>sophie.l@gmail.com</p>
                            </div>
                        </div>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default TkMobileMenu;
