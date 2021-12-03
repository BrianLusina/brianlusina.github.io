import { FunctionComponent } from 'react';
import { ToastContainer, Slide, ToastTransition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

type NotificationProps = {
  position?:
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'top-center'
    | 'bottom-center';
  autoClose?: number;
  hideProgressBar?: boolean;
  newestOnTop?: boolean;
  closeOnClick?: boolean;
  rtl?: boolean;
  pauseOnFocusLoss?: boolean;
  draggable?: boolean;
  pauseOnHover?: boolean;
  transition?: ToastTransition;
};

/**
 * Notification wrapper component around A Notification provider
 * */
const NotificationContainer: FunctionComponent<NotificationProps> = ({
  position = 'top-right',
  autoClose = 5000,
  hideProgressBar = true,
  newestOnTop = true,
  closeOnClick = true,
  rtl = false,
  pauseOnFocusLoss = true,
  draggable = false,
  pauseOnHover = true,
  transition = Slide,
}: NotificationProps) => {
  return (
    <ToastContainer
      position={position}
      autoClose={autoClose}
      hideProgressBar={hideProgressBar}
      newestOnTop={newestOnTop}
      closeOnClick={closeOnClick}
      transition={transition}
      rtl={rtl}
      pauseOnFocusLoss={pauseOnFocusLoss}
      draggable={draggable}
      pauseOnHover={pauseOnHover}
    />
  );
};

export default NotificationContainer;
