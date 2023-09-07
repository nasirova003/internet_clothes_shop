import React, {useState} from 'react';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {fetchingAdmin, removeFromAdmin} from "../../store/Reducers/BasketSlice";
import {useAppSelector} from "../../hooks/useAppSelector";
import AdminCard from "./AdminCard";

const Admin = () => {
    const {mode} = useAppSelector(state => state.darkModeSlice)
    const [title, setTitle] = useState<string>('')
    const [image, setImage] = useState<any>('')
    const [price, setPrice] = useState<string>('')
     const [empty,setEmpty] = useState(true)
    const dispatch = useAppDispatch()
    const {admin} = useAppSelector(state => state.basketSlice)

    const handleAdmin = (e: React.FormEvent) => {
         if (title && image && price !== '') {
             e.preventDefault()

             if (e.target) {
                 const newToDo = {
                     id: new Date().toISOString(),
                     title: title,
                     image: image,
                     price: price
                 }
                 dispatch(fetchingAdmin(newToDo))
                 setImage('')
                 setTitle('')
                 setPrice('')
             }
               setEmpty(true)

         } else {
              setEmpty(false)
         }

    }
    console.log('admin', title)
    return (
        <div>
            <form onSubmit={handleAdmin} style={{
                background: mode ? "gray" : "",
            }}>
                <div className="flex">
                    <div className="block1 p-5" style={{
                        background: mode ? "gray" : "white"
                    }}>
                        <div className="adminBlock">
                            <h1 className="named">Image</h1>
                            <div className="adminInput">
                                <input style={{border:empty ? '' : '2px red dashed'}} onChange={(e: any) => setImage(e.target.value)} type="" id="default-search"    value={image}
                                       className="block w-96 p-4 left-10 pl-10 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                                       placeholder="Add product image..."/>
                            </div>
                        </div>

                        <div className="adminBlock">
                            <h1 className="named">Name</h1>
                            <div className="adminInput">
                                <input style={{border:empty ? '' : '2px red dashed'}} type="search" id="default-search" value={title}
                                       onChange={(e: any) => setTitle(e.target.value)}
                                       className="block w-96 p-4 left-10 pl-10 border border-gray-300 rounded-lg bg-gray-50 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                                       placeholder="Add product name..."/>
                            </div>
                        </div>
                        <div className="adminBlock">
                            <h1 className="named">Price</h1>
                            <div className="adminInput">
                                <input style={{border:empty ? '' : '2px red dashed'}} type="search" id="default-search" value={price}
                                       onChange={(e: any) => setPrice(e.target.value)}
                                       className="block w-96 p-4 left-10 pl-10 border border-gray-300 rounded-lg bg-gray-50 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                                       placeholder="Add product name..."/>
                            </div>
                        </div>
                        <button onClick={() => dispatch(fetchingAdmin)}
                                className=" m-1 p-5 ml-96 py-2  mb-1  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Add
                        </button>
                    </div>
                </div>

            </form>


            <div className="flex flex-wrap p-14 " style={{
                background: mode ? "gray" : "white"
            }}>
                {

                    admin.map(el => (
                        <div className="adminCard">
                            <AdminCard el={el}/>
                        </div>

                    ))

                }
            </div>

        </div>
    );
};

export default Admin;