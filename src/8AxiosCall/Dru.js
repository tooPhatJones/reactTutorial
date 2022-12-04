import React from "react"

const axios = require('axios')



function Contact() {

    const email = function (event) {

        event.preventDefault()

        axios.get("http://localhost:4000/email", {
            name: "Flash Gordon",
            email: "Something",
            message: "I Hate Pickles"
        })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="img3" id="contact">

            <button className="btn btn-primary portBtn" onClick={(event) => email(event)}>Submit</button>
        </div>
    )
}

export default Contact