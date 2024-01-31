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

// import { recipes } from "./Product";

// export default function RecipeList() {
//   return (
//     <div>
//       <h1>Recipes</h1>
//       {recipes.map((recipe) => (
//         <div key={recipe.id}>
//           <h2>{recipe.name}</h2>
//           <ul>
//             {recipe.ingredients.map((ingredient) => (
//               <li key={ingredient}>{ingredient}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// }
// ?

// !

// const poem = {
//   lines: [
//     "I write, erase, rewrite",
//     "Erase again, and then",
//     "A poppy blooms.",
//   ],
// };

// export default function Poem() {
//   return (
//     <article>
//       {poem.lines.map((line, index) => (
//         <p key={index}>{line}</p>
//       ))}
//     </article>
//   );
// }
//?

//!
// const Card = ({ text }) => {
//   return <div>{text}</div>;
// };

// export default function Some() {
//   return <Card>Text between opening and closing tag</Card>;
// }

//!
// const Card = ({ children }) => {
//   return <div>{children}</div>;
// };
// export default function Some() {
//   return <Card>Text between opening and closing tag</Card>;
// }

//!
// const Card = ({ children }) => {
//   return <div>{children}</div>;
// };
// export default function Some() {
//   return (
//     <Card>
//       <h1>Card title</h1>
//       <p>Text between opening and closing tag</p>
//     </Card>
//   );
// }

//!
// src/components/App.jsx

import { Alert } from "./Alert.jsx";

export const App = () => {
  return (
    <>
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information
      </Alert>
    </>
  );
};

export default App;
