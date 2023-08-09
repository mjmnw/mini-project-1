import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import Card from "../../Components/Card";

export default function Merchandise() {
  const [details, setDetails] = useState({})
  const {id} = useParams()
  
  const onFetchData = async() => {
      try {
          const response = await axios.get(`http://localhost:5000/merchandise/${id}`)
          setDetails(response.data)
      } catch (error) {
          console.log("error")
      }
  }

  // const obj = {name: 'Botol', images: ' ', price: 1, stocks: 1, typeId: 0, id: 0}
  // useEffect(() => {
  //     onFetchData()
  // }, [])

  return (
    <>
      <Navbar />
      <h1>
                Detail Product
            </h1>
            <h1>
                {details?.name}
            </h1>
            <span>
                {details?.price}
            </span>
      <Footer />
    </>
  );
}