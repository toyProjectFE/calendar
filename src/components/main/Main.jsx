import React, { useState } from "react";
import { format, addMonths, subMonths } from "date-fns";
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from "date-fns";
import { isSameMonth, isSameDay, addDays } from "date-fns";
import {
  Calendar,
  Text,
  ColStart,
  TextMonth,
  IconArrow,
  Days,
  DaysCol,
  BodyRow,
  BodyRowsWarp,
  Col,
} from "./style";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router";
import { addDate } from "../../axios/api";

const RenderHeader = ({ currentMonth, prevMonth, nextMonth }) => {
  return (
    <ColStart>
      <IconArrow onClick={prevMonth}>
        <svg
          width="6"
          height="9"
          viewBox="0 0 6 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.000152588"
            y="4.24268"
            width="2"
            height="6"
            transform="rotate(-45 0.000152588 4.24268)"
            fill="#5F6368"
          />
          <rect
            x="1.41422"
            y="5.65686"
            width="2"
            height="6"
            transform="rotate(-135 1.41422 5.65686)"
            fill="#5F6368"
          />
        </svg>
      </IconArrow>
      <IconArrow onClick={nextMonth}>
        <svg
          width="6"
          height="9"
          viewBox="0 0 6 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="5.99985"
            y="4.75732"
            width="2"
            height="6"
            transform="rotate(135 5.99985 4.75732)"
            fill="#5F6368"
          />
          <rect
            x="4.58578"
            y="3.34314"
            width="2"
            height="6"
            transform="rotate(45 4.58578 3.34314)"
            fill="#5F6368"
          />
        </svg>
      </IconArrow>
      <Text>
        {format(currentMonth, "yyyy")}년
        <TextMonth>{format(currentMonth, "M")}월</TextMonth>
      </Text>
    </ColStart>
  );
};

const RenderDays = () => {
  const days = [];
  const date = ["Sun", "Mon", "Thu", "Wed", "Thur", "Fri", "Sat"];

  for (let i = 0; i < 7; i++) {
    days.push(<DaysCol key={i}>{date[i]}</DaysCol>);
  }

  return <Days>{days}</Days>;
};

const RenderCells = ({ currentMonth, selectedDate }) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";

  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutation = useMutation(addDate, {
    onSuccess: () => {
      queryClient.invalidateQueries("schedules");
    },
  });
  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");
      const cloneDay = day;
      days.push(
        <Col
          className={`col cell ${
            !isSameMonth(day, monthStart)
              ? "disabled"
              : isSameDay(day, selectedDate)
              ? "selected"
              : format(currentMonth, "M") !== format(day, "M")
              ? "not-valid"
              : "valid"
          }`}
          key={day}
          onClick={() => {
            let currentDayID = String(Date.parse(cloneDay));
            const newDate = {
              date: currentDayID,
            };
            mutation.mutate(newDate);
            navigate(`/main/${currentDayID}`);

            return console.log(Date.parse(cloneDay));
          }}
        >
          <span
            className={
              format(currentMonth, "M") !== format(day, "M")
                ? "text not-valid"
                : ""
            }
          >
            {formattedDate}
          </span>
        </Col>,
      );
      day = addDays(day, 1);
    }
    rows.push(<BodyRow key={day}>{days}</BodyRow>);
    days = [];
  }
  return <BodyRowsWarp>{rows}</BodyRowsWarp>;
};

const Main = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  const onDateClick = (day) => {
    setSelectedDate(day);
  };
  const consolDate = (day) => {
    console.log(setSelectedDate(day));
  };

  // const { isLoading, isError, data } = useQuery("schedules", getSchedules);

  return (
    <>
      <Calendar>
        <RenderHeader
          currentMonth={currentMonth}
          prevMonth={prevMonth}
          nextMonth={nextMonth}
        />
        <RenderDays />
        <RenderCells
          currentMonth={currentMonth}
          selectedDate={selectedDate}
          onDateClick={onDateClick}
          onClick={consolDate}
        />
      </Calendar>
      <div></div>
    </>
  );
};

export default Main;
