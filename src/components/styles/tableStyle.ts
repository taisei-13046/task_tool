import { makeStyles } from "@material-ui/core";
import { BlockRounded } from "@material-ui/icons";

export const usetableBodyStyle = makeStyles(() => ({
	containerGroup: {
		//overflow: "auto",
		width:"300px",
		height:"150px",
		//position: "fixed",
	},
	bodystyle: {
		fontSize: "200%",
		fontWeight: "bold",
		//overflow: "auto",
		//position: "fixed"
		//position: "sticky",
	},
	header: {
		position: "fixed",
	}
}));