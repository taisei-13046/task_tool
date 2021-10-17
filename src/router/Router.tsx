import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";

import {Home} from "../components/pages/Home"
import {Task} from "../components/pages/Task"
import { Gantt } from "../components/pages/Gantt";

export const Router: VFC = memo(() => {
  return (
    	<Switch>
		<Route exact path="/">
				<Home />
		</Route>
			<Route path="/task">
				<Task />
			</Route>
		<Route path="/gantt">
			<Gantt />
		</Route>
	</Switch>
	)
});
