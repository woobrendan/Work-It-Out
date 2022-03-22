import "./styles.css"
import {Link} from "react-router-dom"

export default function MuscleGroup({title, image, id, type}) {
  let url = `/workout/${id}`;
  if (type == "exercise") {
    url = `/exercises/${id}`
  }
  return (
    <Link to={url}>
      <div className="muscle-group">
        <div>
          <img src={image} />
        </div>
        <div>
          <h4>{title}</h4>
        </div>
      </div>
    </Link>
  )
}