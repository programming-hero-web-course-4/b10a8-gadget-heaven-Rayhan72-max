import React from 'react';

const Heading = ({title,psg}) => {
    return (
        <div>
            <div>
                <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                <p className="mb-5">{psg}</p>
            </div>
        </div>
    );
};

export default Heading;