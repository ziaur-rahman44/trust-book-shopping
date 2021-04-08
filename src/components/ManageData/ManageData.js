import React from 'react';
import './ManageData.css'

const ManageData = (props) => {
    const {name, author, _id} = props.data;
    const deleteProduct = () =>{
            fetch(`https://thawing-depths-18168.herokuapp.com/delete/${_id}`,{
                method:"DELETE"
            })
            .then(res =>res.json())
            .then(result=>{
                console.log('deleted')
            })
        
    }
   
    return (
        <div className="manage text-left pt-2">

        <table class="table">
            <tbody>
                <tr>
                <td>{name}</td>
                <td>{author}</td>
                <td><button className="btn btn-primary" onClick={()=> deleteProduct(_id)}>Delete</button></td>
                </tr>
            </tbody>
            </table>
        </div>
    );
};

export default ManageData;