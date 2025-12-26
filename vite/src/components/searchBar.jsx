import {useState} from 'react'

const SearchBar = () => {
    const [query, setQuery] = useState("")

    return(
    <form>
    <input  className="input"
      type="text"
      autoComplete="off"
      autoFocus
    onChange={(e) => setQuery(e.target.value)}
     value={query}
      placeholder="Search images and photos"
    />
		<button type="submit">Search</button>
  </form>
    )
}

export default SearchBar;