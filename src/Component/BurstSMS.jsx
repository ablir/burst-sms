import React from "react";
import BurstSMSStore from "../Store/BurstSMSStore.jsx";
import BurstSMSAction from "../Action/BurstSMSAction.jsx";

export default class BurstSMS extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
                        mobileNum: "",
                        smsMessage: ""
                     };
    }

    componentDidMount() {
        BurstSMSStore.listen(this.handleStoreChange);
    }

    componentWillUnmount() {
        BurstSMSStore.unlisten(this.handleStoreChange);
    }

    handleStoreChange = (state) => {
        this.setState(state);
    }

    mobileNumChanged = (event) => {
        this.setState({mobileNum: event.target.value});
    } 

    smsMessageChanged = (event) => {
        this.setState({smsMessage: event.target.value});
    } 

    sendBurstSMS = () => {
        BurstSMSAction.sendSMS("hello", this.state.mobileNum);
    }

    render() {
        return (
            <div>
                <label htmlFor="mobileNumID"> Mobile Number </label>
                <input id="mobileNumID" type="text" placeholder="add mobile number" value={this.state.mobileNum} onChange={this.mobileNumChanged}/>
                <br/>
                <textarea maxLength="480" onChange={this.smsMessageChanged}>
                </textarea>
                <h5>{this.state.smsMessage.length}/480</h5>
                <button onClick={this.sendBurstSMS}>Send Burst SMS </button> 
            </div>
        );
    }
}