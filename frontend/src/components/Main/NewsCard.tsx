import { Card } from "react-bootstrap";
import { News } from "../../models/News";
import styles from "../../styles/News.module.css";
import { formatDate } from "../../utils/formatDate";
import { useDispatch, useSelector } from "react-redux";
import { newsCountUpdate, RootState } from "../../store/store";

interface DataType {
  content: News;
  className?: string;
}

const NewsCard = ({ content, className }: DataType) => {
  const state = useSelector(
    (state: RootState) => state.isNewsGrid
  );
  const dispatch = useDispatch();

  const dateFormat = formatDate(content.publishedAt);

  return (
    <Card className={`${className}`}>
      {state && content.urlToImage !== null && (
        <Card.Img variant="top" src={`${content.urlToImage}`} />
      )}
      {state && content.urlToImage === null && (
        <Card.Header>
          Image has not been provied to api yet !
        </Card.Header>
      )}
      <Card.Body className={styles.newsCardBody}>
        <Card.Title>{content?.title}</Card.Title>
        <Card.Text className={styles.newsCardText}>
          {content?.source.name}
        </Card.Text>
      </Card.Body>
      <Card.Footer className={styles.newsCardText}>
        {dateFormat}
      </Card.Footer>
    </Card>
  );
};
export default NewsCard;
