import { clsx } from "clsx";
import { createPortal } from "react-dom";

export function Modal({ isOpen, onClose, className, children }) {
    if (!isOpen) {
        return;
    }

    function handleClick(e) {
        const inModal = e.target.closest("[data-id=modal]");
        if (!inModal) {
            onClose();
        }
    }

    const Modal = (
        <div
            className="fixed inset-0 bg-transparent flex justify-center items-top"
            onClick={handleClick}
        >
            <div data-id="modal" className={clsx(className, "h-min")}>
                {children}
            </div>
        </div>
    );

    return createPortal(Modal, document.getElementById("modals"));
}
