import React, { useState } from 'react'
import styled from 'styled-components';
import TextField from '@mui/material/TextField';

import { TaskTextField } from "../atoms/TaskTextField"
import { ImportantRadio } from "../atoms/ImportantRadio"
import { DateInputField } from "../atoms/DateInputField"
import { RemarkTextField } from "../atoms/RemarkTextField"

export const Home: React.FC = () => {
	const [dateValue, setDateValue] = useState<Date | null>(null);
	const [remarksValue, setRemarksValue] = useState<string>("");

	return (
		<>
			<SMain>タスクを追加する
				<TaskTextField />
				<ImportantRadio />
				<br />
				<DateInputField dateValue={dateValue} setDateValue={setDateValue} />
				<br />
				<RemarkTextField remarksValue={remarksValue} setRemarksValue={setRemarksValue}/>
			</SMain>
		</>
	)
}

const SMain = styled.div`
	text-align: center;
`
