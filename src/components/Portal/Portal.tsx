import ReactDOM from 'react-dom';

type PortalProp = {
    children: React.ReactNode;
};

const Portal: React.FC<PortalProp> = ({ children }) => {
    const portalRoot = document.getElementById('portal') as HTMLElement;

    return ReactDOM.createPortal(children, portalRoot);
};
export default Portal;
