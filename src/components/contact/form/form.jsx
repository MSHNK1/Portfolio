import React, { useState } from 'react';
import './form.css';
import Input from '../../../UI/input/input';
import Button from '../../../UI/Button/button';

const Form = () => {
    const [messageForm, setMessageForm] = useState({
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Name'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'mail',
                placeholder: 'E-mail'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        textarea: {
            elementType: 'textarea',
            elementConfig: {
                type: 'textarea',
                placeholder: 'Message...'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        }
    });
    const [messageFormIsValid, setMessageFormIsValid] = useState(false);

    const messageHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in messageForm) {
            formData[formElementIdentifier] = messageForm[formElementIdentifier].value
        }
        alert("Message has been sent!");
    }

    const checkValidity = (value, rules) => {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    const inputChangeHandler = (event, inputIdentifier) => {
        const updatedMessageForm = {
            ...messageForm
        };
        const updatedFormElement = {
            ...updatedMessageForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.minLength);
        // console.log(updatedFormElement);
        updatedFormElement.touched = true;
        updatedMessageForm[inputIdentifier] = updatedFormElement;

        let messageFormIsValid = true;
        for (let identifier in updatedMessageForm) {
            messageFormIsValid = updatedMessageForm[identifier].valid && messageFormIsValid;
        }

        setMessageForm(updatedMessageForm);
        setMessageFormIsValid(messageFormIsValid);
    }

    const formElementsArray = [];
    for (let key in messageForm) {
        formElementsArray.push({
            id: key,
            config: messageForm[key]
        })
    }

    let form = (
        <form className='form' onSubmit={messageHandler}>
            {formElementsArray.map(formElement => (
                <Input
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    inValid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    changed={(event) => inputChangeHandler(event, formElement.id)} />
            ))}
            <Button btnType=" sendBtn" disabled={!messageFormIsValid}>Send Message</Button>
        </form>
    )

    return (
        <>{form}</>
    )
};

export default Form;