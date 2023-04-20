import { useState } from "react";

const AddCategories = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChanges = (event) =>{
       setInputValue(event.target.value)
    }

    const onSubmit = (event)=>{

        event.preventDefault();
        
        if (inputValue.trim().length <= 1) return;

        setInputValue('')
        onNewCategory(inputValue.trim())
   }

    return (

            <form onSubmit={onSubmit}>
            <input className='category'
                type='text' 
                placeholder='Nueva categoria'
                value={inputValue}
                onChange= { onInputChanges}>

            </input>
            </form>
    );
}

export default AddCategories;
 
