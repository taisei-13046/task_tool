import React from 'react'
import TextField from '@mui/material/TextField';

interface RemarkType {
	remarksValue: string
	setRemarksValue: (e: string) => void
}

export const RemarkTextField = (props: RemarkType) => {
	const {remarksValue, setRemarksValue} = props
	return (
		<TextField
			type="text"
			label="備考"
			value={remarksValue}
			onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRemarksValue(e.target.value)}
			multiline
			rows={4}
		/>
	)
}

