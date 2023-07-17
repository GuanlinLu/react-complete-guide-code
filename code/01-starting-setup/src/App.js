import ExpenseItem from "./components/ExpenseItem";

function App() {
  //imperative (traditional js)
  // const para = document.createElement('p');
  // para.textContent= 'test abc';
  // document.getElementById('root').append(para);
  return (
    <div>
      <h2>Let's get started!!!</h2>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
