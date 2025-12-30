import {useState} from 'react'

const SearchBar = ({onSearch}) => {
    const [query, setQuery] = useState("")

	const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
		setQuery(form.elements.query.value);
    onSearch(query);
    form.reset();

 console.log(query)
    
  };

    return(
    
    <form onSubmit={handleSubmit}>
    <input  className="input"
      type="text"
      autoComplete="off"
      autoFocus
      name="query"
  
      placeholder="Search images and photos"
    />
		<button type="submit">Search</button>
  </form>
    )
}

export default SearchBar;



9