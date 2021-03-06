import {modalAction, modalActionTypes} from "../store/types/modals";
import {useDispatch} from "react-redux";

export default function useModal() {
    const dispatch = useDispatch();

    return (type: any, isOpen: boolean = false, popup: boolean = false) => {
        isOpen ? document.body.style.overflow = "hidden" 
            : document.body.removeAttribute('style');

            dispatch<modalAction>(type({isOpen, popup }))
    }
}
