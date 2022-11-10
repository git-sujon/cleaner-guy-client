import React from 'react';
import { useEffect } from 'react';
const UseTitle = (title) => {
    useEffect(()=>{
        document.title= `${title}- CleanerGuy`
    }, [title])
};
export default UseTitle;