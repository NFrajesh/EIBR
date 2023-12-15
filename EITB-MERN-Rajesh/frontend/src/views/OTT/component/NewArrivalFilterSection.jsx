import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const NewArrivalFilterSection = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({ region: "IN" });

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
            <Form.Group controlId="region">
              <Form.Label>Region</Form.Label>
              <Form.Control
                as="select"
                name="region"
                value={filters.region}
                onChange={handleFilterChange}
              >
                <option value="" hidden disabled>
                  Select Region
                </option>
                <option value={"IN"} selected>
                  India
                </option>
                <option value={"US"}>USA</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col lg={3}>
            <div className="mh-100">
              <Button variant="primary" type="submit" className="mt-4">
                Apply Filters
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default NewArrivalFilterSection;
