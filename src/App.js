import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CreateItem from './pages/CreateItem';
import Dashboard from './pages/Dashboard';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import ViewItem from './pages/ViewItem';
import axios from 'axios';
import { getUsers } from './store/actions/users';

function App() {

  const dispatch=useDispatch();
  const userLoggedIn = useSelector(state => state.users.loggedIn);

  useEffect(() => {
    if (userLoggedIn) {
      axios.get("http://jsonplaceholder.typicode.com/users")
        .then(response => dispatch(getUsers(response.data)))
        .catch(error => console.log(error));
    } else {
      dispatch(getUsers([]));
    }
  }, [userLoggedIn]);

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/dashboard/:id' element={<ViewItem />} />
            <Route path='/create' element={<CreateItem />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
