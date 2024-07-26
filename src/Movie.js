export default function Movie({img,title,summary,genres}) {
  
  return (
    <div>
      <img src={img} alt={title}></img>
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map(g => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  )
}