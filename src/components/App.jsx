// !
// src/components/App.jsx

// import { Product } from "./Product";

// export default function App() {
//   return (
//     <div>
//       <h1>Best selling</h1>

//       <Product name="Tacos With Lime" price={10.99} />
//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//         price={14.29}
//       />
//     </div>
//   );
// }
// ?

// !
// import UserGreeting from "./Product.jsx";

// function App() {
//   return (
//     <>
//       <UserGreeting isLoggedIn={false} username="BroCode" />
//     </>
//   );
// }

// export default App;
// ?

// !
// import { favouriteBooks } from "./Product";

// export default function App() {
//   return (
//     <div>
//       {favouriteBooks.map((item) => {
//         return <div>{item.name}</div>;
//       })}
//     </div>
//   );
// }
// ?

// !
// import UserGreeting from "./Product.jsx";

// function App() {
//   return (
//     <>
//       <UserGreeting isLoggedIn={false} username="BroCode" />
//     </>
//   );
// }

// export default App;
// ?

// !

// const favouriteBooks = [
//   { id: "id-1", name: "JS for beginners" },
//   { id: "id-2", name: "React basics" },
//   { id: "id-3", name: "React Router overview" },
// ];

// const BookList = ({ books }) => {
//   return (
//     <ul>
//       {books.map((book) => {
//         return <li key={book.id}>{book.name}</li>;
//       })}
//     </ul>
//   );
// };

// const App = () => {
//   return (
//     <>
//       <h1>Books of the week</h1>
//       <BookList books={favouriteBooks} />
//     </>
//   );
// };

// export default App;
// ?

// !

import { recipes } from "./Product";

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
