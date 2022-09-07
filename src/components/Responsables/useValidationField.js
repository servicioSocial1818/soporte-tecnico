import React, { useState } from 'react'

export const useValidationField = () => {
    const [isEmpty, setIsEmpty] = useState(false);
    const [isBorderRed, setIsBorderRed] = useState(false)

    const handleValidationsInputs = (e) => {
        const value = e.value;

        if (!value) {
            setIsEmpty(true);
            setIsBorderRed(true);
        } else {
            setIsEmpty(false);
            setIsBorderRed(false);
        }
    };
  
    return {
        isEmpty,
        isBorderRed,
        handleValidationsInputs,
        setIsEmpty
    };
};
