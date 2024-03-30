import type { NextPage } from 'next';
import ToDo from './ToDo';
import { store } from '../src/store';
import { Provider } from 'react-redux';

const Home: NextPage = () => {
  return (
    <>
      <Provider store={store}>
        <ToDo></ToDo>
      </Provider>
    </>
  );
};

export default Home;
