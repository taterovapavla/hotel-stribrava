import './style.css'

export const Room = ({id, title, body, image, onSelect}) => {
  return (
    <div onClick={() => onSelect(id)} className="card">
          <img className="card__image" src={image} />
          <div className="card__title">{title}</div>
          <div className="card__body">{body}</div>
    </div>
  )
}