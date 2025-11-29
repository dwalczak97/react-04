import {useState} from 'react'

const SearchBar = () => {
    const [query, setQuery] = useState("")

    return(
    <form>
    <input
    onChange={(e) => setQuery(e.target.value)}
      type="text"
    value={query}
      placeholder="Search images and photos"
    />
		<button type="submit">Search</button>
  </form>
    )
}

export default SearchBar;