import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate=useNavigate();
  const handleNavigation=()=>{
    navigate("/products");
  }
  return (
    <>
      <h1>Home Page</h1>
      <Link to={"/products"}>Link</Link>
        <p></p>
      <a href="/products">Href</a>
      <button onClick={handleNavigation}>Click me</button>
    </>
  );
}
