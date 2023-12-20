import { useState } from 'react';
import Navbar from './components/Navbar';
import NewsBoard from './components/NewsBoard';
import Search from "./components/Search.jsx";


const App = () => {
  const [category,setCategory] = useState("general");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
    <Navbar setCategory={setCategory}/>
    <Search setSearchTerm={setSearchTerm} />
    <NewsBoard category={category} searchTerm={searchTerm} />
    </div>
  )
}

export default App