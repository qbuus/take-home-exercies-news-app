import { formatDate } from "../../utils/formatDate";
import { useState, useEffect } from "react";

const GetTime = () => {
  const [dateState, setDateState] = useState<string>(
    new Date().toString()
  );
  useEffect(() => {
    const id = setInterval(
      () => setDateState(new Date().toString()),
      1000
    );

    return () => {
      clearInterval(id);
    };
  }, []);

  const dateFormat = formatDate(dateState);

  return <p className="h6">{dateFormat}</p>;
};

export default GetTime;
