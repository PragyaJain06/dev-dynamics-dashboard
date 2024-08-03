import React from "react";
import { Card, CardActions, CardContent, Typography } from "@mui/material";

export default function CardComponent({ label, color, data, dayWiseDatas }) {
  const gradientStyle = {
    background: `linear-gradient(45deg, ${color} 30%, #ff8e53 90%)`,
  };
  return (
    <div style={{}}>
      <Card
        sx={{
          fontSize: "18px",
          textTransform: "italic",
          width: "10rem",
          height: "10rem",
          ...gradientStyle,
          padding: "2px",
          margin: "5px",
          border: "3px solid #D3D3D3",
          transition:
            "transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            border: "3px solid #4CAF50",
            cursor: "pointer",
          },
        }}
      >
        <CardContent>
          <Typography variant="p">{label}</Typography>
          <Typography
            style={{
              marginBottom: 12,
            }}
            color="textSecondary"
          >
            {data &&
              data?.map((item) => {
                if (item?.name === label) {
                  return <h2 key={item.value}>{item.value}</h2>;
                }
              })}
            {dayWiseDatas &&
              dayWiseDatas?.map((item) => {
                if (item?.label === label) {
                  return <h2 key={item.label}>{item.count}</h2>;
                }
              })}
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </div>
  );
}
