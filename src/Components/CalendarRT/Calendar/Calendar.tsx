// import * as React from "react";
// import dayjs, { Dayjs } from "dayjs";
// import Badge from "@mui/material/Badge";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { PickersDay, PickersDayProps } from "@mui/x-date-pickers/PickersDay";
// import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
// import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";

// import data from "./data.json" assert { type: "json" }; // Importing the JSON file

// const initialValue = dayjs();

// interface ServerDayProps extends PickersDayProps<Dayjs> {
//   profitLossDays?: Record<number, "profit" | "loss">;
// }

// function ServerDay(props: ServerDayProps) {
//     const { profitLossDays = {}, day, outsideCurrentMonth, ...other } = props;

//     if (outsideCurrentMonth) {
//       return <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />;
//     }

//     const status = profitLossDays[day.date()];
//     const badgeContent =
//       status === "profit" ? "🟢" : status === "loss" ? "🔴" : undefined;

//     return (
//       <Badge key={day.toString()} overlap="circular" badgeContent={badgeContent}>
//         <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
//       </Badge>
//     );
//   }

// export default function DateCalendarServerRequest() {
//   const requestAbortController = React.useRef<AbortController | null>(null);
//   const [isLoading, setIsLoading] = React.useState(false);
//   const [profitLossDays, setProfitLossDays] = React.useState<
//     Record<number, "profit" | "loss">
//   >({});

// const fetchProfitLossDays = (date: Dayjs) => {
//     const monthKey: string = date.format("YYYY-MM");

//     if (monthKey in profitLossData) {
//       setProfitLossDays(profitLossData[monthKey]); // TypeScript now recognizes the structure
//     } else {
//       setProfitLossDays({});
//     }

//     setIsLoading(false);
//   };

//   React.useEffect(() => {
//     fetchProfitLossDays(initialValue);
//     return () => requestAbortController.current?.abort();
//   }, []);

//   const handleMonthChange = (date: Dayjs) => {
//     if (requestAbortController.current) {
//       requestAbortController.current.abort();
//     }
//     setIsLoading(true);
//     setProfitLossDays({});
//     fetchProfitLossDays(date);
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DateCalendar
//         defaultValue={initialValue}
//         loading={isLoading}
//         onMonthChange={handleMonthChange}
//         renderLoading={() => <DayCalendarSkeleton />}
//         slots={{
//           day: ServerDay,
//         }}
//         slotProps={{
//           day: {
//             profitLossDays,
//           } as ServerDayProps,
//         }}
//       />
//     </LocalizationProvider>
//   );
// }

// import * as React from "react";
// import dayjs, { Dayjs } from "dayjs";
// import Badge from "@mui/material/Badge";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { PickersDay, PickersDayProps } from "@mui/x-date-pickers/PickersDay";
// import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
// import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";

// // Define Type for Data JSON Structure
// interface ProfitLossData {
//   [month: string]: {
//     [day: number]: "profit" | "loss";
//   };
// }

// // Import JSON file with proper typing
// import data from "./data.json" assert { type: "json" };

// const initialValue = dayjs();

// interface ServerDayProps extends PickersDayProps<Dayjs> {
//   profitLossDays?: Record<number, "profit" | "loss">;
// }

// // Custom Day Component with Profit/Loss Indicators
// function ServerDay(props: ServerDayProps) {
//   const { profitLossDays = {}, day, outsideCurrentMonth, ...other } = props;

//   // Prevent extra dots outside the current month
//   if (outsideCurrentMonth) {
//     return <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />;
//   }

//   const status = profitLossDays[day.date()];
//   const badgeContent = status === "profit" ? "🟢" : status === "loss" ? "🔴" : undefined;

//   return (
//     <Badge key={day.toString()} overlap="circular" badgeContent={badgeContent}>
//       <PickersDay {...other} day={day} />
//     </Badge>
//   );
// }

// export default function DateCalendarServerRequest() {
//   const requestAbortController = React.useRef<AbortController | null>(null);
//   const [isLoading, setIsLoading] = React.useState(false);
//   const [profitLossDays, setProfitLossDays] = React.useState<Record<number, "profit" | "loss">>({});

//   // Fetch Data Based on Selected Month
//   const fetchProfitLossDays = (date: Dayjs) => {
//     const monthKey: string = date.format("YYYY-MM");

//     if (Object.prototype.hasOwnProperty.call(data, monthKey)) {
//       setProfitLossDays(data[monthKey]); // Type is now recognized
//     } else {
//       setProfitLossDays({});
//     }

//     setIsLoading(false);
//   };

//   React.useEffect(() => {
//     fetchProfitLossDays(initialValue);
//     return () => requestAbortController.current?.abort();
//   }, []);

//   const handleMonthChange = (date: Dayjs) => {
//     if (requestAbortController.current) {
//       requestAbortController.current.abort();
//     }
//     setIsLoading(true);
//     setProfitLossDays({});
//     fetchProfitLossDays(date);
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DateCalendar
//         defaultValue={initialValue}
//         loading={isLoading}
//         onMonthChange={handleMonthChange}
//         renderLoading={() => <DayCalendarSkeleton />}
//         slots={{
//           day: ServerDay,
//         }}
//         slotProps={{
//           day: {
//             profitLossDays,
//           } as ServerDayProps,
//         }}
//       />
//     </LocalizationProvider>
//   );
// }

import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import Badge from "@mui/material/Badge";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay, PickersDayProps } from "@mui/x-date-pickers/PickersDay";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";

// Import data.json with proper typing
import data from "./data.json";

const initialValue = dayjs();

// Define types explicitly
interface ProfitLossDays {
  [day: number]: "profit" | "loss";
}

interface ProfitLossData {
  [month: string]: ProfitLossDays;
}

const profitLossData: ProfitLossData = data; // Ensuring TypeScript understands the JSON structure

interface ServerDayProps extends PickersDayProps<Dayjs> {
  profitLossDays?: ProfitLossDays;
}

// Custom Day Component with Profit/Loss Indicators
function ServerDay(props: ServerDayProps) {
  const { profitLossDays = {}, day, outsideCurrentMonth, ...other } = props;

  // Prevent extra dots outside the current month
  if (outsideCurrentMonth) {
    return (
      <PickersDay
        {...other}
        day={day}
        outsideCurrentMonth={outsideCurrentMonth}
      />
    );
  }

  const status = profitLossDays[day.date()];
  const badgeContent =
    status === "profit" ? "🟢" : status === "loss" ? "🔴" : undefined;

  return (
    <Badge key={day.toString()} overlap="circular" badgeContent={badgeContent}>
      <PickersDay {...other} day={day} outsideCurrentMonth={false} />
    </Badge>
  );
}

export default function DateCalendarServerRequest() {
  const requestAbortController = React.useRef<AbortController | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [profitLossDays, setProfitLossDays] = React.useState<ProfitLossDays>(
    {}
  );

  // Fetch Data Based on Selected Month
  const fetchProfitLossDays = (date: Dayjs) => {
    const monthKey: string = date.format("YYYY-MM");

    if (monthKey in profitLossData) {
      setProfitLossDays(profitLossData[monthKey]); // TypeScript now recognizes the structure
    } else {
      setProfitLossDays({});
    }

    setIsLoading(false);
  };

  React.useEffect(() => {
    fetchProfitLossDays(initialValue);
    return () => requestAbortController.current?.abort();
  }, []);

  const handleMonthChange = (date: Dayjs) => {
    if (requestAbortController.current) {
      requestAbortController.current.abort();
    }
    setIsLoading(true);
    setProfitLossDays({});
    fetchProfitLossDays(date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        sx={{
          flexGrow: 1, // Allows the component to grow within its parent
          width: "100% !important", // Force full width
          height: "100% !important", // Force full height
          display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
        }}
        defaultValue={initialValue}
        loading={isLoading}
        onMonthChange={handleMonthChange}
        renderLoading={() => <DayCalendarSkeleton />}
        slots={{
          day: ServerDay,
        }}
        slotProps={{
          day: {
            profitLossDays,
          } as ServerDayProps,
        }}
      />
    </LocalizationProvider>
  );
}
