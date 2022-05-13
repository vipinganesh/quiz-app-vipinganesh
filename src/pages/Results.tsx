import React, {useContext} from "react";
import {AppContext} from "../App";
import QuestionCard from "../components/QuestionCard";
import PieChart from "../components/PieChart";

const Results = () => 
{
  const [appData] = useContext(AppContext);


  return (
    <div>
      <h1>Results:</h1>
      <h3>Entered Values:-</h3>
      {Object.entries(appData.answers).map(([currentIndex, answer]: any) => (
        <p key={currentIndex}>{answer.value}</p>
       ))}
        <h4>Correct answers:-</h4>
         <p>1. State & Props </p>
         <p>2. String, Boolean</p>
         <p>3. componentDidMount</p>
         <p>4. Yes</p>
         <p>5. react-router-dom</p>
     </div>
  );
};
export default Results;
