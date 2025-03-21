import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import axios from "axios";
import { Link } from "react-router-dom";
import DettaglioMembro from "./DettaglioMembro";
export default function Direttivo() {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    axios.get(import.meta.env.VITE_MEMBER_API_KEY).then((resp) => {
      setMembers(resp.data);
    });
  }, []);
  console.log(members);

  return (
    <>
      <Carousel title="DIRETTIVO" />
      <div className="container">
        <div className="py-4 text-center">
          <div className="row  row-cols-1  row-cols-md-2  row-cols-lg-3  row-cols-lg-4 gy-5">
            {members.map((member) => (
              <div className=" col " key={member.id}>
                <div className="card shadow" style={{ width: "18rem" }}>
                  <img
                    src={`${import.meta.env.VITE_MEMBER_IMG_API_KEY}${
                      member.profile_img
                    }`}
                    alt={member.last_name}
                  />

                  <div className="card-body">
                    <h5 className="card-title">{member.role?.role}</h5>
                    <div className="card-text">
                      {member.first_name} {member.last_name.toUpperCase()}
                    </div>
                    <div className="btn btn-outline-secondary my-2">
                      <Link
                        className="text-decoration-none text-black"
                        to={`/direttivo/${member.id}`}
                      >
                        vai al dettaglio del membro
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
