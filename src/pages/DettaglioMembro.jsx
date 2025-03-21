import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DettaglioMembro() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  console.log(`${import.meta.env.VITE_MEMBER_DETAIL_API_KEY}/${id}`);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_MEMBER_DETAIL_API_KEY}/${id}`)
      .then((resp) => {
        setData(resp.data);
      });
  }, [id]);
  return (
    <>
      <Carousel title={`${data.first_name} ${data.last_name?.toUpperCase()}`} />
      <div className="container">
        <h2 className="text-center py-5">Dettaglio </h2>
        <div className="card my-3" style={{ width: "30rem" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={`${import.meta.env.VITE_MEMBER_IMG_API_KEY}${
                  data.profile_img
                }`}
                alt={data.last_name}
                className="img-fluid rounded-start"
                style={{ maxHeight: "150px", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{data.role?.role}</h5>
                <p className="card-text">
                  {data.first_name} {data.last_name?.toUpperCase()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
