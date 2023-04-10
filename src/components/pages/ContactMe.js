import React from "react";

// React E-mail contact form
export default function ContactMe() {
  const [formStatus, setFormStatus] = React.useState("Submit");
  const onSubmit = async (event) => {
    event.preventDefault();
    setFormStatus("Sending...");
    const { name, email, message } = event.target.elements;
    let formInfo = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:3000/#ContactMe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formInfo),
    });
    setFormStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    // Message form template
    <div className="container mt-5 col-6 offset-3">
      <div>
        <h3 class="fs-5 text-center mb-5">
          You can contact me by email at kbreedlo06@gmail.com<br></br> or
          <br></br>Click the envelope below to open your default email client.
        </h3>
      </div>
      <h2 className="mb-3 text-center text-primary text-opacity-75 fs-1">
        Contact Me
      </h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label fs-5" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label fs-5" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label fs-5" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button
          className="btn btn-warning btn-opacity-75 fs-5 offset-sm-5 col-md-2"
          type="submit"
        >
          {formStatus}
        </button>
      </form>
    </div>
  );
}
