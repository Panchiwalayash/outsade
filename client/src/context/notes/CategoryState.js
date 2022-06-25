import CategoryContext from "./CategoryContext";
import { useState } from "react";

const CategoryState = (props)=>{
  const host="http://localhost:5000"
  const notesInitial=[];
    const [categorys,setCategorys]=useState(notesInitial)
    const [products,setProducts]=useState(notesInitial)
    const user=JSON.parse(localStorage.getItem("user"))
    // console.log(user.name);


    const getCategory=async()=>{
         
      const res=await fetch(`${host}/api/category/fetchall/${user._id}`,{
        method:"GET",
        headers:{
          'Content-Type': 'application/json'
        }
      })
      let data=await res.json()
    setCategorys(data)
    }

    const addCategory=async(name,desc)=>{
      const userId=user._id
      const response = await fetch(`${host}/api/category`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }, 
        body: JSON.stringify({name,desc,userId})
      });
      let json= await response.json()
     console.log(json)
      
     setCategorys(categorys.concat(json)); 
    }

    const editCategory=async(id,name,desc)=>{  
    const userId=user._id
      const res=await fetch(`${host}/api/category/${id}`,{
        method:"PUT",
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name,desc,userId})
      }
      )
      let json =res.json();
      let newCategorey=JSON.parse(JSON.stringify(categorys));

      for (let index = 0; index < newCategorey.length; index++) {
        const element = newCategorey[index];
        if (element._id===id) {
          console.log("we are editing note");
          newCategorey[index].name=name;
          newCategorey[index].desc=desc;
          break;
        }
      }
      setCategorys(newCategorey)
    }

    const deleteCategory=async(id)=>{
    const userId=user._id
      const res=await fetch(`${host}/api/category/${id}`,{
        method:"DELETE",
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({userId})
      })
      const categoryIndex=categorys.filter(item=>{
        if(item._id!==id){
          return item
        }
      })
      setCategorys(categoryIndex)
    }

    //get product category wise
    const getProduct=async(id)=>{
      const res=await fetch(`${host}/api/product/${id}`,{

        method:"GET",
        headers:{
          'Content-Type': 'application/json'
        }
      }
      )
      const data=await res.json()
      // console.log(data);
      setProducts(data)
    }

    const addProduct=async(categoryId,title,desc)=>{
      const response = await fetch(`${host}/api/product`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }, 
        body: JSON.stringify({title,desc,categoryId})
      });
      let json= await response.json()
     console.log(json)
      
     setCategorys(categorys.concat(json)); 
    }

    const deleteProduct=async(id)=>{
        const res=await fetch(`${host}/api/product/${id}`,{
          method:"DELETE",
          headers:{
            'Content-Type': 'application/json'
          }
        })
        const categoryIndex=categorys.filter(item=>{
          if(item._id!==id){
            return item
          }
        })
        setCategorys(categoryIndex)
      }

      const editProduct=async(id,name,desc,categoryId)=>{
          const res=await fetch(`${host}/api/product/${id}`,{
            method:"PUT",
            headers:{
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({name,desc,categoryId})
          }
          )
          let json =res.json();
          let newCategorey=JSON.parse(JSON.stringify(categorys));
    
          for (let index = 0; index < newCategorey.length; index++) {
            const element = newCategorey[index];
            if (element._id===id) {
              console.log("we are editing note");
              newCategorey[index].name=name;
              newCategorey[index].desc=desc;
              break;
            }
          }
          setCategorys(newCategorey)
        }

    return (
        <CategoryContext.Provider value={{categorys,getCategory,addCategory,editCategory,deleteCategory,products,getProduct,addProduct,deleteProduct,editProduct}}>
            {props.children}
        </CategoryContext.Provider>
    )
}

export default CategoryState;



