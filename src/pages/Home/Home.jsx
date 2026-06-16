import { useEffect, useState } from "react";
import "./Home.css";

// Мухаммад
const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("../../../bd.json")
      .then((Respons) => Respons.json())
      .then((data) => setData(data.products));
  }, []);

  return <div className="home"></div>;
};

export default Home;