import React, { useContext } from 'react'
import CategoryContext from '../../context/notes/CategoryContext'

export default function ProductItem({data,updateProduct}) {
  const {deleteProduct}=useContext(CategoryContext)

  return (
    <div className="col-md-6" style={{marginBottom:"20px"}}>
    <div className="card my-6">
        <div className="card-body">
            <div className="d-flex align-item-center justify-content-center "><h5 className="card-title">{data.name}
             </h5>
                </div>

            <p className="card-text">{data.desc}</p>
            <div>
              <button style={{marginRight:"15px",padding:"10px"}} onClick={()=>deleteProduct(data._id)}>Delete</button>
              <button style={{padding:"10px"}}
              onClick={()=>updateProduct(data)}>Edit</button>
            </div>
            
        </div>
        </div>

    </div>
  )
}
