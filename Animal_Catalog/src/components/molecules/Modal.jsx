import { forwardRef, useImperativeHandle, useRef } from "react";

import Button from "../atoms/Button";
import { ButtonDisplay } from "../../enums/button";

import "../../styles/molecules/Modal.css";

const Modal = forwardRef(function Modal(
	{ children, hasCloseButton, onClose, hasActionButton, onClick },
	ref,
) {
	const modalRef = useRef();

	useImperativeHandle(ref, () => {
		return {
			open() {
				modalRef.current.showModal();
			},
			close() {
				modalRef.current.close();
			},
		};
	});

	return (
		<dialog className="modal" ref={modalRef}>
			<form className="dialog">
				{children}
				<div className="modal-button-container-of-doom">
					{hasCloseButton && (
						<Button onClick={onClose} display={ButtonDisplay.DANGERTEXT}>
							Close
						</Button>
					)}
					{hasActionButton && (
						<Button onClick={onClick} display={ButtonDisplay.PRIMARY}>
							Accept
						</Button>
					)}
				</div>
			</form>
		</dialog>
	);
});

export default Modal;
