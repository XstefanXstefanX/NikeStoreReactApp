import React from "react";
import { useState } from "react";
import "./SignUp.css";
export function SignUp() {
  const [showPass, setShowPass] = useState(true);
  return (
    <div class="sign-up-container">
      <form>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" />
        <br />
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" />
        <br />
        <label for="password">Password:</label>
        <div>
          <input
            type={`${showPass ? "password" : "text"}`}
            id="password"
            name="password"
          />
          <button
            type="button"
            className="button"
            onClick={() => setShowPass(!showPass)}
            style={{ width: "60px", height: "30px" }}
          >
            Show
          </button>
        </div>
        <br />
        <input type="submit" value="Sign Up" className="button" />
      </form>
    </div>
  );
}
/* <form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form> */
