import React, {useState, useEffect}from 'react';
import './history.scss';
import Exerciselist from '../components/exerciselist';
// const History = () =>{

//     const [exerciselist, setExerciseList] = useState([]);
//     const [dates , setDates] = useState([]);
  
//     useEffect(() => {
//         fetch('/api')
//         .then(results => results.json())
//       . then(data => {
//         //   const what = data.slice(0,1).map( (e)=> e.exerciseList);
//           // const what = data[0].exerciseList;
//           // const what1 = data[1].exerciseList;
//             const workoutlist = data.map(e=> e.exerciseList);
//             const dates = data.map(e=> e.createdAt);
//             console.log(dates);
//             setDates([...dates, ...dates]);
//             setExerciseList([...exerciselist, ...workoutlist]);
//       });
//   }, []); 

//   return (
//     <div className="history">
//       <h1>History</h1>
//        {/* <Exerciselist exerciselist = {[{move: "push up", sets: 3, reps: 4}]}/>
//       <Exerciselist exerciselist =  {[{_id: "60933a6419622228727fd63d", move: "pull-up", sets: 10, reps: 12}, {_id: "60933a6419622228727fd63e", move: "chin-up", sets: 12, reps: 11}]}/> */}
//       {/* <Exerciselist exerciselist =  {[...exerciselist[0]]}/>  */}
    
//     {
//         exerciselist.slice(0).reverse().map( (table , i) =>(
//           <div>
//             <h1>{dates[i]}</h1>
//             <Exerciselist exerciselist = {table}/>
//           </div>
//         ))
//     }

//     </div>
//   );
  
    
// }
const History = () =>{

  const [exerciselist, setExerciseList] = useState([]);

  useEffect(() => {
      fetch('/api')
        .then(results => results.json())
          .then(data => {
            let date = data[0].createdAt;
            console.log(date);

            setExerciseList([...exerciselist, ...data]);
          });
  }, []); 

return (
  <div className="history">
    <h1>History</h1>  
    {
      exerciselist.slice(0).reverse().map( (table) =>(
        <div>
          <h2>{new Date(table.createdAt).toString().slice(0,15)}</h2>
          <Exerciselist exerciselist = {table.exerciseList}/>
        </div>
      ))
  }

  </div>
);

  
}
export default History;