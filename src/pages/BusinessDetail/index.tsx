import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TkLayout from 'components/TkLayout';
import BarGraphCard from './BarGraphCard';
import { Helmet } from 'react-helmet';
import { GetAllResultByIds, GetBusinessById } from 'context/DataContext';
import BusinessDetailHead from './BusinessDetailHead';
import { strInt } from 'utils/strInt';

interface Props {}

const BusinessDetail: React.FC<Props> = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data: businessData } = GetBusinessById(strInt(id));
    const { data } = GetAllResultByIds(businessData?.results);

    useEffect(() => {
        if (!id) {
            navigate('/');
        } else {
            //check if the id is valid
            const clearedId = Number.parseInt(id);
            if (isNaN(clearedId)) {
                navigate('/');
            }
        }
    }, [id, navigate]);

    return (
        <>
            <Helmet>
                <title>{businessData?.name || 'Invalid Name'}</title>
                <link rel="canonical" href={`http://localhost/business/${id}`} />
            </Helmet>
            <TkLayout hiddenMenuButton={true}>
                <BusinessDetailHead businessName={businessData?.name} businessSiren={businessData?.siren} />
                <div className="flex flex-row flex-wrap gap-8 mt-12 lg:mt-0">
                    <BarGraphCard
                        name="Chiffre d'affaire"
                        data={data.map((v) => {
                            return { ammount: v.ca, year: v.year };
                        })}
                    />
                    <BarGraphCard
                        name="EBITDA"
                        data={data.map((v) => {
                            return { ammount: v.ebitda, year: v.year };
                        })}
                    />
                    <BarGraphCard
                        name="Loss"
                        data={data.map((v) => {
                            return { ammount: v.loss, year: v.year };
                        })}
                    />
                    <BarGraphCard
                        name="Margin"
                        data={data.map((v) => {
                            return { ammount: v.margin, year: v.year };
                        })}
                    />
                </div>
            </TkLayout>
        </>
    );
};

export default BusinessDetail;
