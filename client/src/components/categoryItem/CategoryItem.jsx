import React from 'react'
import { useContext } from 'react'
import CategoryContext from '../../context/notes/CategoryContext'

export default function CategoryItem({item,updateCategory}) {
  
  const {deleteCategory}=useContext(CategoryContext)
  
  return (
    <div className="col-md-6" style={{marginBottom:"20px"}}>
    <div className="card my-6">
        <div className="card-body">
            <div className="d-flex align-item-center justify-content-center "><h5 className="card-title">{item.name}
             </h5>
                </div>

            <p className="card-text">{item.desc}</p>
            <div>
              <button style={{marginRight:"15px",padding:"10px"}} onClick={()=>deleteCategory(item._id)}>Delete</button>
              <button style={{padding:"10px"}}
              onClick={()=>updateCategory(item)}>Edit</button>
            </div>
            
        </div>
        </div>

    </div>
    

  )
}
