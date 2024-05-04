import React, { useState } from "react";


function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState({
    technology: false,
    sports: false,
    music: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleInterestChange = (e) => {
    const { name, checked } = e.target;
    setInterests((prevInterests) => ({
      ...prevInterests,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can submit the form data to your backend or perform any other actions
    setSubmitted(true);
  };
  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Interests:
          <br />
          <input
            type="checkbox"
            name="technology"
            checked={interests.technology}
            onChange={handleInterestChange}
          />{" "}
          Technology
          <br />
          <input
            type="checkbox"
            name="sports"
            checked={interests.sports}
            onChange={handleInterestChange}
          />{" "}
          Sports
          <br />
          <input
            type="checkbox"
            name="music"
            checked={interests.music}
            onChange={handleInterestChange}
          />{" "}
          Music
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <p>
          Thank you, {name}! Your form has been submitted successfully. Your
          interests:{" "}
          {Object.entries(interests)
            .filter(([key, value]) => value)
            .map(([key]) => key)
            .join(", ")}
        </p>
      )}
    </main>
  );

}

export default App;
