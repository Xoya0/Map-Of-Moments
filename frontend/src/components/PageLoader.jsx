import './PageLoader.css';

const PageLoader = () => {
  return (
    <div className="page-loader">
      <div className="loader-content">
        <div className="loader-spinner"></div>
        <div className="loader-text">Loading...</div>
      </div>
    </div>
  );
};

export default PageLoader; 