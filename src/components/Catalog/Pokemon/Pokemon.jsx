import { Col } from 'antd';
import classes from './Pokemon.module.scss';

const Pokemon = ({ pokemon, getTagColor }) => {
  const { img, name, id, tags } = pokemon;

  return (
    <Col xs={24} sm={12} md={8} lg={6}>
      <div className={classes.item}>
        <img src={img} alt='pokemon' className={classes.img}></img>
        <div className={classes.description}>
          <div>{id}</div>
          <div>{name}</div>
          <div>
            {tags.map((tag) => {
              return (
                <div
                  key={tag.type.name}
                  style={{ background: getTagColor(tag.type.name) }}
                  className={classes.tag}
                >
                  {tag.type.name}{' '}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Col>
  );
};
// TODO: don`t use export defaults;
export default Pokemon;
