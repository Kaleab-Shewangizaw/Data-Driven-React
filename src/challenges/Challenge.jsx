export default function Challenge() {
  const ninjaTurtles = ["Donatello", "Michealangelo", "Rafael", "Leonardo"];
  const pNinja = ninjaTurtles.map((turtle) => <p>{turtle}</p>);

  return <main>{pNinja}</main>;
}
