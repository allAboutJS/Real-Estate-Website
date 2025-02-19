export default function Modal({ children }) {
    return (
        <>
            <div className="inset-0 top-0 fixed bg-black bg-opacity-10 backdrop-blur-sm z-50"></div>
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-lg z-50">
                <div>{children}</div>
            </div>
        </>
    );
}
