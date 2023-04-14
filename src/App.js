import React, { useRef } from "react";
import emailJs from "emailjs-com";

function App() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(formRef.current.value, "[][][=][][]");

    emailJs
      .sendForm(
        //process.env.REACT_APP_EMAIL_SERVICE_ID,
        "service_11t9y0n",
        //process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        "template_uuxmxjv",
        formRef.current,
        "SMN4YhBd7aOSi19zn"
        //process.env.REACT_APP_EMAIL_PUBLIC_KEY    TESTING FOR THE FIRST TIME
      )
      .then((res) => {
        console.log(res.text, "[][]", res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col align-self-center">
          <h1 className="text-center">Email - JavaScript Contact Form</h1>
          {/* <!-- contact form --> */}
          <form ref={formRef} onSubmit={handleSubmit}>
            {/* <!-- name --> */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="name"
                name="name"
                className="form-control"
                id="name"
                placeholder="enter your name"
              />
            </div>

            {/* <!-- email --> */}
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="enter your email"
              />
            </div>

            {/* <!-- subject --> */}
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                className="form-control"
                id="subject"
                placeholder="enter email subject"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email_body">Message</label>
              <textarea
                className="form-control"
                id="email_body"
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
