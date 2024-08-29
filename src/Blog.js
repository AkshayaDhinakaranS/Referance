import React from "react";
import "./page.css";

function Blog() {
  return (
    <div>
<h1>Blog</h1>
      <form action="/submit-form" method="post">
        <table>
          <tbody>
            <tr>
              <th>
                <label htmlFor="fname">First Name:</label>
              </th>
              <td>
                <input type="text" id="fname" name="fname" />
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="lname">Last Name:</label>
              </th>
              <td>
                <input type="text" id="lname" name="lname" />
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="email">Email:</label>
              </th>
              <td>
                <input type="email" id="email" name="email" />
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="message">Message:</label>
              </th>
              <td>
                <textarea id="message" name="message" />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <input type="submit" value="Submit" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default Blog;
