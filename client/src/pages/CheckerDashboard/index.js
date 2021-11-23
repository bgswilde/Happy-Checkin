import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import './index.css'
import { useQuery } from '@apollo/client';
import { QUERY_JOBS } from '../../utils/queries';

function CheckerDashboard ({ reservations }) {
    const [modal1, setModal1] = useState(false);
    const modalToggle1 = () => setModal1(!modal1);

    const [modal, setModal] = useState(false);
    const modalToggle = () => setModal(!modal);

    const { loading, data } = useQuery(QUERY_JOBS);
    const jobs = data?.jobs || [];
    console.log(jobs);

    
      if (!jobs.length) {
        return <h3>No Jobs Yet</h3>;
      } 
      return (
    <section className="checker-dashboard">
      <div>
        <h1>Reservation(s) to Claim</h1>
        <div className="checker-res-claim">
        <Button className="unclaimed" onClick={modalToggle}>
          Reservation to claim
        </Button>
        <Modal isOpen={modal}>
          <ModalHeader toggle={modalToggle}>
            The Reservation
          </ModalHeader>
          <ModalBody>
            the info you need
          </ModalBody>
          <ModalFooter>
            <Button onClick={function noRefCheck(){}}>Accept</Button>
          </ModalFooter>
        </Modal>
        </div>
      </div>
      <div>
      <h1>To Be Completed</h1>
        <div className="checker-pending">
        <Button className="checker-claimed" onClick={modalToggle1}>
          Reservation Pending completion
        </Button>
        <Modal isOpen={modal1}>
          <ModalHeader toggle={modalToggle1}>
            The Reservation
          </ModalHeader>
          <ModalBody>
            Are you sure you want to let the customer know its completed
          </ModalBody>
          <ModalFooter>
            <Button onClick={function noRefCheck(){}}>Complete</Button>
          </ModalFooter>
        </Modal>
        </div>
      </div>
    </section>
    )
}

export default CheckerDashboard;