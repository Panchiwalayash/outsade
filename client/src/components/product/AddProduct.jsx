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
    <div>
        <div>Add Product</div>
        <div className='Addproduct'>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="pTitle" className="form-label">name</label>
                                    <input type="text" className="form-control" id="pTitle" name="pTitle" aria-describedby="emailHelp" value={product.pTitle} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="pdesc" className="form-label">pdesc</label>
                                    <input type="text" className="form-control" id="pdesc" name="pdesc" value={product.pdesc} onChange={onChange} />
                                </div>
                                
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button onClick={handleClick} type="button" className="btn btn-primary">Add It</button>
                        </div>
                    </div>
  )
}
