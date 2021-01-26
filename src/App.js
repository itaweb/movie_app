import React from "react";
import PropTypes from "prop-types";

// function Food({ name, picture, rating }) {
//   return (
//     <div>
//       <h3>Я люблю кушать {name}!</h3>
//       <h4>{rating}/5.0</h4>
//       <img src={picture} alt="Это картинки еды" />
//     </div>
//   );
// }

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
// };

// function Food(props) {
//   return <h3>Я люблю кушать {props.name}!</h3>;
// }

// const foodILike = [
//   {
//     id: 1,
//     name: "борщ",
//     image:
//       "https://the-challenger.ru/wp-content/uploads/2019/04/shutterstock_570014164-800x534.jpg",
//     rating: 4.8,
//   },
//   {
//     id: 2,
//     name: "драники",
//     image:
//       "https://2d-recept.com/wp-content/uploads/2019/05/draniki-kartofelnye-foto.jpg",
//     rating: 4.9,
//   },
//   {
//     id: 3,
//     name: "стейк",
//     image:
//       "https://eda.ru/img/eda/c620x415i/s2.eda.ru/StaticContent/Photos/120213181923/120626165816/p_O.jpg",
//     rating: 4.4,
//   },
//   {
//     id: 4,
//     name: "хинкали",
//     image: "https://foodman.club/wp-content/uploads/2017/12/Khinkali.jpg",
//     rating: 4.5,
//   },
// ];

// function renderFood(dish) {
//   return (
//     <Food
//       key={dish.id}
//       name={dish.name}
//       picture={dish.image}
//       rating={dish.rating}
//     />
//   );
// }

/******************************** End Part One*****************************************************/


/******************************** Part Two *****************************************************/


class App extends React.Component {

  state = {
    count: 0
  };

add = () => {
  // this.setState({count: this.state.count + 1});
  this.setState(current =>({count: current.count + 1}));
}

minus = () => {
  this.setState(current =>({count: current.count - 1}));
}

  render() {
    return <div>
      <h1>Текущее число: {this.state.count}</h1>
      <button onClick={this.add}>Плюс</button>
      <button onClick={this.minus}>Минус</button>
    </div>
  }
}

export default App;
