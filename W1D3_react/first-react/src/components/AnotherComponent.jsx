import React from 'react';

const AnotherComponent = (props) => {
    const {num, animals} = props
    // console.log(props)
    return (
        <fieldset>
            <legend>AnotherComponent.jsx</legend>
            <h3>hello from Another Component! {num}</h3>
            {
                animals.map((elem, idx) => {
                    return <div key={idx}>    
                        {elem}
                    </div>
                })
            }
        </fieldset>
    );
};

export default AnotherComponent;