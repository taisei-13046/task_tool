import React from 'react'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

interface DateType {
	dateValue: Date | null;
	setDateValue: (e: Date | null) => void
}

export const DateInputField = (props: DateType) => {
	const {dateValue, setDateValue} = props;
	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<DatePicker
				label="タスク期日"
				value={dateValue}
				onChange={(e: Date | null) => {
				setDateValue(e);
				}}
				renderInput={(params) => <TextField {...params} />}
			/>
		</LocalizationProvider>
	)
}
