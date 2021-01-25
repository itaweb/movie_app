// function Food({name}){
//   return(<h3>Я люблю кушать {name}!</h3>);
// }

function Food(props){
  return(<h3>Я люблю кушать {props.name}!</h3>);
}

function App() {
  return (
    <div>
      Привет!!!
      <Food name='борщ' />
      <Food name='картошку' />
      <Food name='сало' />
      <Food name='мясо' />
      <Food name='рыбу' />
    </div>
  );
}

export default App;
