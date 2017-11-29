import $ from "jquery";

import alt from "../library/alt.js";

class BurstSMSAction {


	convertLinks = (message) => {
		var messageArray = message.split(" ");
		var convertedMessage = message;
		messageArray.forEach((element, index) => {
			if(element.startsWith("https://")|| element.startsWith("http://"))
			{
				var bitLink = this.getBitlyLink(element);
				convertedMessage.replace(element, bitLink);	
			}
		});
		return convertedMessage;
	};

	getBitlyLink = (link) => {
		var linkData;
		$.ajax({
			  type: "GET",
			  url: "https://api-ssl.bitly.com/v3/shorten?access_token="+ process.env.REACT_APP_BITLY_TOKEN +"&longUrl=http%3A%2F%2Fgoogle.com%2F",
			  async: false,
			  crossDomain: true,
			  success: function (result){
			   linkData = result.data.url;
			  }
			}).fail((xhr) => console.log(xhr));

		return linkData;
	};

	sendSMS(message, number) {
		const convertedMessage = this.convertLinks(message);
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
			  data: { message: convertedMessage, to: number},
			  success: function (){
			    alert('Message Sent to ' + number); 
			  }
			}).fail((xhr) => console.log(xhr));
		}
	}
	
}

export default alt.createActions(BurstSMSAction);