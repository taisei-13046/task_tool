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
	const [dateStartValue, setDateStartValue] = useState<Date | null>(null);
	const [dateEndValue, setDateEndValue] = useState<Date | null>(null);
	const [remarksValue, setRemarksValue] = useState<string>("");

	const onClickButton = () => {
		db.collection('tasks').add({
			taskValue: taskValue,
			radioValue: radioValue,
			dateStartValue: dateStartValue,
			dateEndValue: dateEndValue,
			remarksValue: remarksValue
		})
		.then(() => {
			setTaskValue("")
			setRadioValue("")
			setDateStartValue(null)
			setDateEndValue(null)
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
				<DateInputField dateValue={dateStartValue} setDateValue={setDateStartValue} label={"タスク開始日"} />
				<DateInputField dateValue={dateEndValue} setDateValue={setDateEndValue} label={"タスク期日"} />
				<RemarkTextField remarksValue={remarksValue} setRemarksValue={setRemarksValue}/>
				<Button
					variant="contained"
					onClick={onClickButton}
					disabled={!taskValue || !radioValue || !dateStartValue || !dateEndValue}
				>
					登録
				</Button>
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
