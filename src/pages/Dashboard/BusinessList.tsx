import React from 'react';

interface Props {
    children?: React.ReactNode;
}

const BusinessList: React.FC<Props> = ({ children }) => {
    return (
        <div>
            <div>
                <div className="flex w-full h-10 justify-between text-grey-main">
                    <p className="w-1/3">COMPANY</p>
                    <p className="w-1/3">N° SIREN</p>
                    <p className="w-1/3">CATEGORY</p>
                </div>
            </div>
            <ul role="list" className="m-0 p-0 list-none overflow-y-auto flex flex-col gap-3">
                {children}
            </ul>
        </div>
    );
};

export default BusinessList;
