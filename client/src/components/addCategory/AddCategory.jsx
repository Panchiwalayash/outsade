import React, { useState } from 'react'
import { useContext } from 'react';
import CategoryContext from '../../context/notes/CategoryContext';

export default function AddCategory(){ 

    const context=useContext(CategoryContext)
 const { addCategory } = context;

const [category, setCategory] = useState({name:"",desc:""});

const onChange=(e)=>{
    setCategory({...category,[e.target.name]:e.target.value});
    
}
const handleClick=(e)=>{
    e.preventDefault();
    addCategory(category.name, category.desc);
    setCategory({name:"",desc:"",tag:""});
}


return( 
<div className="container my-3">
    <h2>Add a Category</h2>
    <form className="my-2">
        <div className="mb-2">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" value={category.name} name="name" aria-describedby="emailHelp" onChange={onChange} />
        </div>
        <div className="mb-2">
            <label htmlFor="desc" className="form-label">Description</label>
            <input type="text" className="form-control" id="desc" value={category.desc} name="desc" onChange={onChange} />
        </div>
        
        
        <button disabled={category.name.length<3 || category.desc.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add category</button>
    </form>
</div>
)
};