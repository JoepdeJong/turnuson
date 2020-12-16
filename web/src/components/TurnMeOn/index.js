import React, { useState } from 'react';
import { api } from '../../utils/api';

import { toast } from 'react-toastify'

const TurnMeOn = () => {
    const [showForm, setShowForm] = useState(false)
    const [email, setEmail] = useState()

    const sendConfirmation = () => {
        api.post('/register', {email}).then( res => {
            toast.success('📧 Check your email! (And your spam)')
            // participant = res.data.data.uuid
            // window.localStorage.setItem('participant', participant)
        }).catch(err => {
            toast.error('😥 '+err.response.data.message)
            console.log(err.response)
        });
    }

    return (
        <div>
            <section id="turn-me-on">
                {
                    !showForm?
                        <div className="Button" onClick={() => setShowForm(true)}>Turn my light <b>on</b></div>
                    :
                    <>
                    <div className="Form">
                        <input type="email" placeholder="me@example.com" onChange={(e) => setEmail(e.target.value)}/>
                        <div className="Button" onClick={() => sendConfirmation()}>Send confirmation email</div>
                    </div>
                    {/* <small>* Only mails with the domains @tudelft.nl, @student.tudelft.nl, @hhs.nl and @student.hhs.nl are allowed.</small> */}
                    </>

                }

            </section>
        </div>
    );
};

export default TurnMeOn;