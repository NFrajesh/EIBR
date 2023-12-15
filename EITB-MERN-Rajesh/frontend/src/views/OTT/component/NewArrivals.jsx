import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Col, Container, Row } from "reactstrap";
import useAPI from "../../../hooks/useAPI";
import MovieCard from "./MovieCard";
import NewArrivalFilterSection from "./NewArrivalFilterSection";
const NewArrivals = () => {
  const { getData, postData, isFetching } = useAPI();
  const [OttList, setOttList] = useState([]);

  useEffect(() => {
    getNewArrivalOTTData();
  }, []);

  const getNewArrivalOTTData = (filters = { region: "IN" }) => {
    const params = new URLSearchParams(filters).toString();
    getData(`/api/new-arrival-ott-data?${params}`).then((res) => {
      if (res.status) {
        console.log(res);
        setOttList(res.data.results);
      }
    });
  };

  return (
    <>
      <NewArrivalFilterSection onFilterChange={getNewArrivalOTTData} />
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
            <Col lg={12}>
              <p className="text-center">No Records Found</p>
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
};

export default NewArrivals;
