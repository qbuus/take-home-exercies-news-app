import { Container } from "react-bootstrap";
import GetTime from "./Date";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Footer = () => {
  const articlesCount = useSelector(
    (state: RootState) => state.newsCount
  );

  return (
    <footer className="footer">
      <div className="container-fluid bg-secondary">
        <Container>
          <div className="d-flex flex-col py-4 gap-5">
            <div className="d-flex flex-column gap-1">
              <p className="h6">Current Time:</p>
              <GetTime />
            </div>
            <div className="d-flex flex-column gap-1">
              <p className="h6">Articles Count:</p>
              <p className="text-center h6">{articlesCount}</p>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
