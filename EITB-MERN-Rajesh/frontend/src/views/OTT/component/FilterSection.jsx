import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row, Container } from "react-bootstrap";
import useAPI from "../../../hooks/useAPI";
import { wait } from "../../../utils/helper";

const FilterSection = ({ onFilterChange }) => {
  const [genres, setGenres] = useState([]);
  const [languages, setLanguages] = useState([]);
  const { getData } = useAPI();
  const [filters, setFilters] = useState({});

  useEffect(() => {
    fetchParams();
  }, []);

  const fetchParams = async () => {
    try {
      let paramURL = "/api/params-for-listing?param=";
      await wait(2000) // used wait to avoid err from Rapi API(Too many req)
      const genresResponse = await getData(`${paramURL}genre`);
      await wait(2000) // used wait to avoid err from Rapi API(Too many req)
      const languagesResponse = await getData(`${paramURL}language`);
      if (genresResponse.status) {
        setGenres(genresResponse.data);
      }
      if (languagesResponse.status) {
        setLanguages(languagesResponse.data);
      }
    } catch (error) {
      console.error("Error fetching params:", error);
    }
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleFilterSubmit = (event) => {
    event.preventDefault();
    onFilterChange(filters);
  };

  return (
    <Container className="mt-3">
      <Form onSubmit={handleFilterSubmit}>
        <Row>
          <Col xs={12} sm={6} md={4} lg={3} xl={3}>
            <Form.Group controlId="startYear">
              <Form.Label>Start Year</Form.Label>
              <Form.Control
                type="number"
                name="start_year"
                value={filters.start_year}
                onChange={handleFilterChange}
                placeholder="Enter start year (1970-2020)"
                min="1970"
                max="2020"
              />
            </Form.Group>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} xl={3}>
            <Form.Group controlId="endYear">
              <Form.Label>End Year</Form.Label>
              <Form.Control
                type="number"
                name="end_year"
                value={filters.end_year}
                onChange={handleFilterChange}
                placeholder="Enter end year (1970-2020)"
                min="1970"
                max="2020"
              />
            </Form.Group>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} xl={3}>
            <Form.Group controlId="minImdb">
              <Form.Label>Min IMDb</Form.Label>
              <Form.Control
                type="number"
                name="min_imdb"
                value={filters.min_imdb}
                onChange={handleFilterChange}
                placeholder="Enter min IMDb"
              />
            </Form.Group>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} xl={3}>
            <Form.Group controlId="maxImdb">
              <Form.Label>Max IMDb</Form.Label>
              <Form.Control
                type="number"
                name="max_imdb"
                value={filters.max_imdb}
                onChange={handleFilterChange}
                placeholder="Enter max IMDb"
              />
            </Form.Group>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} xl={3}>
            <Form.Group controlId="genre">
              <Form.Label>Genre</Form.Label>
              <Form.Control
                as="select"
                name="genre"
                value={filters.genre}
                onChange={handleFilterChange}
              >
                <option value="" hidden>
                  Select Genre
                </option>
                {genres.map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} xl={3}>
            <Form.Group controlId="language">
              <Form.Label>Language</Form.Label>
              <Form.Control
                as="select"
                name="language"
                value={filters.language}
                onChange={handleFilterChange}
              >
                <option value="">Select Language</option>
                {languages.map((language) => (
                  <option key={language} value={language}>
                    {language}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>

          <Col xs={12} sm={6} md={4} lg={3} xl={3}>
            <Form.Group controlId="type">
              <Form.Label>Type</Form.Label>
              <Form.Control
                as="select"
                name="type"
                value={filters.type}
                onChange={handleFilterChange}
              >
                <option value="">Select Type</option>
                <option value={"movie"}>Movie</option>
                <option value={"show"}>Show</option>
              </Form.Control>
            </Form.Group>
          </Col>

          <Col xs={12} sm={6} md={4} lg={3} xl={3}>
            <Form.Group controlId="sort">
              <Form.Label>Sort</Form.Label>
              <Form.Control
                as="select"
                name="sort"
                value={filters.sort}
                onChange={handleFilterChange}
              >
                <option value="" hidden>
                  Sort by
                </option>
                <option value={"highestrated"}>Highestrated</option>
                <option value={"lowestrated"}>Lowestrated</option>
                <option value={"latest"}>Latest</option>
                <option value={"oldest"}>Oldest</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit" className="mt-2">
          Apply Filters
        </Button>
      </Form>
    </Container>
  );
};

export default FilterSection;
