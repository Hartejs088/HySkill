import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../util/UserContext";
import axios from "axios";
import { toast } from "react-toastify";
import { Nav } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import ProfileCard from "./ProfileCard";
import "./Discover.css";

const Discover = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUser();

  const [loading, setLoading] = useState(false);
  const [discoverUsers, setDiscoverUsers] = useState([]);
  const [webDevUsers, setWebDevUsers] = useState([]);
  const [mlUsers, setMlUsers] = useState([]);
  const [otherUsers, setOtherUsers] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/user/registered/getDetails`);
        setUser(data.data);
        localStorage.setItem("userInfo", JSON.stringify(data.data));
      } catch (error) {
        if (error?.response?.data?.message) toast.error(error.response.data.message);
        localStorage.removeItem("userInfo");
        setUser(null);
        await axios.get("/auth/logout");
        navigate("/login");
      }
    };

    const getDiscoverUsers = async () => {
      try {
        const { data } = await axios.get("/user/discover");
        setDiscoverUsers(data.data.forYou);
        setWebDevUsers(data.data.webDev);
        setMlUsers(data.data.ml);
        setOtherUsers(data.data.others);
      } catch (error) {
        if (error?.response?.data?.message) toast.error(error.response.data.message);
        localStorage.removeItem("userInfo");
        setUser(null);
        await axios.get("/auth/logout");
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    getUser();
    getDiscoverUsers();
  }, []);

  const headingStyle = {
    fontFamily: "'Oswald', sans-serif",
    fontWeight: 700,
    fontSize: "2rem",
    color: "#028477",
    marginTop: "2rem",
    marginBottom: "1rem",
  };

  return (
    <div className="discover-page">
      <div className="discover-container">
        {/* Sidebar */}
        <aside className="discover-sidebar">
          <Nav className="flex-column sidebar-nav">
            <Nav.Link href="#for-you" className="sidebar-link">For You</Nav.Link>
            <Nav.Link href="#popular" className="sidebar-link">Popular</Nav.Link>
            <Nav.Link href="#web-development" className="sidebar-link">Web Development</Nav.Link>
            <Nav.Link href="#machine-learning" className="sidebar-link">Machine Learning</Nav.Link>
            <Nav.Link href="#others" className="sidebar-link">Others</Nav.Link>
          </Nav>
        </aside>

        {/* Main Content */}
        <main className="discover-content">
          {loading ? (
            <div className="loading-container">
              <Spinner animation="border" variant="success" />
            </div>
          ) : (
            <>
              <section>
                <h1 id="for-you" style={headingStyle}>For You</h1>
                <div className="profile-grid">
                  {discoverUsers.length > 0 ? (
                    discoverUsers.map((user) => (
                      <ProfileCard
                        key={user.username}
                        profileImageUrl={user.picture}
                        name={user.name}
                        rating={user.rating || 5}
                        bio={user.bio}
                        skills={user.skillsProficientAt}
                        username={user.username}
                      />
                    ))
                  ) : (
                    <p className="no-data">No users to show</p>
                  )}
                </div>
              </section>

              <section>
                <h1 id="popular" style={headingStyle}>Popular</h1>

                <h2 id="web-development" className="subheading">Web Development</h2>
                <div className="profile-grid">
                  {webDevUsers.length > 0 ? (
                    webDevUsers.map((user) => (
                      <ProfileCard
                        key={user.username}
                        profileImageUrl={user.picture}
                        name={user.name}
                        rating={4}
                        bio={user.bio}
                        skills={user.skillsProficientAt}
                        username={user.username}
                      />
                    ))
                  ) : (
                    <p className="no-data">No users to show</p>
                  )}
                </div>

                <h2 id="machine-learning" className="subheading">Machine Learning</h2>
                <div className="profile-grid">
                  {mlUsers.length > 0 ? (
                    mlUsers.map((user) => (
                      <ProfileCard
                        key={user.username}
                        profileImageUrl={user.picture}
                        name={user.name}
                        rating={4}
                        bio={user.bio}
                        skills={user.skillsProficientAt}
                        username={user.username}
                      />
                    ))
                  ) : (
                    <p className="no-data">No users to show</p>
                  )}
                </div>

                <h2 id="others" className="subheading">Others</h2>
                <div className="profile-grid">
                  {otherUsers.length > 0 ? (
                    otherUsers.map((user) => (
                      <ProfileCard
                        key={user.username}
                        profileImageUrl={user.picture}
                        name={user.name}
                        rating={4}
                        bio={user.bio}
                        skills={user.skillsProficientAt}
                        username={user.username}
                      />
                    ))
                  ) : (
                    <p className="no-data">No users to show</p>
                  )}
                </div>
              </section>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default Discover;
