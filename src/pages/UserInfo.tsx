import { useParams, Link } from "react-router-dom";
import { useContactQuery } from "../services/contactApi";
import { toast } from "react-toastify";
import "./UserInfo.css";
import { useEffect } from "react";

const UserInfo = () => {
  const { id } = useParams();
  //isFetching, isLoading
  const { data, error } = useContactQuery(id!);

  useEffect(() => {
    if (error) {
      toast.error("Something went wrong");
    }
  }, [error]);
  return (
    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card-header">
          <p>User Contact Detail</p>
        </div>
        <div className="container">
          <strong>ID: </strong>
          <span>{id}</span>
          <br />
          <br />
          <strong>Name: </strong>
          <span>{data && data.name}</span>
          <br />
          <br />
          <strong>Email: </strong>
          <span>{data && data.contact}</span>
          <br />
          <br />
          <strong>Contact: </strong>
          <span>775675673</span>
          <br />
          <br />
          <Link to="/">
            <button className="btn btn-edit">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
