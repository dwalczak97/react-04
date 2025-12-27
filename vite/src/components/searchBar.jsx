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


// export const SearchForm = ({ onSearch }) => {
  
// 	const handleSubmit = (evt) => {
//     evt.preventDefault();
//     const form = evt.target;
// 		const topic = form.elements.topic.value;
//     onSearch(topic);
//     form.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="topic" placeholder="Search articles..." />
//       <button>Search</button>
//     </form>
//   );
// }