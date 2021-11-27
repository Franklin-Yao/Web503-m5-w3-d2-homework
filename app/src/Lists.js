import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import UpdateList from "./UpdateList";
import DeleteList from "./DeleteList";

function Lists(props){
    let listrows = [];
    console.log(props);
    props.alldata.forEach(element => {
        listrows.push(
            <tr key={element._id}>
                <td>{element.title}</td>
                <td>{element.author}</td>
                <td>
                    <UpdateList
                        elementId={element._id}
                        singledata = {props.singledata}
                        getList = {props.getList}
                        updateList={props.updateList}
                        handleChange = {props.handleChange}>
                    </UpdateList>
                    <DeleteList
                        elementId={element._id}
                        singledata = {props.singledata}
                        getList = {props.getList}
                        deleteList={props.deleteList}
                    >
                    </DeleteList>
                </td>
            </tr>
        )
    });
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>{listrows}</tbody>
        </table>
    )
}

export default Lists