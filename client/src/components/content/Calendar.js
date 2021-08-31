import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Row } from "../layout/Row";
import { List } from "../layout/List";
import { ListItem } from "../layout/ListItem";
import { Button } from "../buttons/Button";

const StyledCalendar = styled.div`
  width: 100%;
  box-shadow: 6px 2px 23px -5px rgba(0, 0, 0, 0.35);
  margin-bottom: 35px;
`;

export const Calendar = ({ handleDateChange, getCurrentDate }) => {
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const [todaysDate, setTodaysDate] = useState(new Date());
  const [weekDaysToRender, setWeekDaysToRender] = useState(null);

  const setWeekDays = () => {
    let currentDayInWeek = todaysDate.getDay();
    let weekDays = ["S", "M", "T", "W", "T", "F", "S"];

    let tempArr = weekDays.map((day, index) => {
      let dateForTimeStamp;

      if (index < currentDayInWeek) {
        dateForTimeStamp = new Date(
          todaysDate.getFullYear(),
          todaysDate.getMonth(),
          todaysDate.getDate() - (Number(currentDayInWeek) - index)
        );
      }
      if (index === currentDayInWeek) {
        dateForTimeStamp = new Date(
          todaysDate.getFullYear(),
          todaysDate.getMonth(),
          todaysDate.getDate()
        );
      } else {
        dateForTimeStamp = new Date(
          todaysDate.getFullYear(),
          todaysDate.getMonth(),
          todaysDate.getDate() + (index - Number(currentDayInWeek))
        );
      }
      return {
        dateFull: dateForTimeStamp.toString().slice(0, 15),
        name: day,
        date: dateForTimeStamp.toString().slice(8, 11),
        current:
          Number(currentWeek.getDay()) === index &&
          Number(currentWeek.getDate() === Number(todaysDate.getDate()))
            ? true
            : false,
        handleDateChange
      };
    });
    setWeekDaysToRender(tempArr);
  };


  useEffect(() => {
    setWeekDays();
    getCurrentDate(todaysDate.toString());
    setCurrentWeek(new Date())
  }, [todaysDate]);

  const changeWeek = (param) => {
    setTodaysDate(
      new Date(
        todaysDate.getFullYear(),
        todaysDate.getMonth(),
        todaysDate.getDate() + param
      )
    );
    setWeekDays();
  };

  return (
    <StyledCalendar>
      <Row>
        <List>
          <ListItem>
            <Button clickHandler={() => changeWeek(-7)} name={"<"} />
          </ListItem>
          {weekDaysToRender === null ? (
            <p>yup</p>
          ) : (
            weekDaysToRender.map((day, index) => (
              <ListItem key={index + day.date}>
                <p
                  style={{
                    color: "#c4c4c4",
                    fontWeight: "500",
                    fontSize: "13px",
                  }}
                >
                  {day.name}
                </p>
                <p onClick={() => {day.handleDateChange(day.dateFull)}}
                  style={{
                    padding: "2px",
                    fontWeight: "bold",
                    fontSize: "15px",
                    color: day.current ? "#fff" : "#736363",
                    borderRadius: "50%",
                    border: day.current ? "1px solid red" : null,
                    background: day.current ? "#c36565" : null,
                    opacity: 1,
                    transition: "opacity 4s",
                  }}
                >
                  {day.date}
                </p>
              </ListItem>
            ))
          )}
          <ListItem>
            <Button clickHandler={() => changeWeek(+7)} name={">"} />
          </ListItem>
        </List>
      </Row>
    </StyledCalendar>
  );
};
