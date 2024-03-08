import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import { useState } from "react";

export default function datePicker() {
  const [value, setValue] = useState<Dayjs | null>();

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            label="Date of Birth"
            value={value}
            onChange={(newValue) => setValue(newValue)}
            sx={{
              ".MuiInputBase-root": {
                borderRadius: "30px",
                boxShadow: 2,
                mb:2,
                height:40,
                mt:1,
                mr:3,
                width:230
              },
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}
