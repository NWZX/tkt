import React, { SelectHTMLAttributes } from 'react';
import clsx from 'clsx';

interface Props extends React.DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {}

const TkSelect: React.FC<Props> = ({ ...props }) => {
    return (
        <select
            {...props}
            className={clsx(
                'py-2 px-2 rounded-lg border-2 border-grey-light',
                'focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-main focus-visible:ring-opacity-100',
                'bg-white',
                props.className,
            )}
        />
    );
};

export default TkSelect;
