import React from "react";
import { Row } from 'react-bootstrap';
import ReservationItem from '../../components/ReservationItem';

const ReservationList = (props) => {
  // console.log('ReservationList', {...props})
  return (
    <Row className={props.klass}>
      <h2>{props.title}</h2>
      { 
        props.reservations && (
          props.reservations.map((r) => ( // iterate over passed in reservations
            <ReservationItem 
              key={r._id}
              {...r } // spread reservation props
            />
          ))
        )
      }
    </Row>
  );
};

export default ReservationList;