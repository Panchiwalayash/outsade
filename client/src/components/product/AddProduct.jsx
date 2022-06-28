import React, { useRef, useState } from 'react'
import { useContext } from 'react';
import CategoryContext from '../../context/notes/CategoryContext';

export default function AddProduct({item}) {
    const categoryId=item._id
    const {addProduct}=useContext(CategoryContext)
    const [product, setProduct] = useState({ pTitle: "", pdesc: "" });
  

    const onChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }
    const handleClick = (e) => {
        e.preventDefault();
        addProduct(categoryId, product.pTitle, product.pdesc)

    }
  return (
    <div >
        <div>Add Product</div>
        <div >
                            <form>
                                <div >
                                    <label htmlFor="pTitle">name</label>
                                    <input type="text"  id="pTitle" name="pTitle"  value={product.pTitle} onChange={onChange} />
                                </div>
                                <div>
                                    <label htmlFor="pdesc">pdesc</label>
                                    <input type="text"  id="pdesc" name="pdesc" value={product.pdesc} onChange={onChange} />
                                </div>
                                
                            </form>
                        </div>
                        <div >
                            <button onClick={handleClick} type="button">Add It</button>
                        </div>
                    </div>
  )
}
