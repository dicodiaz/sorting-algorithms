import { FC, useState } from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import './App.css';
import VerticalBarChart from './components/VerticalBarChart';
import sortingAlgorithms from './data/sorting-algorithms-data';
import unsortedData from './data/unsorted-data';
import { sleep } from './logic/utils';

const App: FC = () => {
  const [chartDataset, setChartDataset] = useState(unsortedData);
  const [chartColoredIndex, setChartColoredIndex] = useState<number | undefined>(undefined);
  const [chartTitle, setChartTitle] = useState('Please pick algorithm');
  const [sleepMs, setSleepMs] = useState('10');
  const [disabled, setDisabled] = useState(false);

  const handleReset = () => {
    setChartTitle('Please pick algorithm');
    setChartDataset(unsortedData);
    setChartColoredIndex(undefined);
  };

  return (
    <Container
      className="px-0 d-flex flex-column justify-content-center vh-100 bg-dark text-white"
      as="main"
      fluid
    >
      <Row className="mx-0 g-0 justify-content-center" xs="auto">
        <Col>
          <VerticalBarChart
            title={chartTitle}
            dataset={chartDataset}
            coloredIndex={chartColoredIndex}
          />
          <Row className="mx-0 g-0 gy-2" xs={3} sm={4} md={5} lg={6} xl={7} xxl={7}>
            {sortingAlgorithms.map((sortingAlgorithm) => {
              const { id, name, implementation } = sortingAlgorithm;

              const handleClick = async () => {
                setChartTitle(name);
                const history = implementation(chartDataset);
                setDisabled(true);
                for (let i = 0; i < history.length; i++) {
                  const { currentArray, currentIndex } = history[i];
                  setChartDataset(currentArray);
                  setChartColoredIndex(currentIndex);
                  await sleep(Number(sleepMs));
                }
                setDisabled(false);
              };

              return (
                <Col key={id} className="d-flex justify-content-center">
                  <Button
                    variant="outline-light"
                    onClick={handleClick}
                    size="sm"
                    disabled={disabled}
                  >
                    {name}
                  </Button>
                </Col>
              );
            })}
          </Row>
          <Row className="mx-0 mt-3 justify-content-center" xs="auto">
            <Col xs={4} md={3} lg={2}>
              <InputGroup size="sm">
                <Form.Control
                  type="number"
                  value={sleepMs}
                  onChange={(e) => setSleepMs(e.currentTarget.value)}
                  step="5"
                  disabled={disabled}
                />
                <InputGroup.Text>ms</InputGroup.Text>
              </InputGroup>
            </Col>
            <Col>
              <Button variant="danger" onClick={handleReset} size="sm" disabled={disabled}>
                Reset
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
