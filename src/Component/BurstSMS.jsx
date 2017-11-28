import React from "react";
import BurstSMSStore from "../Store/BurstSMSStore.jsx";
import BurstSMSAction from "../Action/BurstSMSAction.jsx";

export default class BurstSMS extends React.Component {

    constructor(props) {
        super(props);
        this.state = {mobileNum: ""};
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

    sendBurstSMS = () => {
        BurstSMSAction.sendSMS("hello", "639989660644");
    }

    render() {
        return (
            <div>
                <label for="mobileNumID"> Mobile Number </label>
                <input id="mobileNumID" type="text" placeholder="add mobile number" value={this.state.mobileNum} onChange={this.mobileNumChanged}/>
                <textarea style={{display:"block"}}onChange={()=> {console.log("what");}}>
                </textarea>

                <button onClick={this.sendBurstSMS}>Send Burst SMS </button> 
            </div>
        );
    }
}