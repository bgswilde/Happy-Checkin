import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import './index.css'
import {
	Container,
	Row,
	Col,
	Form,
	Button,
} from "react-bootstrap";

function ReservationPage2(props) {
	const { setHotelData, nextPage } = props;
  const options = ['Extra Towels', 'Extra Pillows', 'Down Alternative', 'Rollaway Bed (if available)', 'Ice'];

  function handleSubmit() {
    // record data from form to the state with the setHotelData prop function
    nextPage()
  }

	return (
		<Container>
			<Col lg="9" className="form-block">
				<Row>
					<h3>Tell Us How to Check You In</h3>
				</Row>
				<Row>
					<p>
						What do you need for your stay to be happy? Be sure you have the
						correct hotel information and reservation number!
					</p>
				</Row>
				<Form noValidate className="row hotel-details">
					<Form.Group controlId="hotelName" className="mb-3" >
						<Form.Label className="mb-0">Hotel Name</Form.Label>
						<Form.Control placeholder="Fancy Hotel" type="text" required />
					</Form.Group>
					<Form.Group controlId="hotelAddress1" className="mb-3">
						<Form.Label className="mb-0">Hotel Address Line 1</Form.Label>
						<Form.Control placeholder="1234 Fancy Street" type="text" required />
					</Form.Group>
					<Form.Group controlId="hotelAddress2" className="mb-3">
						<Form.Label className="mb-0">Hotel Address Line 2</Form.Label>
						<Form.Control placeholder="(not quite fancy enough for a line 2)" type="text" />
					</Form.Group>
					<Row>
						<Form.Group as={Col} md="6" controlId="hotelCity" className="mb-3">
							<Form.Label className="mb-0">Hotel City</Form.Label>
							<Form.Control type="text" placeholder="San Fancysco" required />
							<Form.Control.Feedback type="invalid">
								Please provide a valid city.
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group as={Col} md="3" controlId="hotelState" className="mb-3">
							<Form.Label className="mb-0">Hotel State</Form.Label>
							<Form.Control type="text" placeholder="Fancylvania" required />
							<Form.Control.Feedback type="invalid">
								Please provide a valid state.
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group as={Col} md="3" controlId="hotelZip" className="mb-3">
							<Form.Label className="mb-0">Hotel Zip</Form.Label>
							<Form.Control type="text" placeholder="77777" required />
							<Form.Control.Feedback type="invalid">
								Please provide a valid zip.
							</Form.Control.Feedback>
						</Form.Group>
					</Row>
          <Row className="my-3" />
          <Row>
            <Form.Group as={Col} md="6" controlId="date-time" className="mb-3">
              <Form.Label className="mb-0">Desired Checkin Date/Time</Form.Label>
              <DateTimePickerComponent id="date" placeholder="Select a date and time" required/>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="reservationNumber" className="mb-3">
					  	<Form.Label className="mb-0">Hotel Reservation #</Form.Label>
						  <Form.Control placeholder="Find this on your booking confirmation!" type="text" required/>
	          </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md="6" controlId="options" className="mb-3">
              <Form.Label className="mb-0">Checkin Options</Form.Label>
              {options.map((option) => (
                  <Form.Check 
                    type='checkbox'
                    variant='warning'
                    id={option}
                    label={option}
                  />
              ))}
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="instructions" className="mb-3">
					  	<Form.Label className="mb-0">Special Instructions</Form.Label>
						  <Form.Control as="textarea" rows="5" placeholder="We will try our best to handle your special requests!" required/>
	          </Form.Group>
          </Row>
          <Row className="justify-content-center">
            <Col sm="9" md="6" xl="4">
              <Button className="submit-btn" onClick={() => handleSubmit}>Submit Selections</Button>
            </Col>
          </Row>
				</Form>
			</Col>
		</Container>
	);
}

export default ReservationPage2;
