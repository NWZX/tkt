import React from 'react';
import TkMenu from './TkMenu';
import TkMobileMenu from './TkMobileMenu';

interface Props {
    children?: React.ReactNode;
    hiddenMenuButton?: boolean;
}

const TkLayout: React.FC<Props> = ({ children, hiddenMenuButton }) => {
    return (
        <div className="flex w-full h-full gap-0 lg:gap-[5%] flex-col lg:flex-row">
            <div className="w-1/4 px-[2%] pt-[2%] bg-grey-lightest hidden lg:block">
                <TkMenu />
            </div>
            <div className="pt-[2%] block lg:hidden">
                <TkMobileMenu hiddenMenuButton={hiddenMenuButton} />
            </div>
            <div className="w-full lg:w-[70%] pr-[5%] lg:pr-[2%] pl-[5%] lg:pl-0 pt-[2%]">{children}</div>
        </div>
    );
};

export default TkLayout;
