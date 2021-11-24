import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_JOBS } from '../../utils/queries';
import { Button, Collapse, Card, CardBody, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import './index.css'
import Auth from '../../utils/auth';

function CustomerDashboard () {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [modal, setModal] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggle1 = () => setIsOpen1(!isOpen1);

  const handleBlur = () => setIsOpen(false);
  const handleBlur1 = () => setIsOpen1(false);

  const modalToggle = () => setModal(!modal);

  const Reservation = () => {
    window.location.assign('/reservation');
  }
  const { data, loading } =  useQuery(QUERY_JOBS);

  const jobsMe = data?.jobs.customer._id || []
  const me = Auth.getProfile()
  
  return (
  <main>
    <div className="add-reserve">
      <Button block size="lg" className="add-btn" onClick={Reservation}>Add Your Reservation!</Button>
    </div>
  <section className="reserve-list">
    <div className="customer-list">
      <h2>Reservation List</h2>
      {jobs && jobs.map(job => (
      <div key={job._id}>
        <Button onClick={toggle}
        onBlur={handleBlur}
        className="btn-reservation-list">
          <p>{job.hotel[0].name}/{job.checkIn}/...Click for more</p>
        </Button>
        <Collapse isOpen={isOpen}>
          <Card className="customer-card">
            <CardBody>
              <p>{job.package[0].title} , {job.package[0].description}.  ${job.package[0].cost}</p>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    ))}
      
    </div>
    <div className="customer-list">
      <h2>Pending Check-ins/Completed</h2>
      <div>
        <Button onClick={toggle1}
        onBlur={handleBlur1}
        className="btn-pending-list">
          This is where the basic information of the reservation goes
        </Button>
        <Collapse isOpen={isOpen1}>
          <Card className="customer-card">
            <CardBody>
              <p>Expended it shows the checker info that accepted the card</p>
            </CardBody>
          </Card>
        </Collapse>
      </div>
      <div className="completed-area">
        <Button className="completed-modal" onClick={modalToggle}>
          Your completed reservation for review!
        </Button>
        <Modal isOpen={modal}>
          <ModalHeader toggle={modalToggle}>
            The Reservation
          </ModalHeader>
          <ModalBody>
            something about it being completed
          </ModalBody>
          <ModalFooter>
            <Button onClick={function noRefCheck(){}}>Leave a review</Button>
            {' '}
            <Button onClick={function noRefCheck(){}}>Clear Res</Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  </section>
  </main>
  )
}
export default CustomerDashboard;