import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import styled from 'styled-components';

interface RadioType {
	radioValue: string
	setRadioValue: (e: string) => void
}

export const ImportantRadio = (props: RadioType) => {
	const {radioValue, setRadioValue} = props;
	return (
		<Sdiv>
			<FormControl component="fieldset">
				<FormLabel component="legend">重要度</FormLabel>
					<RadioGroup
						row aria-label="importance"
						name="row-radio-buttons-group"
						value={radioValue}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRadioValue(e.target.value)}
					>
						<FormControlLabel value="1" control={<Radio />} label="1" />
						<FormControlLabel value="2" control={<Radio />} label="2" />
						<FormControlLabel value="3" control={<Radio />} label="3" />
						<FormControlLabel value="4" control={<Radio />} label="4" />
						<FormControlLabel value="5" control={<Radio />} label="5" />
						<FormControlLabel value="6" control={<Radio />} label="6" />
						<FormControlLabel value="7" control={<Radio />} label="7" />
						<FormControlLabel value="8" control={<Radio />} label="8" />
						<FormControlLabel value="9" control={<Radio />} label="9" />
						<FormControlLabel value="10" control={<Radio />} label="10" />
				</RadioGroup>
			</FormControl>
		</Sdiv>
	)
}

const Sdiv = styled.div`
	margin: 15px 0 15px 0;
`
