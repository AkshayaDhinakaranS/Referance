import React from "react";
import { useState } from "react";

function Login(props) {
  let username, password;
  username = props.userInput;
  password = props.passwordInput;
  return username === "Akshaya" && password === "1234" ? <Success /> : <Fail />;
}

function Success(props) {
  let [data, setData] = useState({
    name: "",
    age: null,
    email: "",
    phone: null,
  });
  return (
    <div>
      <h1>Login successful!</h1>
      <button
        onClick={() => {
          setData((preventprevious) => {
            return { ...preventprevious, name: "Akshaya" };
          });
        }}
      >
        Name
      </button>
      <p>{data.name}</p>
      <button
        onClick={() => {
          setData((preventprevious) => {
            return { ...preventprevious, age: 23 };
          });
        }}
      >
        Age
      </button>
      <p>{data.age}</p>
      <button
        onClick={() => {
          setData((preventprevious) => {
            return { ...preventprevious, phone: 9876543210 };
          });
        }}
      >
        Phone number
      </button>
      <p>{data.phone}</p>
      <button
        onClick={() => {
          setData((prevData) => {
            return { ...prevData, email: "akshaya@gmail.com" };
          });
        }}
      >
        E-mail
      </button>
      <p>{data.email}</p>
    </div>
  );
}

// let n = () => {
//   React.createElement("p", "", "anni");
//   return <h1>name</h1>;
// };
// let a = () => {
//   return <h1>Age</h1>;
// };
// let s = () => {
//   return <h1>Phonenumber</h1>;
// };
// let v = () => {
//   return <h1>E-mail</h1>;
// };
function Fail() {
  return <h1>Invalid username or password</h1>;
}

export function Data(props) {
  // let names = "Annie";
  // let age = "23";
  // let phonenumber = "1234567890";
  // let email = "akshaya@gmail.com";
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Phonenumber: {props.phonenumber}</p>
      <p>Email: {props.email}</p>
    </div>
  );
}

export default Login;

 