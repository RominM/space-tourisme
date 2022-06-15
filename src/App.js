import { useState } from 'react';
import Loader from './components/loader/Loader';
import Routing from './Routes/Routing';

const App = () => {
  const [loader, setLoader] = useState(false);

  return loader ? <Loader /> : <Routing />;
};

export default App;
