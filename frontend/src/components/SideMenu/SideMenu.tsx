import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import Flag from "react-world-flags";
import styles from "../../styles/News.module.css";
import { SideMenuData } from "./SideMenuData";
import { AiOutlineMenu } from "react-icons/ai";

const SideMenu = () => {
  const [showSideMenu, setShowSideMenu] =
    useState<boolean>(false);

  const handleShowSideMenu = () => {
    setShowSideMenu(true);
  };

  const handleCloseSideMenu = () => {
    setShowSideMenu(false);
  };

  return (
    <>
      <Button
        variant="warning"
        onClick={handleShowSideMenu}
        size="sm"
      >
        <AiOutlineMenu />
      </Button>
      <Offcanvas
        show={showSideMenu}
        onHide={handleCloseSideMenu}
        keyboard={true}
        className="bg-light"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div
              className={`rounded bg-dark rounded px-2 d-flex flex-row justify-content-center align-items-center py-2 h3  text-warning ${styles.boxTitle}`}
            >
              Choose Country
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            {SideMenuData.map((country, index) => (
              <Link
                to={`/country/${country.code}`}
                onClick={handleCloseSideMenu}
                key={index}
              >
                <div
                  className={`rounded bg-secondary d-flex gap-3 justify-content-start align-items-center text-white px-3 py-2 h4 text-white ${styles.boxTitle} ${styles.boxHover}`}
                >
                  <Flag
                    code={`${country.code}`}
                    fallback={<span>Unknown</span>}
                    height={38}
                  />
                  {country.name}
                </div>
              </Link>
            ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default SideMenu;
