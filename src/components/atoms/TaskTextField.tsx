import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';

interface TaskType {
	taskValue: string
	setTaskValue: (e: string) => void
}

export const TaskTextField = (props: TaskType) => {
	const {taskValue, setTaskValue} = props;
	return (
		<Sdiv>
			<Box
				component="form"
				sx={{
					'& > :not(style)': { m: 1, width: '50ch' },
				}}
				noValidate
				autoComplete="off"
			>
				<TextField
					id="outlined-basic"
					label="タスク名"
					variant="outlined"
					value={taskValue}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTaskValue(e.target.value)}
					required
				/>
			</Box>
		</Sdiv>
	)
}

const Sdiv = styled.div`
	margin: 15px 0 15px 0;
`
