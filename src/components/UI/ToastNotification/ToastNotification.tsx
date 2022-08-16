import { toast } from 'react-toastify';

/*enum NotificationTypes {
    info = "info",
    success = "success",
    warning = "warning",
    error = "error"
}*/

interface INotifyConfig {
    text: string,
    notificationType: "info" | "success" | "warning" | "error"
}

const notificationType = {
    info: toast.info,
    success: toast.success,
    warning: toast.warning,
    error: toast.error
}

const Notify = (config: INotifyConfig) => {
    notificationType[config.notificationType](config.text, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
    });
}

export default Notify;
