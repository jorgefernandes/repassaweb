import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import * as routes from "./Common/Routes";
import NotFound from "./Views/NotFound";
import Login from "./Views/Login";
import Counters from "./Views/Counters";
import Labs from "./Views/Labs";
import Guides from "./Views/Guides";
import Professionals from "./Views/Professionals";
import Owners from "./Views/Owners";
import Animals from "./Views/Animals";
import Properties from "./Views/Properties";
import Notifications from "./Views/Notifications";
import Profile from "./Views/Profile";
import Lab from "./Views/Labs/lab";
import Guide from "./Views/Guides/guide";
import Animal from "./Views/Animals/animal";
import Owner from "./Views/Owners/owner";
import Veterinary from "./Views/Professionals/veterinary";
import Propertie from "./Views/Properties/propertie";
import withAuthentication from "./Common/withAuthentication";
import firebaseConfig from './Libs/firebase';
import firebase from 'firebase';

firebase.initializeApp(firebaseConfig);

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path={routes.START} component={Login} />
					<Route exact path={routes.COUNTERS} component={Counters} />
					<Route exact path={routes.LABS} component={Labs} />
					<Route exact path={routes.GUIDES} component={Guides} />
					<Route exact path={routes.PROFESSIONALS} component={Professionals} />
					<Route exact path={routes.OWNERS} component={Owners} />
					<Route exact path={routes.ANIMALS} component={Animals} />
					<Route exact path={routes.PROPERTIES} component={Properties} />
					<Route exact path={routes.NOTIFICATIONS} component={Notifications} />
					<Route exact path={routes.PROFILE} component={Profile} />

					<Route exact path={routes.NEW_LAB} render={props =>
						<Lab title="Novo laboratorio" {...props} />
					} />
					<Route exact path={routes.EDIT_LAB} render={props =>
						<Lab title="Editar laboratorio" {...props} />
					} />

					<Route exact path={routes.EDIT_GUIDE} render={props =>
						<Guide title="Editar Guia" {...props} />
					} />

					<Route exact path={routes.NEW_VETERINARY} render={props =>
						<Veterinary title="Novo Veterinário" {...props} />
					} />

					<Route exact path={routes.EDIT_VETERINARY} render={props =>
						<Veterinary title="Editar Veterinário" {...props} />
					} />

					<Route exact path={routes.NEW_OWNER} render={props =>
						<Owner title="Novo Proprietário" {...props} />
					} />

					<Route exact path={routes.EDIT_OWNER} render={props =>
						<Owner title="Editar Proprietário" {...props} />
					} />

					<Route exact path={routes.NEW_PROPERTIE} render={props =>
						<Propertie title="Novo Propriedade" {...props} />
					} />

					<Route exact path={routes.EDIT_PROPERTIE} render={props =>
						<Propertie title="Editar Propriedade" {...props} />
					} />

					<Route exact path={routes.NEW_ANIMAL} render={props =>
						<Animal title="Novo Animal" {...props} />
					} />

					<Route exact path={routes.EDIT_ANIMAL} render={props =>
						<Animal title="Editar Animal" {...props} />
					} />


					<Route component={NotFound} />
				</Switch>
			</Router>
		);
	}
}

export default withAuthentication(App);
