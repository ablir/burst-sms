import alt from "../library/alt.js";

import BurstSMSAction from "../Action/BurstSMSAction.jsx";

class BurstSMSStore{

	constructor() {
		this.bindActions(BurstSMSAction);
	}

	sendSMS(){

	}

}

export default alt.createStore(BurstSMSStore, "BurstSMSStore")