import { useState } from "react";

function App() {
  const [data, setData] = useState({
    Username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const { Username, email, password, confirmpassword } = data;

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  function submitHandler(e) {
    e.preventDefault();

    return (
      <form>
        <input
          type="text"
          name="Username"
          placeholder="username"
          value={Username}
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="confirmpassword"
          placeholder="confirmpassword"
          value={confirmpassword}
          onChange={handleChange}
        />
        <br />
        {/* {password !== confirmpassword ? <p>passwoerd is not matching</p> : null}
      {Username.length < 4 ? (
        <p>Username must be grater than 4 charectors</p>
      ) : null} */}
        <button>Submit</button>
      </form>
    );
  }
}
export default App;
