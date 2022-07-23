import { Fragment } from 'react'

import ExpensesContainer from './components/Expenses/ExpensesContainer';
import './App.css'

function App() {
  return (
    <Fragment>
      <div className="container">
        <ExpensesContainer />
      </div>
    </Fragment>
  );
}

export default App;
