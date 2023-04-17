import React, { useCallback } from "react";
import { News } from "../../models/News";
import NewsCard from "./NewsCard";
import {
  Container,
  Row,
  Col,
  Modal,
  Button,
} from "react-bootstrap";
import styles from "../../styles/News.module.css";
import { fetchNewsData } from "../../network/fetchData";
import { useDispatch, useSelector } from "react-redux";
import { newsCountUpdate, RootState } from "../../store/store";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

type CountryParams = {
  country: string;
};

const Main = ({ country }: CountryParams) => {
  const [showNewsLoadingError, setShowNewsLoadingError] =
    React.useState<boolean>(false);
  const [newsLoading, setNewsLoading] =
    React.useState<boolean>(true);
  const [newsData, setNewsData] = React.useState<News[]>([]);
  const [clickedIndex, setClickedIndex] =
    React.useState<boolean>(false);
  const [modalData, setModalData] = React.useState<News>();

  const dispatch = useDispatch();
  const gridState = useSelector(
    (state: RootState) => state.isNewsGrid
  );

  const fetchData = useCallback(async () => {
    try {
      setShowNewsLoadingError(false);
      setNewsLoading(true);
      const news = await fetchNewsData(`${country}`);
      setNewsData(news.articles);
      dispatch(newsCountUpdate(news.totalResults));
    } catch (error) {
      console.error(error);
      setShowNewsLoadingError(true);
    } finally {
      setNewsLoading(false);
    }
  }, [country, dispatch]);

  React.useEffect(() => {
    let isSubscribed = false;
    if (!isSubscribed) {
      fetchData();
    }
    return () => {
      isSubscribed = true;
    };
  }, [fetchData]);

  const closeModal = () => {
    setClickedIndex(false);
  };

  const handleClick = (event: any, index: any) => {
    event.preventDefault();
    setClickedIndex(true);
    setModalData(newsData[index]);
  };

  return (
    <Container className="my-4">
      <Row
        className={`g-3 ${styles.newsGrid}`}
        xs={1}
        md={gridState ? 2 : 0}
        xl={gridState ? 3 : 0}
      >
        {newsData.map((news, index) => (
          <Col
            key={index}
            onClick={(e) => handleClick(e, index)}
          >
            <NewsCard
              content={news}
              className={`${styles.cardLook} ${
                gridState ? styles.newsGridLook : ""
              }`}
            />
          </Col>
        ))}
      </Row>
      <React.Fragment>
        {clickedIndex && (
          <Modal
            show={clickedIndex}
            onHide={closeModal}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header>
              <Modal.Title>{modalData?.author}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="d-flex flex-column gap-3">
                {modalData?.description !== null ? (
                  <p className="h6">
                    {modalData?.description}
                  </p>
                ) : (
                  <p className="h6">
                    Description has not been provided to api
                    yet
                  </p>
                )}
                {modalData?.url !== null ? (
                  <p className="h6 text-primary">
                    <a href={modalData?.url}>Source addres</a>
                  </p>
                ) : (
                  <p className="h6">
                    Url has not been provided to api yet
                  </p>
                )}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </React.Fragment>
      {newsLoading && <LoadingSpinner />}
      {showNewsLoadingError && (
        <>
          <Button onClick={() => fetchData()}>
            Fetch Again !
          </Button>
          <p>
            Something went wrong. Please Refresh the page !
          </p>
        </>
      )}
    </Container>
  );
};

export default Main;
