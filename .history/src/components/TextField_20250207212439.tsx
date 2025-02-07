import React from 'react';
type Props = {
    placeholder:string;
    value?:string;
    width?:string;
    height?:string;
    onChange?:(value:string) =>void;
}
const TextField = ({
    placeholder,
    value,
    width = '100%',
    height ='20px',
    onChange,
}:Props) => {
    return (
        <input type="text"
        className='text-field'
        style={{width, height}}
        placeholder={placeholder}
        />
    );
};

export default TextField;