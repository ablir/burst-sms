import React from "react";
import BurstSMSStore from "../Store/BurstSMSStore.jsx";
import CountryData from "../library/countryCodes.js";


export default class BurstSMS extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
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

    render() {
        return (
            <div>{console.log(CountryData)} </div>
        );
    }
}