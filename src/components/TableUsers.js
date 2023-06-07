
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { fetchAllUser } from '../service/UserService';
import ReactPaginate from 'react-paginate';



const TableUsers = () => {
  const [listusers, setListusers]=useState([]);
  const [totalUser, setTotalUser]=useState(0);
  const [totalPage, setTotalPage]=useState(0);

  useEffect(()=>{
    getUsers(1);
  },[]);


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