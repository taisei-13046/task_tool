import React, { useState } from 'react'
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { db } from "../../firebase"

import { TaskTextField } from "../atoms/TaskTextField"
import { ImportantRadio } from "../atoms/ImportantRadio"
import { DateInputField } from "../atoms/DateInputField"
import { RemarkTextField } from "../atoms/RemarkTextField"
import { Header } from "../organisms/Header"

export const Home: React.FC = () => {
	const [taskValue, setTaskValue] = useState<string>("");
	const [radioValue, setRadioValue] = useState<string>("");
	const [dateValue, setDateValue] = useState<Date | null>(null);
	const [remarksValue, setRemarksValue] = useState<string>("");

	const onClickButton = () => {
		db.collection('tasks').add({
			taskValue: taskValue,
			radioValue: radioValue,
			dateValue: dateValue,
			remarksValue: remarksValue
		})
		.then(() => {
			setTaskValue("")
			setRadioValue("")
			setDateValue(null)
			setRemarksValue("")
		})
	}

	return (
		<>
			<SMain>
				<Header />
				<SDiv>タスクを追加する</SDiv>
				<TaskTextField taskValue={taskValue} setTaskValue={setTaskValue}/>
				<ImportantRadio radioValue={radioValue} setRadioValue={setRadioValue}/>
				<br />
				<DateInputField dateValue={dateValue} setDateValue={setDateValue} />
				<br />
				<RemarkTextField remarksValue={remarksValue} setRemarksValue={setRemarksValue}/>
				<Button variant="contained" onClick={onClickButton} disabled={!taskValue || !radioValue || !dateValue}>登録</Button>
			</SMain>
		</>
	)
}

const SMain = styled.div`
	text-align: center;
	height: 100vh;
`

const SDiv = styled.div`
	margin: 50px 0 50px 0;
`
