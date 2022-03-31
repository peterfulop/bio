import { Box, Rating, Typography } from "@mui/material";
import { useState } from "react";
import { styled } from "@mui/material/styles";

import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

export function CircleRating(props: {
  rate: number;
  label: string;
  level: string;
}) {
  const [value, setValue] = useState<number | undefined>(props.rate);

  const StyledRating = styled(Rating)({
    color: "cadetblue",
  });

  return (
    <Box
      sx={{
        "& > legend": { mb: 1 },
      }}
    >
      <Typography component="legend">{props.label.toUpperCase()}</Typography>
      <StyledRating
        name="customized-color"
        readOnly
        defaultValue={value}
        precision={1}
        icon={<CircleIcon fontSize="inherit" />}
        emptyIcon={<CircleOutlinedIcon fontSize="inherit" htmlColor="white" />}
      />
    </Box>
  );
}
