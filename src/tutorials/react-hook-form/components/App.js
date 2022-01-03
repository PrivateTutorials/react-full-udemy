import React from 'react';
import {useForm} from "react-hook-form";

import Headers from "./Header";
import "./styles.css";

// "react-hook-form" good to use for:
// getting input from form
// validation of inputs
// good a11y - when submit invalid form - focus jumps to the invalid <input>
// attach custom error messages next to the validation rules

let renderCount = 0;

export default function App() {
    renderCount++;

    // register also allows type check for inputs, so it can be used in TS as generic
    // const {register} = useForm<ModelCustomType>();
    // formState: {errors} = we are getting "errors" object from formState
    const {register, handleSubmit, formState: {errors}} = useForm();

    return (
        <form onSubmit={handleSubmit((data) => {
            console.log(data);
        })}>
            <Headers
                renderCount={renderCount}
                description="Performant, flexible and extensible forms with easy-to-use validation."
            />
            <label htmlFor="firstName">First Name:</label>
            {/*
            Before using useForm()
            <input name="firstName" id="firstName"/>
            */}
            <input {...register("firstName", {required: true})} id="firstName"/>
            {/*conditional error message: if "errors" object has "firstName" property*/}
            {errors.firstName && <p>This is a required field</p>}

            <label htmlFor="lastName">Last Name:</label>
            {/*accepts object with standard html validation APIs as 2-nd argument*/}
            <input {...register("lastName", {
                required: "Custom message for required error validation",
                maxLength: 4
            })} id="lastName"/>
            {errors.lastName && <p>{errors.lastName.message}</p>}

            <label htmlFor="age">Age</label>
            {/*valueAsNumber - by default html will return string, even from type="number"*/}
            <input
                type="number"
                {...register("age", {valueAsNumber: true})}
                id="age"
            />

            <label htmlFor="gender"/>
            <select {...register("gender")} id="gender">
                <option value="">Select...</option>
                <option value="male">male</option>
                <option value="female">female</option>
            </select>

            <label htmlFor="developer">Are you a developer?</label>
            {/*if not checked - false, if checked - "yes"*/}
            <input {...register("developer")} value="yes" type="checkbox" id="developer"/>

            <input type="submit"/>
        </form>
    )
}

// WOW:
// 1. - register all inputs in the useForm() hook: <input {...register("firstName")} />
// 2. retrieve values from useForm():
// - via "watch" - re-renders component every time there is a change in the input (on each symbol typed)
// good for conditional rendering
// - handleSubmit

// if we are not subscribing to errors - the form will not be re-rendered,
// since it doesn't have to update the view with an error message
