import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

function valueLabelFormat(value: number) {
  switch (value) {
    case 1:
      return "Просмотр";
    case 2:
      return "Просмотр и редактирование";
    default:
      return "Доступ заблокирован";
  }

  return value;
}

function calculateValue(value: number) {
  return 2 ** value;
}

export default function NonLinearSlider() {
  const [value, setValue] = React.useState<number>(10);

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }
  };

  return (
    <Box>
      <Typography id="non-linear-slider" gutterBottom>
        {valueLabelFormat(calculateValue(value))}
      </Typography>
      <Box sx={{ width: 100, margin: "30px" }}>
        <Slider
          value={value}
          min={-1}
          step={1}
          max={1}
          scale={calculateValue}
          getAriaValueText={valueLabelFormat}
          valueLabelFormat={valueLabelFormat}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider"
        />
      </Box>
    </Box>
  );
}
