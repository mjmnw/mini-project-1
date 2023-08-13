import axios from "axios";
import { useEffect, useState } from "react";

import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import listimage01 from "../../Utilities/Images/listimage01.png";
import { Navbarband } from "../../Components/Navbarband";
import Productcard from "../../Components/Productcard";
// import userEvent from "@testing-library/user-event";

export default function ListEvent() {
  const [eventData, setEventData] = useState([]);

  const onFetchEvent = async () => {
    try {
      const eventRes = await axios.get(`http://localhost:5000/event`);
      console.log(eventRes.data);
      console.log(">>>");
      setEventData(eventRes.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onFetchEvent();
  }, []);

  return (
    <>
      <body className=" bg-black">
        <header>
          <nav>
            <Navbar />
          </nav>
          <div className="mt-0">
            <img src={listimage01} />
          </div>
          <Navbarband />
        </header>
        <main className="flex justify-center mt-20">
          <div className="grid grid-cols-3 gap-12">
            {eventData.map((value, index) => {
              return <Productcard event={value} className={""} />;
            })}
          </div>
        </main>
        <aside></aside>
        <footer>
          <Footer />
        </footer>
      </body>
    </>
  );
}