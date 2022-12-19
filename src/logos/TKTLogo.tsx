const TKTLogo: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => {
    return (
        <svg width="280" height="140" viewBox="0 0 280 140" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.542603 0H35.4469V140C16.1698 140 0.542603 124.353 0.542603 105.051V0Z"
                fill={props.color}
            />
            <path d="M70.3514 105.051H35.4471V140H70.3514V105.051Z" fill={props.color} />
            <path d="M70.3514 36.035H35.4471V70.9841H70.3514V36.035Z" fill={props.color} />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M209.951 6.10352e-05H244.856V140C225.579 140 209.951 124.353 209.951 105.051V6.10352e-05Z"
                fill={props.color}
            />
            <path d="M279.76 105.051H244.856V140H279.76V105.051Z" fill={props.color} />
            <path d="M279.76 36.035H244.856V70.9841H279.76V36.035Z" fill={props.color} />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M87.8035 6.10352e-05H122.708V140C103.431 140 87.8035 124.353 87.8035 105.051V6.10352e-05Z"
                fill={props.color}
            />
            <path d="M157.595 70.0001H122.691V104.949H157.595V70.0001Z" fill={props.color} />
            <path d="M192.499 104.949H157.595V139.898H192.499V104.949Z" fill={props.color} />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M189.499 38.0509H160.595V67H189.499V38.0509ZM192.499 35.0509V70H157.595V35.0509H192.499Z"
                fill={props.color}
            />
        </svg>
    );
};

export default TKTLogo;
