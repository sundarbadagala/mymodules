import { arrMonthShort, mapMonthObj, testFormats } from "./data.names";

const { millisecondsFormat, univFormat, singleValueFormat, istFormat, utcFormat } = testFormats;

export const getTime = {
  fullDate: (value, format = "yy-mm-dd") => {
    if (typeof value === "string" || typeof value === "number") {
      value = value.toString();
      if (millisecondsFormat.test(value)) {
        const date = new Date(parseInt(value));
        format = format
          .replace("dd", date.getDate())
          .replace("mm", arrMonthShort[date.getMonth()])
          .replace("yy", date.getFullYear());
        return format;
      } else if (univFormat.test(value)) {
        value = value.split(/\/|:|-| /);
        format = format
          .replace("yy", value[0].padStart(2, "0"))
          .replace("mm", arrMonthShort[value[1] - 1])
          .replace("dd", value[2]);
        return format;
      } else if (singleValueFormat.test(value)) {
        format = format
          .replace("yy", value.slice(0, 4))
          .replace("mm", arrMonthShort[value.slice(4, 6) - 1])
          .replace("dd", value.slice(6, 8));
        return format;
      } else if (istFormat.test(value)) {
        const dates= value  
        format = format
          .replace("yy", new Date(dates).getFullYear().toString())
          .replace("mm", arrMonthShort[new Date(dates).getMonth()])
          .replace("dd", new Date(dates).getDate().toString());
        return format;
      } else if (utcFormat.test(value)) {
        format = format
          .replace("yy", value.slice(0, 4))
          .replace("mm", arrMonthShort[value.slice(5, 7) - 1])
          .replace("dd", value.slice(8, 10));
        return format;
      } else {
        return "Invalid Date Format";
      }
    } else if (typeof value === "object") {
      if (!value === true) {
        return "Invalid Date Format";
      } else if (
        Object.keys(value).length === 3 ||
        Object.keys(value).length === 6
      ) {
        format = format
          .replace("dd", value.date)
          .replace("mm", arrMonthShort[value.month - 1])
          .replace("yy", value.year);
        return format;
      } else if (value instanceof Date) {
        const dates = value
        format = format
          .replace("dd", dates.getDate())
          .replace("mm", arrMonthShort[dates.getMonth()])
          .replace("yy", dates.getFullYear());
        return format;
      } else {
        return "Invalid Date Format";
      }
    } else {
        
      return "Invalid Date Format";
    }
  },
  date: (data, format = "yy-mm-dd") => {
    let result = getTime.fullDate(data, format);
    result = result.replace(
      /\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\b/gi,
      (matched) => mapMonthObj[matched]
    );
    return result;
  },
  time: (value, format = "yy-mm-dd") => {
    if (typeof value === "string" || typeof value === "number") {
      value = value.toString();
      if (millisecondsFormat.test(value)) {
        const date = new Date(parseInt(value));
        let defaultTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        return defaultTime;
      } else if (univFormat.test(value)) {
        value = value.split(/\/|:| /);
        const hours = value[1] ? value[1] : "0";
        const minutes = value[2] ? value[2] : "0";
        const seconds =
          value[3] && (value[3] === "00" || value[3] === "0")
            ? ""
            : value[3];
        let defaultTime = `${hours}:${minutes}${seconds ? ":" : ""}${seconds}`;
        return defaultTime;
      } else if (singleValueFormat.test(value)) {
        const hours = value.slice(8, 10) ? value.slice(8, 10) : "0";
        const minutes = value.slice(10, 12) ? value.slice(10, 12) : "0";
        const seconds =
          value.slice(12, 14) && value.slice(12, 14) === "00"
            ? ""
            : value.slice(12, 14);
        let defaultTime = `${hours}:${minutes}:${seconds}`;
        return defaultTime;
      } else if (istFormat.test(value)) {
        const hours = new Date(value).getHours();
        const minutes = new Date(value).getMinutes();
        const seconds = new Date(value).getSeconds();
        let defaultTime = `${hours}:${minutes}:${seconds}`;
        return defaultTime;
      } else if (utcFormat.test(value)) {
        const hours = value.slice(11, 13);
        const minutes = value.slice(14, 16);
        const seconds = value.slice(17, 19);
        let defaultTime = `${hours}:${minutes}:${seconds}`;
        return defaultTime;
      } else {
        return "Invalid Date Format";
      }
    } else if (typeof value === "object") {
      if (!value === true) {
        return "Invalid Date Format";
      } else if (
        Object.keys(value).length === 3 ||
        Object.keys(value).length === 6
      ) {
        const hours = value.hours | value.hour ? value.hours | value.hour : "0";
        const minutes =
          value.minutes | value.minute ? value.minutes | value.minute : "0";
        const seconds =
          value.seconds | value.seond ? value.seconds | value.seond : "0";
        let defaultTime = `${hours}:${minutes}:${seconds}`;
        return defaultTime;
      } else if (value instanceof Date) {
        let defaultTime = `${value.getHours()}:${value.getMinutes()}:${value.getSeconds()}`;
        return defaultTime;
      } else {
        return "Invalid Date Format";
      }
    } else {
      return "Invalid Date Format";
    }
  },
  fullTime: (data, format = "yy-mm-dd") => {
    let value = getTime.time(data);
    const hrs = value.slice(0, 2);
    value = hrs > 12 ? `${value.replace(hrs, (hrs - 12).toString())} pm` : `${value} am`;
    return value;
  },
  dateTime: (data, format = "yy-mm-dd") => {
    const date = getTime.date(data, format);
    const time = getTime.time(data);
    if (date !== "Invalid Date Format" && time !== "Invalid Date Format")
      return `${date} ${time}`;
    return "--";
  },
  fullDateTime: (data, format = "yy-mm-dd") => {
    const date = getTime.fullDate(data, format);
    const time = getTime.fullTime(data);
    if (date !== "Invalid Date Format" && time !== "Invalid Date Format")
      return `${date} ${time}`;
    return "Invalid Date Format";
  },
  dateTimeDetails:(data, format='yy-mm-dd')=>{
    const defaultDate = getTime.date(data, format);
    const defaultTime = getTime.time(data);
    const fullDate = getTime.fullDate(data, format);
    const fullTime = getTime.fullTime(data);
    return{
      defaultDate,
      fullDate,
      defaultTime,
      fullTime
    }
  }
};
