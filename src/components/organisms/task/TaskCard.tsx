import React, { FC, useState } from 'react';
import { TaskInfo } from '../../module/TaskInfo';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { DataType } from '../../../types/firebase/user';
import {usetableBodyStyle } from '../../styles/tableStyle';
import { db } from '../../../firebase';
import { AlertMessage } from '../../atoms/AlertMessage';

type Props = {
	users: DataType[],
}

export const  TaskCard: FC<Props> = (props) => {
	const {users} = props;
	const classes = usetableBodyStyle();
	const [flg, setOpenFlg] = useState<boolean>(false);
	const [isopen, setOpenis] = useState<boolean>(false);
	const [info, setInfo] = useState<DataType | null>(null);
	const onRowClick = (user: DataType) => {
		setOpenFlg(true);
		setInfo(user);
		console.log(info?.taskValue);
	}
  return (
	<>
	<div>
	<TableContainer component={Paper}  style={{
		maxWidth: "sm",
	}}>
        <Table aria-label="simple table" className={classes.bodystyle}>
          <TableHead>
            <TableRow style={{
              backgroundColor: "#f5f5f5",
              height: "35px"
            }}>
              <TableCell>TaskName</TableCell>
              <TableCell align="right">重要度</TableCell>
            </TableRow>
          </TableHead>
	  </Table>
	  <div style={{ overflow: 'auto', height: '150px' }}>
	  <Table>
          <TableBody>
            {users.map((user) => (
              <TableRow 
	      		key={user.taskId} 
			style={{cursor: "pointer"}}
			onClick={() => onRowClick(user)}
		>
		<TableCell component="th" scope="row">{user.taskValue}</TableCell>
		<TableCell align="right">{user.radioValue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
	</div>
  </TableContainer>
  </div>
	 <Dialog
		open={flg}
		aria-labelledby="draggable-dialog-title"
		fullWidth
		maxWidth="sm"
	>
		<DialogTitle id="draggable-dialog-title">Detail</DialogTitle>
		<DialogContent>
			<DialogContentText>
				<TaskInfo
				taskValue={info?.taskValue}
				radioValue={info?.radioValue}
				dateStartValue={info?.dateStartValue}
				dateEndValue={info?.dateEndValue}
				remarksValue={info?.remarksValue}
				/>
			</DialogContentText>
		</DialogContent>
		<DialogActions style={{textAlign: "center"}}>
			<Button
				onClick={() => setOpenFlg(false)}
				color="primary"
			>
			OK
			</Button>
			<Button
				onClick={() => setOpenis(true)}
			>
			delete
			</Button>
		</DialogActions>
 	</Dialog>
	<AlertMessage info={info} isopen={isopen} setOpenis={setOpenis} setOpenFlg={setOpenFlg}/>
	
	</>
			
    );
}