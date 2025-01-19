import React from "react";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

const TaskCard = ({ ele }) => {
  return (
    <div className="mt-5 w-[25%] ">
      <Card
        sx={{
          backgroundColor: ele.backgroundColor,
          color: ele.textColor,
        }}
      >
        <CardActionArea
          sx={{
            height: "100%",
            "&[data-active]": {
              backgroundColor: "#fff",
              "&:hover": {
                backgroundColor: "#fff",
              },
            },
          }}
        >
          <CardContent sx={{ height: "100%" }}>
            <Typography variant="h6" component="div">
              {ele.title}
            </Typography>
            <Typography variant="" color="text.secondary">
              {ele.count}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default TaskCard;
