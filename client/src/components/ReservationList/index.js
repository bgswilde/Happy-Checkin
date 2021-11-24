import { isValidObjectId } from "mongoose";
import React from "react";
import { Row } from 'react-bootstrap';
import ReservationItem from '../../components/ReservationItem';

const ReservationList = (props) => {
  console.log('ReservationList', {
    title: props.title,
    reservations: props.reservations,
    klass: props.klass
  })

  function randomKey() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    console.log('key', uuid);
    return uuid;
  }

  return (
    <Row className={props.klass}>
      <h2>{props.title}</h2>
      {
        props.reservations.map((r) => (
            <ReservationItem 
              {...r}
            />
        ))
      }
    </Row>
  );
};

export default ReservationList;