import React from 'react'
import {Button, ButtonProps, styled} from "@mui/material";
import {IAppButton} from "@/components/common/AppButton/_types/IAppButton";

const ColorButton = styled(Button)<ButtonProps>(({theme}) => ({
    width: '90%',
    display: 'flex',
    insetInline: 0,
    margin: '1rem auto',
    padding:'0.5rem',
    borderRadius:'1rem',
    position: 'fixed',
    bottom: 0,
    color: 'white',
    backgroundColor: '#ff1744',
    '&:hover': {
        backgroundColor: '#ff1744'
    }
}));
const AppButton :React.FC<IAppButton>= ({text, onClick, disabled}) => {
    return (
        <ColorButton onClick={onClick}>
            {text}
        </ColorButton>
    )
}

export default AppButton
