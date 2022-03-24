import React from "react";
import {useHistory, useParams} from "react-router-dom"
import { useState } from "react";

const Review = (props) => {
   
    const history = useHistory();
    const params = useParams();

    const [clicked, setClicked] = useState([false, false, false, false, false]);
  
    const handleStarClick = (e, index) => {
        e.preventDefault();
        let clickStates = [...clicked];
        for (let i = 0; i < 5; i++) {
          if (i <= index) clickStates[i] = true;
              else clickStates[i] = false;
    }

    setClicked(clickStates);
  };

    return <div className="Box"> 
                <h3 className="DayName"><span id="raitingday">{params.what_day}</span> 평점 남기기</h3>
                    <div className="DayGroup">
                            <button onClick={(e) => handleStarClick(e, 0)}
                             className={clicked[0] ? "clickedstar" : "Circle"}></button>
                            <button onClick={(e) => handleStarClick(e, 1)}
                             className={clicked[1] ? "clickedstar" : "Circle"}></button>
                            <button onClick={(e) => handleStarClick(e, 2)}
                             className={clicked[2] ? "clickedstar" : "Circle"}></button>
                            <button onClick={(e) => handleStarClick(e, 3)}
                             className={clicked[3] ? "clickedstar" : "Circle"}></button>
                            <button onClick={(e) => handleStarClick(e, 4)}
                             className={clicked[4] ? "clickedstar" : "Circle"}></button>
                             
            </div>
    <button className="Btn" onClick={() => {
        history.goBack();
    }}>평점 남기기</button>
    </div>;
};

export default Review;