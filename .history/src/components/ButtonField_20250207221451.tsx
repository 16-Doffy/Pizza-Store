import React, { ReactNode } from 'react';
import { IcSpinner } from '../icon/IcSpinner';


type Props ={
    loading?:boolean;
    children?: ReactNode;
    onClick?: () => void;
}
const ButtonField = ({
    loading,
    children,
    onClick,
}: Props) => {
    return (
        <button className="btn-main" onClick={onClick} disabled={loading}>
            {loading ? (
                <div style={{ display: 'flex', alignItems: 'center', columnGap: '.5rem' }}>
                    <IcSpinner width="32px" height="32px" />
                    {children}
                </div>
            ) : (
                children
            )}
        </button>
    );
};


export default ButtonField;
