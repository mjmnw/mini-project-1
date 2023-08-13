// import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import Productcard from "../../Components/Productcard";

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const fetchAllProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/event");
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProductList = async () => {
    try {
      const res = await axios.get("http://localhost:5000/event", {
        params: {
          ticket_category: selectedCategory,
        },
      });
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await axios.get("http://localhost:5000/ticketCategories");
      setCategories(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (selectedCategory) {
      fetchProductList();
    } else {
      fetchAllProducts();
    }
  }, [selectedCategory]);

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <main>
        <Navbar />
        <div
          style={{
            display: "flex",
            backgroundColor: "black",
            gap: 10,
            justifyContent: "center",
            paddingTop: 5,
            color: "white",
          }}
        >
          <a
            onClick={() => setSelectedCategory("")}
            style={{ cursor: "pointer" }}
          >
            All
          </a>
          {categories.length > 0 &&
            categories.map((ticket_category) => {
              return (
                <a
                  key={ticket_category.id}
                  onClick={() => setSelectedCategory(ticket_category.ticket_category)}
                  style={{ cursor: "pointer" }}
                >
                  {ticket_category.ticket_category}
                </a>
              );
            })}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            backgroundColor: "black",
          }}
        >
          {products.length > 0 &&
            products.map((product) => {
              return <Productcard key={product.id} product={product} />;
            })}
        </div>
        <Footer />
      </main>
    </>
  );
}

export default Home;
