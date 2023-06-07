
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { fetchAllUser } from '../service/UserService';
import ReactPaginate from 'react-paginate';
import ModalAddNew from './ModalAddNew';


const TableUsers = () => {
  const [listusers, setListusers]=useState([]);
  const [totalUser, setTotalUser]=useState(0);
  const [totalPage, setTotalPage]=useState(0);

  const [chooseshow, setChooseshow]=useState(false);


  useEffect(()=>{
    getUsers(1);
  },[]);
  const handleUpdate=(user)=>{
    setListusers([user,...listusers]);
  }

  const getUsers =async (page)=>{
    let response=await fetchAllUser(page);

    if(response&&response.data){
      // console.log(response);
      setListusers(response.data);
      setTotalUser(response.total);
      setTotalPage(response.total_pages);
    }
  }


  const handlePageClick = (event)=>{
    // console.log("event library:", event );
    getUsers(+event.selected+1);
    //+ use to change event.selected if it is String type, bcus we not know what type it is
  }


  return (
    <>

      <div className="my-3 add-new">
        <span><b>List User</b></span>
        <button className="btn btn-primary" onClick={()=>{setChooseshow(true)}}>Add new user</button>
        <ModalAddNew show={chooseshow} handleClose={()=>setChooseshow(false)} handleUpdate={handleUpdate}/>
      </div>



      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
        {listusers.map((user,index)=>{
          return (
              <tr key={`user-${index}`}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
              </tr>
            
          )
        })}
        </tbody>
      </Table>

      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={totalPage}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />


      


    </>
  )
}

export default TableUsers