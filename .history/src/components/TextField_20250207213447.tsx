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
//{..props} => trải dài all infor placeholder

// type Props = { placeholder?:string, value?:string, width?:string, height?:string, onChange?:(value:string) =>void}
const TextField = ({
    placeholder,
     value,
     width='100%', 
     height='20px', 
     onChange,
}:Props) => {
return (
    <input type="text"
    placeholder={placeholder}
    value={value}
style={{width, height}}
    onChange={(e) =>onChange && onChange(e.target.value)}
    />
)
}