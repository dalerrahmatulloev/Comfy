import "./HeaderPage.css"

const HeaderPage = ({ name }) => {
  return (
    <div className="headerPage">
      <div className="headerPage__content">
        <h1>Home / {name}</h1>
      </div>
    </div>
  );
};

export default HeaderPage;
