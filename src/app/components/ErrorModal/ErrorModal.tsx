import "../../styles/ErrorModal.scss";
import { ErrorFormat } from "../../types/Error";

const ErrorModal = (error: ErrorFormat) => {
    return (
        <div className='error-modal'>
            <div className='error-modal__content'>
                <h2>{error.title}</h2>
                <p>{error.message}</p>
                <div>
                    <button
                        onClick={error.onClose}
                        className='error-modal__actions'
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorModal;
