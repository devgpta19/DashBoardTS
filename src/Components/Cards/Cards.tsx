import React, { useRef, WheelEvent } from "react";
import { Card, CardContent, Box } from "@mui/material";
import StatCard from "./StatCards/StatCards";
import statsData from "./StatCards/data.json"; // Import the JSON file
import "./card.scss"

// Define the allowed values for trend
type TrendType = "up" | "down" | "neutral";

// Ensure data is correctly typed
const formattedStatsData = statsData.map((item) => ({
  ...item,
  trend: ["up", "down", "neutral"].includes(item.trend) ? (item.trend as TrendType) : "neutral",
}));

const SimpleCard: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (e: WheelEvent<HTMLDivElement>) => {
    const container = scrollRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const atLeftEdge = scrollLeft === 0;
      const atRightEdge = scrollLeft + clientWidth >= scrollWidth;

      if (!atLeftEdge && !atRightEdge) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    }
  };

  return (
    <Box className="Box" ref={scrollRef} onWheel={handleScroll}>
      {formattedStatsData.map((item, index) => (
        <Card className="Card" key={index}>
          <CardContent className="CardContent">
            <StatCard {...item} />
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default SimpleCard;
