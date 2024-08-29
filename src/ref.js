import React, { useState } from "react";

function Login(props) {
  const { userInput, passwordInput } = props;
  const [showDetail, setShowDetail] = useState(null);

  const handleDetailClick = (detail) => {
    setShowDetail(detail);
  };

  return userInput === "Akshaya" && passwordInput === "1234" ? (
    <Success showDetail={showDetail} handleDetailClick={handleDetailClick} />
  ) : (
    <Fail />
  );
}

function Success(props) {
  const { showDetail, handleDetailClick } = props;

  return (
    <div>
      <h1>Login successful!</h1>
      <button onClick={() => handleDetailClick("name")}>Name</button>
      <button onClick={() => handleDetailClick("age")}>Age</button>
      <button onClick={() => handleDetailClick("phone")}>Phone number</button>
      <button onClick={() => handleDetailClick("email")}>E-mail</button>
      
      {showDetail === "name" && <p>Annie</p>}
      {showDetail === "age" && <p>23</p>}
      {showDetail === "phone" && <p>985687290</p>}
      {showDetail === "email" && <p>akshaya@gmail.com</p>}
    </div>
  );
}

function Fail() {
  return <h1>Invalid username or password</h1>;
}

export function Data(props) {
  const { name, age, phonenumber, email } = props;
  
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Phonenumber: {phonenumber}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default Login;
