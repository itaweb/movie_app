function Food({ name, picture }) {
  return (
    <div>
      <h3>Я люблю кушать {name}!</h3>
      <img src={picture} />
    </div>
  );
}

// function Food(props) {
//   return <h3>Я люблю кушать {props.name}!</h3>;
// }

const foodILike = [
  {
    name: "борщ",
    image:
      "https://the-challenger.ru/wp-content/uploads/2019/04/shutterstock_570014164-800x534.jpg",
  },
  {
    name: "драники",
    image:
      "https://2d-recept.com/wp-content/uploads/2019/05/draniki-kartofelnye-foto.jpg",
  },
  {
    name: "стейк",
    image:
      "https://eda.ru/img/eda/c620x415i/s2.eda.ru/StaticContent/Photos/120213181923/120626165816/p_O.jpg",
  },
  {
    name: "хинкали",
    image: "https://foodman.club/wp-content/uploads/2017/12/Khinkali.jpg",
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
