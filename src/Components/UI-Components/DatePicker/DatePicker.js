import * as React from 'react';
import moment from 'moment';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function MyDatePicker({ label,size,value,onChange}) {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
    <DatePicker value={value ? moment(value) : null} onChange={onChange} 
    slotProps={{ textField: { size: size, required:true} }} 
    sx={{ width:"100%"}}
    label={label}/>
  </LocalizationProvider>
  );
}
