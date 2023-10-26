import React from 'react';

const Car = (props) => {
    return (
        <div>{JSON.stringify(props.carObject)}</div>
    );
};

export default Car;