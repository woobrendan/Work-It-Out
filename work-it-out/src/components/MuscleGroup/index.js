import "./styles.css"
import {Link} from "react-router-dom"

export default function MuscleGroup({title, image, id}) {
  return (
    <Link to={`/exercises/${id}`}>
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