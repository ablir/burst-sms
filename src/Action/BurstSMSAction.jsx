import $ from "jquery";

import alt from "../library/alt.js";

class BurstSMSAction {

	sendSMS(message, number) {
		return (dispatch) => {
			$.ajax({
			  type: "POST",
			  url: "https://cors-anywhere.herokuapp.com/http://api.transmitsms.com/send-sms.json/",
			  dataType: 'json',
			  async: true,
			  crossDomain: true,
			  headers: {
			    "Authorization": "Basic " + btoa(process.env.REACT_APP_API_KEY + ":" + process.env.REACT_APP_API_SECRET),
			    "Access-Control-Allow-Origin": "*"
			  },
			  data: { message: message, to: number},
			  success: function (){
			    alert('Thanks for your comment!'); 
			  }
			}).fail((xhr) => console.log(xhr));
		}
	}
	
}

export default alt.createActions(BurstSMSAction);