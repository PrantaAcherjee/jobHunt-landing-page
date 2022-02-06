import React, {useState} from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import { TextField } from '@mui/material';

const CustomForm = ({ status, message, onValidated }) => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        firstName &&
        lastName &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
            MERGE1: firstName,
            MERGE2: lastName,
        });

    }

    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
        >
                       
                <div>
                    <TextField
                        label="First Name"
                        onChange={(e)=>setFirstName(e.target.value)}
                        type="text"
                        value={firstName}
                        placeholder="Enter the first name"
                        isRequired
                    />

                    <TextField
                        label="Last Name"
                        onChange={(e)=>setLastName(e.target.value)}
                        type="text"
                        value={lastName}
                        placeholder="Enter the lastName"
                        isRequired
                    />

                    <TextField
                        label="Email"
                        onChange={(e)=>setEmail(e.target.value)}
                        type="email"
                        value={email}
                        placeholder="your@email.com"
                        isRequired
                    />

                </div>
                <TextField
                    type="submit"
                    formValues={[email, firstName, lastName]} />           
        </form>
    );
};


const MailchimpForm = props => {
    const url ="https://gmail.us14.list-manage.com/subscribe/post?u=b750c6b4179eaecb1ae0a0510&amp&id=5480c22c37";
    return (
        <div>
            <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                    <CustomForm
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </div>

    )
}

export default MailchimpForm;
