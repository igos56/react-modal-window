import "./styles.scss";

const Loader = () => {
    return (
        <div className="loader">
            <div className="ball"></div>
            <div className="ball"></div>
            <div className="ball"></div>
            <span>Loading ...</span>
        </div>
    );
}

export default Loader;