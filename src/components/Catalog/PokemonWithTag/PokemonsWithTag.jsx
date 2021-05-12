import { Col, Row } from 'antd';

const PokemonsWithTag = ({ selectedTags, pokemonsWithTags }) => {
  return (
    <Row>
      {selectedTags.map((tag) => {
        return (
          <Col xs={24} sm={12} md={8} lg={6}>
            {tag}
            {pokemonsWithTags}
          </Col>
        );
      })}
    </Row>
  );
};
// TODO: don`t use export defaults;
export default PokemonsWithTag;
