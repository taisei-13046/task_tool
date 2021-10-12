// eslint-disable-next-line
import React, { FC } from 'react'
import Grid from '@mui/material/Grid';
import { TaskCard } from '../module/TaskCard';

const Content = () => {
	return (
		<Grid container spacing={{xs: 2}}>
			<Grid item xs={6}>
				<TaskCard />
			</Grid>
			<Grid item xs={6}>
				<TaskCard />
			</Grid>
			<Grid item xs={6}>
				<TaskCard />
			</Grid>
			<Grid item xs={6}>
				<TaskCard />
			</Grid>
		</Grid>
	);
}

export const Task: FC = () => {
	return (
		<Grid container direction="column">
			<Grid item container >
				<Grid sm={2}/>
				<Grid xs={12} sm={8}>
					<Content />
				</Grid>
				<Grid sm={2}/>
			</Grid>
		</Grid>
			
	)
}
