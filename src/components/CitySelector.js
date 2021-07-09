import React, {useState} from 'react';
import {Row, Col, FormControl, Button} from 'react-bootstrap';
const CitySelector = ({onSearch}) => {
    const [city, setCity] = useState('');

    return (
      <>
        <Row>
          <Col>
            <h1>Search your city</h1>
          </Col>
        </Row>

        <Row>
          <Col xl={5}>
            <FormControl
              placeholder="Enter city"
              onChange={(event) => setCity(event.target.value)}
              value={city}
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Button onClick={() => onSearch(city)}>Check Weather</Button>
          </Col>
        </Row>
      </>
    );
  };

export default CitySelector;