import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Calendar } from "../components/content/Calendar";
import { List } from "../components/layout/List";
import { ListItem } from "../components/layout/ListItem";
import { TodoCard } from "../components/content/TodoCard";
import { Row } from "../components/layout/Row";
import { Button } from "../components/buttons/Button";

// Helpers
import { setDate } from "../helpersFunctions/helpers";
import { makeDumbData } from "../helpersFunctions/helpers";

// Assets
import { HiOutlineLightBulb } from "react-icons/hi";

const StyledDashboard = styled.div`
  width: 475px;
  overflow: hidden;
`;

export const Dashboard = () => {
  const [data, setData] = useState(null);
  // check is name of temp variable, latter I'm going to change it to something who will fitt better in here
  const [check2, setCheck2] = useState(null);

  useEffect(() => {
    const words = [
      "Reading",
      "Doing",
      "Clean",
      "Buy",
      "Sell",
      "Ride",
      "Random activity",
      "Exercises in gym",
      "Playing guitar",
      "Playing piano",
      "Driving",
      "Exercises",
      "Repetition",
    ];
    setData(makeDumbData(words, setDate));
  }, []);

  // find todo by id and change radio input value (checked or not)
  const handleClick = (id) => {
    const findById = data.filter((item) => {
      if (item.id === id) {
        item.important = !item.important;
      }
      return item;
    });
    if (!findById[0]) return;
    setData([...findById]);
  };

  // function to handle date change when day on callendar row is clicked
  const handleDateChange = (date) => {
    setCheck2(date);
    console.log(date);
  };

  // get current date from calendar component, because it's a children of dashboard component I need a function to get that data
  const getCurrentDate = (date) => {
    console.log(date);
    return setCheck2(date);
  };

  return (
    <StyledDashboard>
      <Calendar
        handleDateChange={handleDateChange}
        getCurrentDate={getCurrentDate}
      />
      <List background column>
        {data === null && check2 === null ? (
          <p>Yup</p>
        ) : (
          // filter data and check if todo time stamp is the same as current date, then map that array and render data to the ui
          // it could be better to have a extra statment where arr is empty and show a alert
          data
            .filter(
              (oneItem) =>
                oneItem.timeStamp.toString().slice(0, 15) ===
                check2.slice(0, 15)
            )
            .map((data) => (
              <ListItem key={data.timeStamp}>
                <TodoCard
                  icon={
                    <HiOutlineLightBulb
                      style={{
                        fontSize: "25px",
                        color: "yellow",
                      }}
                    />
                  }
                  description={data.description}
                  important={data.important}
                  handleClick={handleClick}
                  id={data.id}
                />
              </ListItem>
            ))
        )}
      </List>
      <Row flex={'flex'} row={'row'} flexEnd={'flex-end'}>
        <Button
          color={"#fff"}
          padding={"8px 25px"}
          borderRadius={"10px"}
          background={"#6AC4C4"}
          name={"ToDo"}
          clickHandler={() => console.log("add todo")}
        />
      </Row>
    </StyledDashboard>
  );
};
