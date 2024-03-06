import "./parallax.scss";

const Parallax = ({ type }) => {
  return (
    <div className="parallax">
      <h1>{type === "about" ? "About Me" : "What I Did?"}</h1>
      <div className="coral"></div>
      <div className="planets"></div>
      <div className="stars"></div>
    </div>
  );
};

export default Parallax;
