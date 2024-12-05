import Button from "./Button";
import  useKeyDown  from "../hooks/useKeyDown";

const Modal = ({
  title,
  proceedButtonText,
  closeButtonText,
  onProceed,
  onClose,
  children,
}) => {
  useKeyDown("Escape", onClose);

  const proceedAndClose = () => {
    onProceed?.();
    onClose();
  };

  // Prevents closing when we click inside the modal
  const preventAutoClose = (e) => e.stopPropagation();

  // ------------------------------------
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={preventAutoClose}>
        <div className="modal-top-section">
          <h3>{title}</h3>
        </div>

        <div className="modal-middle-section" >{children}</div>

        <div className="modal-bottom-section">
          {!!proceedButtonText && (
            <Button text={proceedButtonText} onClick={proceedAndClose} />
          )}

          <Button text={closeButtonText || "Cancel"} onClick={onClose} />
        </div>
      </div>
    </div>
  );
};

export default Modal;