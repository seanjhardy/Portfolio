import "./card.css"

export const CardOverlay = ({title, info, children, style={}}) => {
  return (
    <div className={"card-overlay"} style={style}>
      {children}
      <div className={"card-overlay-foreground"}>
          <span style={{fontSize: 25}}>{title}</span>
          <br/>
          <span style={{fontSize: 15, fontFamily: "Roboto"}}>{info}</span>
      </div>
    </div>
  )
}