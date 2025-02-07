import React from 'react';
type Props = {
    placeholder:string;
    value?:string;
    width?:string;
    height?:string;
    onChange?: (value:string) =>void;
}
const TextField = ({
    // placeholder,
    // value,
    width = '100%',
    height ='20px',
    onChange,
    ...props
}:Props) => {
    return (
        <input
        {...props}
        type="text"
        className='text-field'
        style={{width, height}}
        // placeholder={placeholder}
        // value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        />
    );
};

export default TextField;