import { Drawer, ListItemIcon, ListItemText } from "@material-ui/core";
import { List, ListItem } from "@mui/material";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import HomeIcon from '@mui/icons-material/Home';
import { Box } from "@mui/system";
import { FC, memo } from "react";

type Props = {
	drawerOpen: boolean,
	handleDrawerToggle: () => void,
	onCLickHome: () => void,
	onCLickTask: () => void,
	onCLickGantt: () => void,
}

export const MenuDrawer: FC<Props> = memo((props) => {
	const {drawerOpen, handleDrawerToggle, onCLickHome, onCLickTask, onCLickGantt} = props;
	return (
		<Drawer
			variant="temporary"
			open={drawerOpen}
			onClose={handleDrawerToggle}
		>
			<Box>
				<List>
					<ListItem button key={"HOME"} onClick={onCLickHome}>
						<ListItemIcon>
							<HomeIcon />
						</ListItemIcon>
						<ListItemText style={{paddingRight: "20px"}} primary="HOME"/>
					</ListItem>
					<ListItem button key={"GANTT"} onClick={onCLickGantt}>
						<ListItemIcon>
							<AssignmentIndIcon />
						</ListItemIcon>
						<ListItemText primary="GANTT"/>
					</ListItem>
					<ListItem button key={"TASK"} onClick={onCLickTask}>
						<ListItemIcon>
							<AssignmentIndIcon />
						</ListItemIcon>
						<ListItemText primary="TASK"/>
					</ListItem>
				</List>
			</Box>
		</Drawer>
	);
});