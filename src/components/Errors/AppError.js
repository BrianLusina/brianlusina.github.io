/**
 * Application error boundary. This wraps the whole application in an error boundary and will be used
 * to display a fallback UI in the event of any crashes that may occur in the application.
 */
import React, { Component } from "react";

export default class AppError extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasError : false,
        }
    }

    /**
     * Lifecycle that catches any errors in the application. This is the top level catch block
     * of the application. If the application encounteres a top level error, it is caught here
     * and reporting to an external service can be done with the error information
     * @param {Object} error Error information about crash in application
     * @param {Object} info information about the application crash. This contains information about
     * the component Stack tree
     */
    componentDidCatch(error, info){
        this.setState({
            hasError : true
        });
        
        console.error(`AppCrash: \n Error: ${error} \n info: ${info}`)
        // log error to an external service for reporting
    }

    render(){
        if(this.state.hasError){
            // render a different UI
            return <h1>Something bad happened</h1>
        }
        return this.props.children
    }
}