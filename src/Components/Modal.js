import { useDispatch } from "react-redux"
import { showModal, clearCart } from "../redux/action"

export const Modal = () => {

    const dispatch = useDispatch()

    const handleClick = e => {
        if (e.target.textContent === 'Да') dispatch(clearCart())
        dispatch(showModal(false))
    }

    return (
        <div className="modal">
            <div className="modal__content">
                <p className="modal__text">Полностью очистить корзину?</p>
                <div className="modal__control">
                    <button onClick={handleClick}>Да</button>
                    <button onClick={handleClick}>Нет</button>
                </div>
            </div>
        </div>
    )
}