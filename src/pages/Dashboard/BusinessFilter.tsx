import TkSelect from 'components/TkSelect';
import React from 'react';

interface Props {
    onChange?: (sector: string, company: string) => void;
    sectors: string[];
    companies: string[];
}

const BusinessFilter: React.FC<Props> = ({ sectors, companies, onChange }) => {
    const [sector, setSector] = React.useState('');
    const [company, setCompany] = React.useState('');
    return (
        <div className="flex flex-col md:flex-row gap-4">
            <TkSelect
                placeholder="Sector *"
                aria-label="Sector"
                required
                className="w-full lg:w-1/3"
                onChange={(e) => {
                    setSector(e.target.value);
                    onChange && onChange(e.target.value, company);
                }}
            >
                {sectors.map((sector) => (
                    <option key={sector} value={sector}>
                        {sector}
                    </option>
                ))}
            </TkSelect>
            <TkSelect
                placeholder="Company *"
                aria-label="Company"
                required
                className="w-full lg:w-1/3"
                onChange={(e) => {
                    setCompany(e.target.value);
                    onChange && onChange(sector, e.target.value);
                }}
            >
                {companies.map((company) => (
                    <option key={company} value={company}>
                        {company}
                    </option>
                ))}
            </TkSelect>
        </div>
    );
};

export default BusinessFilter;
