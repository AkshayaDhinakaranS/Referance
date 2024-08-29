import React, { useState } from "react";

function Formlist() {
  const [names, setnames] = useState("");
  const [age, setage] = useState("");
  const [phone, setphone] = useState("");
  function Click(props) {
    return alert(`${props.n} and ${props.a} and ${props.p}`);
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          Click({ n: names, a: age, p: phone });
        }}
      >
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          value={names}
          onChange={(e) => {
            setnames(e.target.value);
          }}
        />
        <br></br>
        <label for="Age">Age:</label>
        <input
          type="text"
          id="Age"
          value={age}
          onChange={(a) => setage(a.target.value)}
        />
        <br></br>
        <label for="phoneno">Phone Number:</label>
        <input
          type="number"
          id="phoneno"
          value={phone}
          onChange={(s) => setphone(s.target.value)}
        />
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Formlist;
