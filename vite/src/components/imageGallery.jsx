

const ImageGallery = (img) => {
    return(
        <ul>
	{img.map(({id, url, title}) => (
    <li key={id}>
		<div>
		  <img src={url} alt={title} />{title}
		</div>
	</li>
    ))};
    </ul>
    );
};


export default ImageGallery;

// const ArticleList = ({ items }) => (
//   <ul>
//     {items.map(({ objectID, url, title }) => (
//       <li key={objectID}>
//         <a href={url} target="_blank" rel="noreferrer noopener">
//           {title}
//         </a>
//       </li>
//     ))}
//   </ul>
// );