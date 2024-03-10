import "./badge.css"

export const Badge = ({img}) => {
  return (
    <div className={"badge"}>
      <img src={img} className={"badge-icon"}/>
    </div>
  )
}