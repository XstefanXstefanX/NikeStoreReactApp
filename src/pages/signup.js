import React from "react";
import "./SignUp.css";
export function SignUp() {
  return (
    <div>
      <form>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" />
        <br />
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" />
        <br />
        <label for="password">Password:</label>
        <input type="text" id="password" name="password" />
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
