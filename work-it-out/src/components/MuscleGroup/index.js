import "./styles.css"
import {Link} from "react-router-dom"

export default function MuscleGroup({title, image, id, type}) {
  let url = `/workout/${id}`;
  if (type === "exercise") {
    url = `/exercises/${id}`
  }

  const linkStyle = {
    textDecoration: "none",
    color: '#333'
  };
  return (
    <Link to={url} style={linkStyle}>
      <div className="muscle-group" >
        <div>
          <img src={image} alt={title}/>
        </div>
        <div>
          <h4 >{title}</h4>
        </div>
      </div>
    </Link>
  )
}