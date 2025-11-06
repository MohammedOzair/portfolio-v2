import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

// Your radar data
const radarData = [
  { subject: "PLO1", A: 1.0, name: "Engineering Knowledge" },
  { subject: "PLO2", A: 1.0, name: "Problem Analysis" },
  { subject: "PLO3", A: 1.0, name: "Design Innovative Solutions" },
  { subject: "PLO4", A: 1.0, name: "Investigation" },
  { subject: "PLO5", A: 1.0, name: "Modern Tool Usage" },
  { subject: "PLO6", A: 1.0, name: "The Engineer and Society" },
  { subject: "PLO7", A: 1.0, name: "Environment and Sustainability" },
  { subject: "PLO8", A: 1.0, name: "Ethics and Professionalism" },
  { subject: "PLO9", A: 1.0, name: "Individual and Team Work" },
  { subject: "PLO10", A: 1.0, name: "Communication" },
  { subject: "PLO11", A: 0.67, name: "Project Management and Finance" },
  { subject: "PLO12", A: 1.0, name: "Lifelong Learning" },
];

// Custom Tooltip Box
const CustomRadarTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div
        style={{
          background: "rgba(0, 0, 0, 0.6)",
          color: "#fff",
          padding: "10px 12px",
          borderRadius: "8px",
          fontSize: "14px",
          lineHeight: "1.4",
          pointerEvents: "none",
        }}
      >
        <strong>{data.subject}</strong>
        <br />
        {data.name}
        <br />
        Grade: {data.A}/1
      </div>
    );
  }
  return null;
};

// Main Component
export const RadarChartComponent: React.FC = () => {
  return (
    <div style={{ width: "100%", height: 450 }}>
      <ResponsiveContainer>
        {/* @ts-ignore */}
        <RadarChart data={radarData}>
          <PolarGrid stroke="#444" />
          <PolarAngleAxis
            dataKey="subject"
            stroke="#ccc"
            tick={(props: any) => {
              const { payload, x, y, textAnchor } = props;
              return (
                <text
                  x={x}
                  y={y}
                  textAnchor={textAnchor}
                  fill="#fff"
                  fontSize={14}
                  fontWeight="bold"
                  dy={8}
                  dx={0}
                >
                  {payload.value}
                </text>
              );
            }}
          />
          <PolarRadiusAxis angle={30} domain={[0, 1]} />
          <Radar
            name="Skill"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
          <Tooltip content={<CustomRadarTooltip />} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};