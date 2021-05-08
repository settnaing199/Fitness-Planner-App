import React, { useState } from "react";
import {useHistory} from "react-router-dom";
import Select from "react-select";
import './dailyworkout.scss';
import Exerciselist from '../components/exerciselist';
import {muscleTypes} from '../data/muscleTypes';
import {options} from '../data/options';


const DailyWorkout = props => {
    const [move, setMove] = useState(null);
    const [sets, setSets] = useState(0);
    const [reps, setReps] = useState(0);
    const [exerciselist, setExercise] = useState([]);    
    // console.log(muscleTypes);
    const addHandler = ()=>{
      console.log("WOKRING", muscleTypes[move])

        setExercise([
            ...exerciselist,
            {move: move.value, sets: sets, reps : reps, muscles: (muscleTypes[move.value]) ? muscleTypes[move.value] : "something" }
        ])
        setMove("");
        setSets("");
        setReps("");
    }
  
    console.log(muscleTypes);
    let history = useHistory();
    const submitHandler = ()=>{
      console.log("submitHanlder");
      fetch('/api', {
        method: 'POST',
        body: JSON.stringify(exerciselist),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      }).then(res => res.json())
        .then(data => console.log(data))
        .catch(err => err);
      history.push('/history');
    }

    
    return (
      <div className="dailyWorkout">
          <h1>Daily Workout Plan</h1>
          <div className = "table">
            <Exerciselist exerciselist = {exerciselist}/>

            <div className="inputBox">
              <div className="select">
              <Select defaultValue={move} onChange = {setMove} options = {options} />
              </div>
              {/* <input type="text" className="moveInput" value = {move} onChange={e=> {setMove(e.target.value)}}/> */}
              <input type="number" className="repsInput" value = {reps} onChange={e=> {setReps(e.target.value)}} />

              <input type="number" className="setsInput" value = {sets} onChange={e=>{setSets(e.target.value)}} />

            </div>
            <button className="addExeriseButton" onClick={addHandler}>+ ADD SET</button>

            {/* push exercise list to the database and remove the Edit, Save, and Submit button*/}
            <button className="submitButton" onClick={submitHandler}>SAVE</button>

          </div>
      </div>
    );
  };
  
  export default DailyWorkout;