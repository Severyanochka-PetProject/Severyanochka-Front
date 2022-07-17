import {modalAction, modalActionTypes} from "../store/types/modals";
import {useDispatch} from "react-redux";

export default function useCloseModal() {
    const dispatch = useDispatch();

    return (type: modalActionTypes, isOpen: boolean = false, popup: boolean = false) => dispatch<modalAction>({
        type,
        payload: {
            isOpen,
            popup
        }
    })
}
