import React, { useEffect, useState } from 'react';
import styles from "./GetTime.module.scss";
import { connect } from 'react-redux';
import AlarmIcon from '@mui/icons-material/Alarm';
import SnoozeIcon from '@mui/icons-material/Snooze';
import TextField from '@mui/material/TextField';
import ClockIcon from '@mui/icons-material/AccessTime';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Stack from '@mui/material/Stack';

const GetTime = ({ setTime, changeDate }) => {

  const [date, setDate] = useState(changeDate ? changeDate : new Date());

  useEffect(() => {
    if (changeDate) {
      setDate(changeDate);
    };
  }, [changeDate]);

  useEffect(() => {
    setTime(date);
  }, [date]);

  return (
    <div className={styles.continer}>
      <div className={styles.continer_input}>
        <label>בחירת זמן</label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack >
            <DateTimePicker
              disableFuture
              hideTabs
              openTo="hours"
              value={date}
              onChange={(newValue) => {
                setDate(newValue);
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

          </Stack>
        </LocalizationProvider>
      </div>
    </div>
  );
};


const mapStateToProps = state => {
  return {}
}
export default connect(mapStateToProps, {})(GetTime);