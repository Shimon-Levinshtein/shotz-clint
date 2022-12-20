import React, { useState } from 'react';
import styles from "./GetTime.module.scss";
import { connect } from 'react-redux';
// import TextField from '@mui/material/TextField';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';





import AlarmIcon from '@mui/icons-material/Alarm';
import SnoozeIcon from '@mui/icons-material/Snooze';
import TextField from '@mui/material/TextField';
import ClockIcon from '@mui/icons-material/AccessTime';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import Stack from '@mui/material/Stack';

const GetTime = ({ value, setTime }) => {

  const [dateWithInitialValue, setDateWithInitialValue] = useState(new Date());

  const onChangeTime = (date) => {
    const newTime = new Date(value);
    newTime.setHours(date.getHours());
    newTime.setMinutes(date.getMinutes());
    newTime.setSeconds(0);
    setTime(newTime);
  };

  return (
    <div className={styles.continer}>
      <div className={styles.continer_input}>
        <label>Time</label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack spacing={3}>
            <DateTimePicker
              disableFuture
              hideTabs
              openTo="hours"
              value={dateWithInitialValue}
              onChange={(newValue) => {
                setDateWithInitialValue(newValue);
              }}
              // minDate={dayjs('2018-01-01')}
              components={{
                LeftArrowIcon: AlarmIcon,
                RightArrowIcon: SnoozeIcon,
                OpenPickerIcon: ClockIcon,
              }}
              // minTime={dayjs('2018-01-01T09:00')}
              // maxTime={dayjs('2018-01-01T20:00')}
              renderInput={(params) => (
                <TextField {...params} helperText="Hardcoded helper text" />
              )}
            />
            <MobileDateTimePicker
              value={dateWithInitialValue}
              onChange={(newValue) => {
                setDateWithInitialValue(newValue);
              }}
              label="With error handler"
              onError={console.log}
              // minDate={dayjs('2018-01-01T00:00')}
              inputFormat="YYYY/MM/DD hh:mm a"
              mask="____/__/__ __:__ _M"
              renderInput={(params) => <TextField {...params} />}
            />
            {/* <DateTimePicker
              value={dateWithNoInitialValue}
              onChange={(newValue) => setDateWithNoInitialValue(newValue)}
              renderInput={(params) => (
                <TextField {...params} helperText="Clear Initial State" />
              )}
            /> */}
          </Stack>
        </LocalizationProvider>
        {/* <LocalizationProvider dateAdapter={AdapterDateFns}> */}
        {/* <StaticTimePicker
            displayStaticWrapperAs="mobile"
            value={value}
            onChange={(newValue) => onChangeTime(newValue)}
            renderInput={(params) => <TextField {...params} />}
          /> */}
        {/* </LocalizationProvider> */}
      </div>
    </div>
  );
};


const mapStateToProps = state => {
  return {}
}
export default connect(mapStateToProps, {})(GetTime);