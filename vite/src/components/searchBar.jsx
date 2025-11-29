const SearchBar = () => {
    return(
    <form>
    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
		<button type="submit">Search</button>
  </form>
    )
}

export default SearchBar;