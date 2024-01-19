import "./Header.sass";
const header = () => {
  return (
    <>
      <div className="welcome-txt">
        <h1>
          Welcome to my <span>Portfolio</span>
        </h1>
        <div className="scroll-icon">
          <iframe
            className="scrolling"
            src="https://lottie.host/embed/4d32eb93-beec-45ce-b59b-2bfe0154a8d2/VrkViJ3Mfx.json"
          ></iframe>
        </div>
      </div>
      
    </>
  );
};

export default header;
