/*
   FormHandler by Will Knowles

   Library for handling React form data. This library recreates jQueries ability to support
   nested form data.

   
   Sample Component & Library Usage:
   
   import React, { useState } from 'react'
   import FormHandler from 'FormHandler.js'

   const [ formData, setFormData ] = useState({});

   const changeHandler = (e) {
     const [key, value] = FormHandler.parseInput(e.target);
     const updatedFormData = FormHandler.reduceState(formData, key, value);

     if (updatedFormData) {
       setFormData({...updatedFormData});
     }
   }
   
   const submitHandler = (e) {
     // send formData to your endpoint

     // below form submission would return formData as follows:
     //
     // formData = {
     //    wine: inputValue,
     //    beer: inputValue,
     //    pizza: {
     //      cheese: inputValue,
     //      pepperoni: inputValue,
     //      supreme: inputValue,
     //    }
     //  }
   }
   
   return (
     <form onSubmit={submitHandler}>
       <input name="wine" onChange={changeHandler}/>
       <input name="beer" onChange={changeHandler}/>
       <input name="pizza.cheese" onChange={changeHandler}/>
       <input name="pizza.pepperoni" onChange={changeHandler}/>
       <input name="pizza.supreme" onChange={changeHandler}/>
     </form>
   )
*/
class FormHandler {

    // parse event handler's event.target and return formatted data.
    // called from within form's react component
    parseInput(eventTarget) {
      let k, v;
      const { name, value } = eventTarget;

      if (name.includes('.')) {
        // input has nested data, format properly
        const [parent, child] = name.split('.');
        // object key
        k = parent;
        // nested data
        v = {[child]: value}
      } else {
        // input has standard data
        k = name;
        v = value;
      }
      
      // return input name and data as key value pair
      return [k,v];
    }

    // reduce previous state with input's name and value as key/value
    // called from within form's react component
    reduceState(state, key, value) {
      switch (typeof value) {
        case 'object':
          return this.handleStateObject(state, key, state[key], value);
        case 'string':
          return this.handleStateString(state, key, value);
        default:
          return;
      }
    }

    // called by reduceState
    handleStateObject(state, key, value, currentValue) {
      
      const testState = state;
      testState[key] = value;

      const version = this.reduceObject(value, currentValue);

      const testReduceState = {
        ...testState,
        [key]: version
      }

      return testReduceState;
    }

    // called by reduceState
    handleStateString(state, key, value) {
      const reducedState = {
        ...state,
        [key]: value
      };

      return reducedState;
    }

    // called by handleStateObject
    reduceObject(previous, current) {

      // previous is undefined or equal to current, return current object
      if ( previous === undefined || previous === current) {
        return current;

      // overlap in props, handle difference
      } else if (this.includesKeys(previous, current)) {
        return this.deleteCurrentKey(previous, current);

      // no overlap in object properties, return both spread into single object
      } else {
        return { ...previous, ...current };
      }
    }

    // called by reduceObject
    includesKeys(previous, current) {
      if (previous && current) {
        let previousIncludes = [];
        let currentIncludes = [];

        const previousKeys = Object.keys(previous);
        const currentKeys = Object.keys(current);

        previousKeys.forEach(k => {
          currentIncludes.push(currentKeys.includes(k));
        });

        currentKeys.forEach(k => {
          previousIncludes.push(previousKeys.includes(k));
        });

        if (currentIncludes.includes(true) || previousIncludes.includes(true)) {
          return true;
        } else {
          return false;
        }
      }
    }

    // called by reduceObject
    // this exists for toggling radio or checkboxes
    deleteCurrentKey(previous, current) {
      const currentKey = Object.keys(current);
      const previousKeys = Object.keys(previous);

      delete previous[currentKey[0]];
      return previous;
    }
}

export default new FormHandler();