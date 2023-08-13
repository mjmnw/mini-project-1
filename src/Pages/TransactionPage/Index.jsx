import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../Components/Productcard";
import { useSelector } from "react-redux";

function TransactionDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const userSelector = useSelector((state) => state.auth);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/event/${productId}`);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const buyTicketHandler = async () => {
    try {
      await axios.patch(`http://localhost:5000/event/${productId}`, {
        ticket_stock: product.ticket_stock - 1,
      });
      await axios.post(`http://localhost:5000/ticketPurchaseHistory`, {
        user_uniqueid: userSelector.id,
        ticket_uniqueid: product.id,
        ticket_purchase_amount: 1,
      });
      fetchProduct();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col pt-20 bg-black px-5 items-center">
        {product?.id && <ProductCard product={product} />}
        <div className="text-white">
          <button className="text-3xl text-red-100 border border-solid rounded-lg border-2 mb-40 mt-5" onClick={buyTicketHandler}>
            Buy Now
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TransactionDetail;
