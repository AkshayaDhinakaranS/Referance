function Fruit(props) {
  return <li>{props.item} is a fruit</li>;
}

export function ArrayL() {
  let array = [
    "Apple",
    "banana",
    "mango",
    "gova",
    "kiwi",
    "chikku",
    "grapes",
    "papaya",
    "strawberry",
    "blueberry",
  ];
  return (
    <>
      <h1>Array of Items Here</h1>
      <ul>
        {array.map((item) => (
          <Fruit item={item} />
        ))}
      </ul>
    </>
  );
}

export default ArrayL;
