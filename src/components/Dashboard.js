import React, { useEffect, useState } from "react";
import b from "../utils/sampleData.json";
import CardComponent from "./CardComponent";
import ActivityBarChart from "./BarChart";
import ActivityLineChart from "./LineChart";
import ActivityPieChart from "./PieChart";
import ActivityRadialChart from "./RadialChart";
import ActivityRadarChart from "./RadarChart";
import ActivityAreaChart from "./AreaChart";
function Dashboard() {
  const [selectValUser, setSelectValUser] = useState("All");
  const [selectValDate, setSelectValDate] = useState("");
  const [cardData, setCardData] = useState([]);
  const [dayWiseData, setDayWiseData] = useState([]);

  let arr = [];
  let total = [];
  let res = {};
  let dayWise = [];
  let totaldayWise = [];
  let resDay = {};

  function activityMap() {
    if (selectValUser !== "" && selectValUser !== "All") {
      b.data.AuthorWorklog.rows.map((item) => {
        if (!selectValDate || selectValDate === "") {
          item.totalActivity.filter((ele) => {
            if (selectValUser === item.name) {
              arr.push(ele);
              setCardData(arr);
            }
          });
          setDayWiseData([]);
        } else {
          if (item.name === selectValUser) {
            item.dayWiseActivity.filter((ele) => {
              if (ele.date === selectValDate) {
                ele.items.children.map((i) => dayWise.push(i));
              }
            });
          }
          setDayWiseData(dayWise);
          setCardData([]);
        }
      });
    } else if (selectValUser === "All") {
      if (!selectValDate || selectValDate === "") {
        b.data.AuthorWorklog.rows.map((item) => {
          item.totalActivity.map((ele) => {
            total.push(ele);
          });
        });
        total.forEach((obj) => {
          const key = obj.name;
          const value = parseInt(obj.value, 10);
          if (!res[key]) {
            res[key] = 0;
          }
          res[key] += value;
        });
        const resultArray = Object.entries(res).map(([name, value]) => ({
          name,
          value,
        }));
        setDayWiseData([]);
        setCardData(resultArray);
      } else {
        b.data.AuthorWorklog.rows.map((item) => {
          item.dayWiseActivity.filter((ele) => {
            if (selectValDate === ele.date) {
              ele.items.children.map((i) => {
                totaldayWise.push(i);
              });
            }
          });
        });
        totaldayWise.forEach((obj) => {
          const key = obj.label;
          const value = parseInt(obj.count, 10);
          if (!resDay[key]) {
            resDay[key] = 0;
          }
          resDay[key] += value;
        });

        const resultArray = Object.entries(resDay).map(([name, value]) => ({
          name,
          value,
        }));
        setCardData(resultArray);
        setDayWiseData([]);
      }
    } else {
      setCardData([]);
    }
  }
  useEffect(() => {
    // debugger;
    activityMap();
  }, [selectValUser, selectValDate]);
  const gradientStyle = {
    background: `linear-gradient(45deg, ${b.data.AuthorWorklog.activityMeta.map(
      (item) => item.fillColor
    )} 30%, #ff8e53 90%)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",
  };
  return (
    <div className="container">
      <h1 className="gradient-text">Dashboard</h1>
      <div className="dropdown">
        <div className="user-dropdown">
          <h2>Users</h2>
          <select
            value={selectValUser}
            onChange={(e) => setSelectValUser(e.target.value)}
          >
            <option value="All">All Users</option>
            {b.data.AuthorWorklog.rows.map((item) => (
              <option key={item.name}>{item.name}</option>
            ))}
          </select>
        </div>
        <div className="date-dropdown">
          <h2>Time Period</h2>
          <select
            value={selectValDate}
            onChange={(e) => setSelectValDate(e.target.value)}
          >
            <option value="">Select Date</option>
            {b.data.AuthorWorklog.rows[0].dayWiseActivity.map((item) => (
              <option key={item.date}>{item.date}</option>
            ))}
          </select>
        </div>
      </div>
      {b.data.AuthorWorklog.activityMeta.map((item) => (
        <div className="cards" style={{ display: "inline-block" }}>
          <CardComponent
            key={item.label}
            label={item.label}
            color={item.fillColor}
            data={cardData}
            dayWiseDatas={dayWiseData}
          ></CardComponent>
        </div>
      ))}
      <div
        className="charts-class"
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "2px",
          marginTop: "60px",
          marginBottom: "60px",
          //   border: "1px solid #D3D3D3",
          borderRadius: "4px",
          height: "300px",
          flexWrap: "wrap",
        }}
      >
        <ActivityBarChart data={cardData}></ActivityBarChart>
        {(selectValDate==="" && selectValUser==="All")&&(
            <ActivityPieChart data={cardData}></ActivityPieChart>
        )}
        
        <div className="radial">
          <ActivityRadialChart data={cardData}></ActivityRadialChart>
        </div>
        <ActivityLineChart
          data={dayWiseData}
          date={selectValDate}
        ></ActivityLineChart>
        <ActivityRadarChart
          data={dayWiseData}
          date={selectValDate}
        ></ActivityRadarChart>
        <ActivityAreaChart
          data={dayWiseData}
          date={selectValDate}
        ></ActivityAreaChart>
      </div>
    </div>
  );
}

export default Dashboard;
