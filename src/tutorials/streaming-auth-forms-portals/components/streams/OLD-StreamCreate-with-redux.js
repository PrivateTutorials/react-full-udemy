// This form was refactored and created as a general c: StreamsForm
// we removed UI Form rendering and redux logic from here

import React from 'react';
import {connect} from 'react-redux';
import {createStream} from "../../actions";
import {Field, reduxForm} from 'redux-form';
// Field - is not for UI part, it's all about form values and behind the scenes logic
// thus we need component={} to handle UI part, and we create manually renderInput() f()

class OldStreamCreate extends React.Component {

    // formProps - Object that is provided to get the sate of this controller
    renderInput = (formProps) => {
        // LONG way of code writing:
        // return <input onChange={formProps.input.onChange} value={formProps.input.value}/>
        // SHORT way:
        // <input {...formProps.input}/>

        const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`

        return (
            <div className={className}>
                <label>{formProps.label}</label>
                <input {...formProps.input} autoComplete="off"/>
                {this.renderError(formProps.meta)}
            </div>
        )
    }

    // destructuring formProps.meta
    renderError({error, touched}) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    // normally, BrowserRouter class creates and manages browser History object
    // but if we want to create browser History object ourselves, so we could further call in in action creator, then
    // we need not to use BrowserRouter, but to use generic Plain Router
    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    }

    render() {
        // this.props.handleSubmit - the f(), that is passed by redux-forms to component props
        return (
            /* if <form> doesn't have class "error", then all error messages won't be displayed */
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                {/* If component doesn't know what to do with unknown propety,like label, it will pass it to this.renderInput() f()*/}
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name="description" component={this.renderInput} label="Enter Description"/>
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};

    // Field name="title", its value
    if (!formValues.title) {
        errors.title = 'You must enter a title';
    }
    if (!formValues.description) {
        errors.description = 'You must enter a description';
    }

    return errors;
}

const formWrapped = reduxForm({
    form: 'streamCreate', // just a name of the form
    validate
})(OldStreamCreate); // reduxForm() will return a f() and we immediately call this f() with StreamCreate

// 1-st arg = mapStateToProps
export default connect(null, {createStream})(formWrapped);
