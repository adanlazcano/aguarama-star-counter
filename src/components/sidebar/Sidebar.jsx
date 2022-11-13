import { Star } from "@material-ui/icons";
import { useState, useEffect } from "react";
import * as services from "../../services/services";
import "./css/sidebar.scss";
import SideInformation from "../sideinformation/SideInformation";
import Loading from "../loading/Loading";

// Right Bar

const Sidebar = ({ search }) => {
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(
    (_) => {
      const getClient = async (_) => {
        if (search) {
          const res = await services.getClient(search);
          setClient(res.data);
          setLoading(false);
        }
      };
      getClient();
      return (_) => {
        setClient(null);
        setLoading(true);
      };
    },
    [search]
  );

  const SideBarNoSearch = (_) => {
    return (
      <section className="sidebar">
        <div className="sidebarContent">
          <h3>Acumula 5 Estrellas</h3>
          <Star className="star" />
          <Star className="star" />
          <Star className="star" />
          <Star className="star" />
          <Star className="star" />
          <h5>Rifa TV Samsung 43''</h5>
          <img
            src="https://images.samsung.com/is/image/samsung/latin-uhd-tu7000-un43tu7000pxpa-rperspectivetitangray-228856519?$720_576_PNG$"
            alt=""
          />
        </div>

        <div className="sidebarContent">
          <h3>Acumula 7 Estrellas</h3>
          <Star className="star" />
          <Star className="star" />
          <Star className="star" />
          <Star className="star" />
          <Star className="star" />
          <Star className="star" />
          <Star className="star" />
          <h5>Llenado de Garraf&oacute;n Gratis</h5>
          <img
            style={{ marginTop: "15px" }}
            src="assets/img/garrafon.png"
            alt=""
          />
        </div>
      </section>
    );
  };

  const SideBarSearch = (_) => {
    return (
      <>
        {client ? (
          <SideInformation client={client} />
        ) : (
          <>
            <section className="sidebar">
              <>
                {loading ? (
                  <Loading />
                ) : (
                  <span style={{ textAlign: "center" }}>
                    No se encontraron resultados
                  </span>
                )}
              </>
            </section>
          </>
        )}
      </>
    );
  };

  return <>{search ? <SideBarSearch /> : <SideBarNoSearch />}</>;
};

export default Sidebar;
