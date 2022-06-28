import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import CategoryContext from '../../context/notes/CategoryContext'
import AddProduct from './AddProduct'
import ProductItem from './ProductItem'
import './product.css'

export default function Product({ item }) {
    const { products, getProduct, editProduct } = useContext(CategoryContext)
    useEffect(() => {
        getProduct(item._id)
    }, [item._id])

    const [product, setProduct] = useState({ title: "", desc: "" });
    const ref = useRef(null);
    const updateProduct = (currentProduct) => {
        ref.current.click();
        setProduct(
            { id: currentProduct._id, ename: currentProduct.name, edesc: currentProduct.desc });
    }
    const refClose = useRef(null);



    const onChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });

    }
    const handleClick = (e) => {
        e.preventDefault();
        refClose.current.click();
        editProduct(product.id, product.ename, product.edesc, item._id)

    }
    return (
        <div className='product-container'>
            <AddProduct item={item} />

            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit product</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">name</label>
                                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={product.title} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="desc" className="form-label">desc</label>
                                    <input type="text" className="form-control" id="desc" name="desc" value={product.desc} onChange={onChange} />
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={handleClick} disabled={product.title.length < 3 || product.desc.length < 5} type="button" className="btn btn-primary">Add It</button>
                        </div>
                    </div>
                </div>
            </div>



            <div className="row" style={{ padding: "15px", margin: "20px" }}>
                {products.map(data => (
                    <>
                        <ProductItem data={data} key={data._id} updateProduct={updateProduct} />
                    </>
                ))}
            </div>
        </div>
    )
}
