import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import axios from "axios";
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
          <div className="row">
            {members.map((member) => (
              <div className="col-md-3 g-3" key={member.id}>
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={`${import.meta.env.VITE_MEMBER_IMG_API_KEY}${
                      member.profile_img
                    }`}
                    alt={member.last_name}
                  />

                  <div className="card-body">
                    <h5 className="card-title">{member.role?.role}</h5>
                    <p className="card-text">
                      {member.first_name} {member.last_name.toUpperCase()}
                    </p>
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
