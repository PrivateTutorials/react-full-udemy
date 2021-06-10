import React from 'react';
import {Form, Field} from "react-final-form";
// Field - is not for UI part, it's all about form values and behind the scenes logic
// thus we need component={} to handle UI part, and we create manually renderInput() f()

const StreamForm = (props) => {
    // formProps - Object that is provided to get the sate of this controller
    const renderInput = (formProps) => {
        const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`


        // LONG way of code writing:
        // return <input onChange={formProps.input.onChange} value={formProps.input.value}/>
        // SHORT way:
        // <input {...formProps.input}/>
        return (
            <div className={className}>
                <label>{formProps.label}</label>
                <input {...formProps.input} autoComplete="off"/>
                {renderError(formProps.meta)}
            </div>
        )
    }

    // destructuring formProps.meta
    const renderError = ({error, touched}) => {
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
    const onSubmit = (formValues) => {
        props.onSubmit(formValues);
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

    return (
        /* if <form> doesn't have class "error", then all error messages won't be displayed */
        <Form
            initialValues={props.initialValues}
            onSubmit={onSubmit}
            validate={validate}
            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit} className="ui form error">
                    {/* If component doesn't know what to do with unknown property, like label, it will pass it to this.renderInput() f()*/}
                    <Field name="title" component={renderInput} label="Enter Title"/>
                    <Field
                        name="description"
                        component={renderInput}
                        label="Enter Description"
                    />
                    <button className="ui button primary">Submit</button>
                </form>
            )}
        />
    );
}

export default StreamForm;
