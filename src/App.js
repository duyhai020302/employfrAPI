import React, { useState } from "react";
import './App.scss';
import Header from "./components/Header";
import TableUsers from "./components/TableUsers";
import { Container } from "react-bootstrap";
import ModalAddNew from "./components/ModalAddNew";
import { ToastContainer, toast } from 'react-toastify';


function App(){
    const [chooseshow, setChooseshow]=useState(false);
    
    return (
        <>
            <div className="app-container">
                <Header />
                <Container>
                    <div className="my-3 add-new">
                        <span><b>List User</b></span>
                        <button className="btn btn-primary" onClick={()=>{setChooseshow(true)}}>Add new user</button>
                        <ModalAddNew show={chooseshow} handleClose={()=>setChooseshow(false)}/>
                    </div>
                    
                    <TableUsers/>
                </Container>
                
            </div>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    )}

export default App;