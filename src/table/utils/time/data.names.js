export const arrMonthFull = ['January','Febreuary','March','April','May','June','July','August','September','October','November','December']

export const arrMonthShort = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

export const arrWeekFull = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

export const arrWeekShort = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

export const mapMonthObj = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };

export const testFormats={
    millisecondsFormat: /^1?\d{12}$/i, //1637690435964 Date.now()
    univFormat : /^\d{4}(\/|-)(0?[0-9]|1[0-2])(\/|-)([0-2]?[0-9]|3[0-1])( ([0-1]?[0-9]|2[0-4]):(0?[0-9]|[1-5][0-9])(:(0?[0-9]|[1-5][0-9]))?)?$/i, //'2021/12/23 09:23:34'
    singleValueFormat: /^\d{4}((0[0-9])|(1[0-2]))(([0-2][0-9])|3[0-1])(([0-1][0-9]|2[0-3])([0-5][0-9])([0-5][0-9]))?$/i,    //2021031090909
    istFormat:/[a-zA-Z]{3} [a-zA-Z]{3} ([0-1][0-2]) (\d{4}) ([0-1][0-9]|2[0-4]):([0-5][0-9]):([0-5][0-9]) GMT\+0530 \(India Standard Time\)/i,   //Tue Nov 10 2021 13:51:56 GMT+0530 (India Standard Time)
    utcFormat: /\d{4}-(0[0-9]|1[0-2])-([0-2][0-9]|3[0-1])T([0-1][0-9]|2[0-4])\:([0-5][0-9])\:([0-5][0-9])\.\d{3}Z/i    //2021-11-31T05:22:02.000Z 2022-03-09T15:13:00.000Z
}

