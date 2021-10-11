import React from 'react'
import TextField from '@mui/material/TextField';
import styled from 'styled-components';

interface RemarkType {
	remarksValue: string
	setRemarksValue: (e: string) => void
}

export const RemarkTextField = (props: RemarkType) => {
	const {remarksValue, setRemarksValue} = props
	return (
		<Sdiv>
			<TextField
				type="text"
				label="備考"
				value={remarksValue}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRemarksValue(e.target.value)}
				multiline
				rows={4}
			/>
		</Sdiv>
	)
}

const Sdiv = styled.div`
	margin: 15px 0 15px 0;
`
