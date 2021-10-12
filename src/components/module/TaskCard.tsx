import React from 'react';
import  Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList, ListChildComponentProps } from "react-window";

function renderRow(props: ListChildComponentProps) {
	const { index, style } = props;

	const openTaskInfo = () => {
		return (alert(`${index}`));
	}
	return (
	  <ListItem style={style} key={index} component="div" disablePadding>
	    <ListItemButton onClick={openTaskInfo}>
	      <ListItemText primary={`Item ${index + 1}`} />
	    </ListItemButton>
	  </ListItem>
	);
      }

export const  TaskCard = () => {
    return (
	<Box
		sx={{ 
			width: '100%',
			height: '100%',
			maxWidth: 360,
			bgcolor: "red",
		}}
      	>
	<FixedSizeList
	  height={80}
	  width={"100%"}
	  itemSize={46}
	  itemCount={200}
	  overscanCount={1}
	>
	  {renderRow}
	</FixedSizeList>
      </Box>
    );
}