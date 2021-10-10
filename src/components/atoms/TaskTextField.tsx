import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const TaskTextField: React.FC = () => {
	return (
		<Box
			component="form"
			sx={{
				'& > :not(style)': { m: 1, width: '50ch' },
			}}
			noValidate
			autoComplete="off"
		>
			<TextField id="outlined-basic" label="タスク名" variant="outlined" />
		</Box>
	)
}
