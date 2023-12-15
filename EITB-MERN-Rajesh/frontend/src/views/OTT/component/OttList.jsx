import { Container, Row, Col } from "reactstrap";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import useAPI from "../../../hooks/useAPI";
import FilterSection from "./FilterSection";
import ClipLoader from "react-spinners/ClipLoader";
const OttListInfo = () => {
  const { getData, postData, isFetching } = useAPI();
  const [OttList, setOttList] = useState([]);

  useEffect(() => {
    getOTTData();
  }, []);

  const getOTTData = (filters = {}) => {
    const params = new URLSearchParams(filters).toString();
    getData(`/api/ott-data?${params}`).then((res) => {
      if (res.status) {
        console.log(res);
        setOttList(res.data.results);
      }
    });
  };

  return (
    <>
      <FilterSection onFilterChange={getOTTData} />
      <Container>
        <Row className="justify-content-center p-5 mt-5 row-gap-5">
          {isFetching ? (
            <Col lg={12} className="text-center">
              <ClipLoader
                color={"blue"}
                loading={true}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </Col>
          ) : OttList.length > 0 ? (
            OttList.map((info) => {
              return (
                <Col xs={12} sm={6} md={4} lg={3} xl={3}>
                  <MovieCard key={info.imdbid} info={info} />
                </Col>
              );
            })
          ) : (
            <Col lg={12}><p className="text-center">No Records Found</p></Col>
          )}
        </Row>
      </Container>
    </>
  );
};

export default OttListInfo;
