import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { newsViewChange, RootState } from "../../store/store";

const LayoutToggler = () => {
  const state = useSelector(
    (state: RootState) => state.isNewsGrid
  );
  const dispatch = useDispatch();

  return (
    <>
      <div className="px-2 d-flex align-items-center justify-content-center py-1 gap-2">
        <Button
          variant="warning"
          size="sm"
          onClick={() => dispatch(newsViewChange())}
          disabled={state ? true : false}
        >
          Grid
        </Button>
        <Button
          variant="warning"
          size="sm"
          onClick={() => dispatch(newsViewChange())}
          disabled={state ? false : true}
        >
          List
        </Button>
      </div>
    </>
  );
};

export default LayoutToggler;
