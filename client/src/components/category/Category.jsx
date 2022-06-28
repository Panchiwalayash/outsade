import React, { Fragment, useRef, useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import CategoryContext from '../../context/notes/CategoryContext'
import AddCategory from '../addCategory/AddCategory'
import CategoryItem from '../categoryItem/CategoryItem'
import Product from '../product/Product'

export default function Category() {
    const { categorys, getCategory, editCategory} = useContext(CategoryContext)
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem('user')) {

            getCategory()
        }
        else {
            navigate("/login")
        }
    }, [])

    const [category, setCategory] = useState({ ename: "", edesc: "" });
    const ref = useRef(null);
    const updateCategory = (currentcategory) => {
        ref.current.click();
        setCategory(
            { id: currentcategory._id, ename: currentcategory.name, edesc: currentcategory.desc });
    }
    const refClose = useRef(null);



    const onChange = (e) => {
        setCategory({ ...category, [e.target.name]: e.target.value });

    }
    const handleClick = (e) => {
        e.preventDefault();
        refClose.current.click();
        editCategory(category.id, category.ename, category.edesc)

    }
    return (
        <div>
            <AddCategory />
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit category</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="ename" className="form-label">name</label>
                                    <input type="text" className="form-control" id="ename" name="ename" aria-describedby="emailHelp" value={category.ename} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edesc" className="form-label">desc</label>
                                    <input type="text" className="form-control" id="edesc" name="edesc" value={category.edesc} onChange={onChange} />
                                </div>
                                
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={handleClick} disabled={category.ename.length < 3 || category.edesc.length < 5} type="button" className="btn btn-primary">Update category</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <h2>your Categories</h2>
                <div className="container font-weight-bold">
                    {(categorys.length === 0) && `There is no category, so plz add it to view`}
                </div>
                <div className="row" style={{padding:"15px",margin:"20px"}}>
                    {categorys.map(item => (
                       <> <CategoryItem key={item._id} item={item} updateCategory={updateCategory} />
                     
                        </>
                    ))}
                    {/* {categorys.map(item => (
                        <>
                        <h2>{item.name} product</h2>
                        <Product  item={item}/>
                        </>
                        ))} */}

                </div>
            </div>
        </div>

        
    )
};
