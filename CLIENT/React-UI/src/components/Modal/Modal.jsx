import "./Modal.css";
export const Modal = ({ children, setShowModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button className="modal-btn" onClick={() => setShowModal("")}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
