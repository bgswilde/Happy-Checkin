import React, { useState } from 'react';
import { Button, Collapse, Card, CardBody } from 'reactstrap';
import './index.css'

function CustomerDashboard () {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggle1 = () => setIsOpen1(!isOpen1);

  const handleBlur = () => setIsOpen(false);
  const handleBlur1 = () => setIsOpen1(false);

  return (
  <main>
    <div className="add-reserve">
      <Button block size="lg" className="add-btn">Add Your Reservation! <span>➕</span></Button>
    </div>
  <section className="reserve-list">
    <div className="customer-list">
      <h2>Reservation List</h2>
      <div>
        <Button onClick={toggle}
        onBlur={handleBlur}
        className="btn-reservation-list">
          This is where the basic information of the reservation goes
        </Button>
        <Collapse isOpen={isOpen}>
          <Card>
            <CardBody>
              Expended it shows more detailed information of the reservation
            </CardBody>
          </Card>
        </Collapse>
      </div>
    </div>
    <div className="customer-list">
      <h2>Pending Check-ins</h2>
      <div>
        <Button onClick={toggle1}
        onBlur={handleBlur1}
        className="btn-reservation-list">
          This is where the basic information of the reservation goes
        </Button>
        <Collapse isOpen={isOpen1}>
          <Card>
            <CardBody>
              Expended it shows more detailed information of the reservation
            </CardBody>
          </Card>
        </Collapse>
      </div>
    </div>
  </section>
  </main>
  )
}
export default CustomerDashboard;