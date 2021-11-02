// eslint-disable-next-line
import React, { createContext, FC, useContext, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { TaskCard } from '../organisms/task/TaskCard';
import { db } from '../../firebase';
import { DataType} from '../../types/firebase/user';
import { Box } from '@mui/material';
import { Header } from '../organisms/Header';
import "firebase/storage"

export const Content = () => {
	const users = useContext(UserContext);
	const tmp1: DataType[] = [];
	const tmp2: DataType[] = [];
	const tmp3: DataType[] = [];
	const tmp4: DataType[] = [];
	users.map((user) => {
		const priority = ((user.dateEndValue - user.dateStartValue) / 86400000).toFixed();
		if (parseInt(user.radioValue, 10) >= 6 && parseInt(priority, 10) <= 6)
		{
			tmp1.push({
				taskId: user.taskId,
				taskValue: user.taskValue,
				radioValue: user.radioValue,
				dateStartValue: user.dateStartValue,
				dateEndValue: user.dateEndValue,
				remarksValue: user.remarksValue
			});
		}
		else if (parseInt(user.radioValue, 10) >= 6 && parseInt(priority, 10) >= 7)
		{
			tmp2.push({
				taskId: user.taskId,
				taskValue: user.taskValue,
				radioValue: user.radioValue,
				dateStartValue: user.dateStartValue,
				dateEndValue: user.dateEndValue,
				remarksValue: user.remarksValue
			});
		}
		else if (parseInt(user.radioValue, 10) <= 5 && parseInt(priority, 10) <= 6) 
		{
			tmp3.push({
				taskId: user.taskId,
				taskValue: user.taskValue,
				radioValue: user.radioValue,
				dateStartValue: user.dateStartValue,
				dateEndValue: user.dateEndValue,
				remarksValue: user.remarksValue
			});
		}
		else
		{
			tmp4.push({
				taskId: user.taskId,
				taskValue: user.taskValue,
				radioValue: user.radioValue,
				dateStartValue: user.dateStartValue,
				dateEndValue: user.dateEndValue,
				remarksValue: user.remarksValue
			});
		}
	});
	//console.log(tmp);
	return (
		<Box marginTop={10}>
			<Grid container spacing={{xs: 10}}>
				<Grid item xs={6}>
					<TaskCard users={tmp1}/>
				</Grid>
				<Grid item xs={6}>
					<TaskCard users={tmp3}/>
				</Grid>
				<Grid item xs={6}>
					<TaskCard users={tmp2}/>
				</Grid>
				<Grid item xs={6}>
					<TaskCard users={tmp4}/>
				</Grid>
			</Grid>
		</Box>
	);
}

export const UserContext = createContext<Array<DataType>>([]);

export const Task: FC = () => {
	const [ users, setUsers] = useState<Array<DataType>>([]);
	useEffect(() => {
		const getGanttData = async () => {
		const tmp: DataType[] = [];
		  const docRef = db.collection("tasks");
		  await docRef
		    .orderBy("dateStartValue")
		    .get()
		    .then((querySnapshot) => {
		      querySnapshot.docs.map((doc, index) => {
			const task = doc.data() as DataType;
			task.taskId = index;
			if (task) {
				tmp.push({
					taskId: task.taskId,
					taskValue: task.taskValue,
					radioValue: task.radioValue,
					dateStartValue: task.dateStartValue.toDate(),
					dateEndValue: task.dateEndValue.toDate(),
					remarksValue: task.remarksValue
				});
			}
		      });
		    });
		  setUsers(tmp);
		};
		getGanttData();
	      }, []);
	return (
		<div>
			<UserContext.Provider value={users} >
			<Header />
			<Grid container direction="column">
				<Grid item container >
					<Grid sm={2}/>
					<Grid xs={12} sm={8}>
						<Content />
					</Grid>
					<Grid sm={2}/>
				</Grid>
			</Grid>
			</UserContext.Provider>
		</div>
	)
}
