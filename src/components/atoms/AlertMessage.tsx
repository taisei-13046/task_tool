
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import React, { FC, useState } from 'react';
import { db } from '../../firebase';
import { DataType } from '../../types/firebase/user';

type Props = {
	info: any,
	isopen: boolean,
	setOpenis: (isopen: boolean) => void,
	setOpenFlg: (isopen: boolean) => void,
}

export const AlertMessage: FC<Props> = (props) => {
	const {info, isopen, setOpenis, setOpenFlg} = props;
	const onDeleteClick = (info: DataType) => {
		db.collection('tasks').doc(`${info?.taskValue}`).delete();
		setOpenis(false);
		setOpenFlg(false);
	}
	return (
		<Dialog 
			open={isopen}
			aria-labelledby="draggable-dialog-title"
			fullWidth
			maxWidth="sm"
		>
		<DialogTitle id="draggable-dialog-title">[{info?.taskValue}]本当に消しますか?</DialogTitle>
		<DialogActions style={{textAlign: "center"}}>
			<Button
				onClick={() => onDeleteClick(info)}
				color="primary"
			>
			Ok
			</Button>
			<Button
				onClick={() => setOpenis(false)}
				color="primary"
			>
			No
			</Button>
		</DialogActions>
		</Dialog>
	);
}