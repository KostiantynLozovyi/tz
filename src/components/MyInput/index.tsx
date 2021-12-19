import { TextField } from "@mui/material";
import { ChangeEvent } from "react";

import "./style.scss"

interface IProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value : string;
}

export default function MyInput({ handleChange, value }: IProps) {
  return (
    <>
      <TextField
        value={value}
        id="filled-basic"
        label="Filter"
        variant="standard"
        onChange={handleChange}
        sx={{mb: 5}}
      />
    </>
  );
}
