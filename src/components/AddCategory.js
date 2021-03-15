import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputValue = (e) =>{
        const value = e.target.value;
        setInputValue(value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        setCategories( categories => [inputValue,...categories]);
        setInputValue('');
    }
    return (
        <form onSubmit = {handleSubmit}>
            <input 
                type = "text"
                value = {inputValue}
                onChange = {handleInputValue}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};
