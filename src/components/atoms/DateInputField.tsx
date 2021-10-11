import React from 'react'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import styled from 'styled-components';

interface DateType {
	dateValue: Date | null;
	setDateValue: (e: Date | null) => void;
	label: string;
}

export const DateInputField = (props: DateType) => {
	const {dateValue, setDateValue, label} = props;
	return (
		<Sdiv>
			<LocalizationProvider dateAdapter={AdapterDateFns}>
				<DatePicker
					label={label}
					value={dateValue}
					onChange={(e: Date | null) => {
					setDateValue(e);
					}}
					renderInput={(params) => <TextField {...params} />}
				/>
			</LocalizationProvider>
		</Sdiv>
	)
}

const Sdiv = styled.div`
	margin: 15px 0 15px 0;
`
