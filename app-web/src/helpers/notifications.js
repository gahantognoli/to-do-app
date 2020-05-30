import { toast } from 'react-toastify';

const defaultOption = {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
}

export default {
    success: (text) => {
        toast(text, {
            ...defaultOption,
            type: 'info'
        });
    },
    error: (text) => {
        toast(text, {
            ...defaultOption,
            type: 'error'
        });
    }
}