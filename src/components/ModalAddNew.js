import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createNewUser } from '../service/UserService';
import { toast } from 'react-toastify';

const ModalAddNew = (props) => {
    const {show, handleClose}=props


    const[name, setName]=useState("");
    const[job, setJob]=useState("");

    const handleSave=async ()=>{
        const response=await createNewUser(name, job);
        if(response&&response.id){
            handleClose();
            setJob("");
            setName("");
            toast.success("Add successfully")
        }
        else{
            toast.error("Add unsuccessfully")
        }
    }
    
  return (
    <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add new user</Modal.Title>
            </Modal.Header>


            <Modal.Body>
                <form>
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        
                    </div>
                    <div className="form-group">
                        <label>Job</label>
                        <input type="text" value={job} className="form-control" onChange={(e)=>{setJob(e.target.value)}}/>
                    </div>
                </form>
            </Modal.Body>
            
            
            
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal> 

    </>
  )
}

export default ModalAddNew

