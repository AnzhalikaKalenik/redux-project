import React, { useState } from 'react';
import { MAX_LENGTH_CONST } from '../../constants/maxlength.constant';

type DescriptionProp = {
    text: string;
    maxLength?: number;
};

const Description: React.FC<DescriptionProp> = ({ text, maxLength = MAX_LENGTH_CONST }) => {
    const [details, setDetails] = useState(false);

    // const btnBgClassName = details ? '' : '';
    // const btnClasses = ['', btnBgClassName];

    const isLong = text.length > maxLength;
    const newtext = isLong ? text.slice(0, maxLength) + '...' : text;

    return (
        <div>
            {details ? <div>{text}</div> : <div>{newtext}</div>}

            {isLong && (
                <button style={{ marginTop: '10px', cursor: 'pointer' }} onClick={() => setDetails(prev => !prev)}>
                    {details ? 'Hide Details' : 'Show Details'}
                </button>
            )}
        </div>
    );
};
export default Description;
