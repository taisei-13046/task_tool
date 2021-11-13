import { Stack, Typography } from "@mui/material";
import { FC, memo } from "react"
import { usetableBodyStyle } from "../styles/tableStyle";

type Props = {
	taskValue: string | undefined
	radioValue: string | undefined
	dateStartValue: any | null
	dateEndValue: any | null
	remarksValue?: string
}

export const TaskInfo: FC<Props> = memo((props) => {
	const classes = usetableBodyStyle();
	const {taskValue, radioValue, dateStartValue, dateEndValue, remarksValue} = props;
	console.log(dateEndValue);
	console.log(dateStartValue);
	const nowDate: any = new Date();
	const dates = `${dateStartValue.getFullYear()}/${
		String(dateStartValue.getMonth() + 1).padStart(2, '0')
	}/${
		String(dateStartValue.getDate()).padStart(2, '0')
	}`;
	const enddates = `${dateEndValue.getFullYear()}/${
		String(dateEndValue.getMonth() + 1).padStart(2, '0')
	}/${
		String(dateEndValue.getDate()).padStart(2, '0')
	}`;
	let deadDate = String(((dateEndValue - nowDate) / 86400000).toFixed());
	return (
		<Stack textAlign="center" spacing={2} className={classes.bodystyle}>
			<Typography id="modal-modal-title" variant="h6" component="h1" fontSize="bold">
			TaskName
			</Typography>
			<Typography id="modal-modal-description" sx={{ mt: 2 }}>
			{taskValue}
			</Typography>
			<Typography id="modal-modal-title" variant="h6" component="h1" fontSize="bold">
			優先度
			</Typography>
			<Typography id="modal-modal-description" sx={{ mt: 2 }} className={classes.bodystyle}>
			{radioValue}
			</Typography>
			<div style={{display: "flex",
						justifyContent: "center",
						textAlign: "center",
			}}>
				<div style={{paddingLeft: "20px",
			}}>
					<Typography id="modal-modal-title" variant="h6" component="h1" fontSize="bold">
					開始日時
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
					{dates}
					</Typography>
				</div>
				<div style={{paddingLeft: "20px"}}>
					<Typography id="modal-modal-title" variant="h6" component="h1" fontSize="bold">
					締切日
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
					{enddates}
					</Typography>
				</div>
				<div style={{paddingLeft: "20px"}}>
					<Typography id="modal-modal-title" variant="h6" component="h1" fontSize="bold">
					残り日数
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
					残り {deadDate} 日
					</Typography>
				</div>
			</div>
			<Typography id="modal-modal-title" variant="h6" component="h1" fontSize="bold">
			Memo
			</Typography>
			<Typography id="modal-modal-description" sx={{ mt: 2 }}>
			{remarksValue}
			</Typography>
		</Stack>	
	);
});