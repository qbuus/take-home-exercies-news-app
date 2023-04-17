import { Link } from "react-router-dom";

import { Button } from "react-bootstrap";

const HeaderBrand = () => {
  return (
    <Link to="/">
      <Button variant="warning">gnNews</Button>
    </Link>
  );
};

export default HeaderBrand;
