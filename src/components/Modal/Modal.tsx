// import "./Modal.scss"

export const Modal = (props) => {
  return (
    <div
      className={`modal__wrapper ${props.isOpened ? "open" : "close"}`}
      style={{ ...props.style }}
    >
      <div className="modal__body">
        <div className="modal__close" onClick={props.onModalClose}></div>
        <h2>{props.title}</h2>
        <hr />
        {props.children}
      </div>
    </div>
  )
}
