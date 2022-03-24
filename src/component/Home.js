import React, { useState } from "react";
import {Route, Link, useHistory} from "react-router-dom"
import App from "../App.css";

const Home = (props) => {
 
    const ranNum = Math.floor(Math.random() * 5) + 1;
    const ranNum1 = Math.floor(Math.random() * 5) + 1;
    const ranNum2 = Math.floor(Math.random() * 5) + 1;
    const ranNum3 = Math.floor(Math.random() * 5) + 1;
    const ranNum4 = Math.floor(Math.random() * 5) + 1;
    const ranNum5 = Math.floor(Math.random() * 5) + 1;
    const ranNum6 = Math.floor(Math.random() * 5) + 1;

    const history = useHistory();

    let what_days =['월', '화', '수', '목', '금', '토', '일'];
    

    return <div className="Box"> 
            <h2 className="Title">내 일주일은?</h2>
                <div className="DayGroup">
                    <div className="Days">{what_days[0]}</div>
                    <button className={0 > ranNum ? "Circle" : "clickedstar"}></button>
                    <button className={1 >= ranNum ? "Circle" : "clickedstar"}></button>
                    <button className={2 >= ranNum ? "Circle" : "clickedstar"}></button>
                    <button className={3 >= ranNum ? "Circle" : "clickedstar"}></button>
                    <button className={4 >= ranNum ? "Circle" : "clickedstar"}></button>
                    <div onClick={() => {
                        history.push(`/review/${what_days[0]}요일`)
                    }}className="Triangle"></div>
                </div>
                <div className="DayGroup">
                    <div className="Days">{what_days[1]}</div>
                    <button className={0 > ranNum1 ? "Circle" : "clickedstar"}></button>
                    <button className={1 >= ranNum1 ? "Circle" : "clickedstar"}></button>
                    <button className={2 >= ranNum1 ? "Circle" : "clickedstar"}></button>
                    <button className={3 >= ranNum1 ? "Circle" : "clickedstar"}></button>
                    <button className={4 >= ranNum1 ? "Circle" : "clickedstar"}></button>
                    <div onClick={() => {
                        history.push(`/review/${what_days[1]}요일`)
                    }}className="Triangle"></div>
                </div>
                <div className="DayGroup">
                    <div className="Days">{what_days[2]}</div>
                    <button className={0 > ranNum2 ? "Circle" : "clickedstar"}></button>
                    <button className={1 >= ranNum2 ? "Circle" : "clickedstar"}></button>
                    <button className={2 >= ranNum2 ? "Circle" : "clickedstar"}></button>
                    <button className={3 >= ranNum2 ? "Circle" : "clickedstar"}></button>
                    <button className={4 >= ranNum2 ? "Circle" : "clickedstar"}></button>
                    <div onClick={() => {
                        history.push(`/review/${what_days[2]}요일`)
                    }}className="Triangle"></div>
                </div>
                <div className="DayGroup">
                    <div className="Days">{what_days[3]}</div>
                    <button className={0 > ranNum3 ? "Circle" : "clickedstar"}></button>
                    <button className={1 >= ranNum3 ? "Circle" : "clickedstar"}></button>
                    <button className={2 >= ranNum3 ? "Circle" : "clickedstar"}></button>
                    <button className={3 >= ranNum3 ? "Circle" : "clickedstar"}></button>
                    <button className={4 >= ranNum3 ? "Circle" : "clickedstar"}></button>
                    <div onClick={() => {
                        history.push(`/review/${what_days[3]}요일`)
                    }}className="Triangle"></div>
                </div>
                <div className="DayGroup">
                    <div className="Days">{what_days[4]}</div>
                    <button className={0 > ranNum4 ? "Circle" : "clickedstar"}></button>
                    <button className={1 >= ranNum4 ? "Circle" : "clickedstar"}></button>
                    <button className={2 >= ranNum4 ? "Circle" : "clickedstar"}></button>
                    <button className={3 >= ranNum4 ? "Circle" : "clickedstar"}></button>
                    <button className={4 >= ranNum4 ? "Circle" : "clickedstar"}></button>
                    <div onClick={() => {
                        history.push(`/review/${what_days[4]}요일`)
                    }}className="Triangle"></div>
                </div>
                <div className="DayGroup">
                    <div className="Days">{what_days[5]}</div>
                    <button className={0 > ranNum5 ? "Circle" : "clickedstar"}></button>
                    <button className={1 >= ranNum5 ? "Circle" : "clickedstar"}></button>
                    <button className={2 >= ranNum5 ? "Circle" : "clickedstar"}></button>
                    <button className={3 >= ranNum5 ? "Circle" : "clickedstar"}></button>
                    <button className={4 >= ranNum5 ? "Circle" : "clickedstar"}></button>
                    <div onClick={() => {
                        history.push(`/review/${what_days[5]}요일`)
                    }}className="Triangle"></div>
                </div>
                <div className="DayGroup">
                    <div className="Days">{what_days[6]}</div>
                    <button className={0 > ranNum6 ? "Circle" : "clickedstar"}></button>
                    <button className={1 >= ranNum6 ? "Circle" : "clickedstar"}></button>
                    <button className={2 >= ranNum6 ? "Circle" : "clickedstar"}></button>
                    <button className={3 >= ranNum6 ? "Circle" : "clickedstar"}></button>
                    <button className={4 >= ranNum6 ? "Circle" : "clickedstar"}></button>
                    <div onClick={() => {
                        history.push(`/review/${what_days[6]}요일`)
                    }}className="Triangle"></div>
                </div>
           </div>

};

export default Home;