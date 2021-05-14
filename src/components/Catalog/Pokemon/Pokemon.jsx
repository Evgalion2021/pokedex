import { Col } from 'antd';
import classes from './Pokemon.module.scss';

export const Pokemon = ({ pokemon }) => {
  const { img, name, id, tags } = pokemon;
  const getTagColor = (tag) => {
    switch (tag) {
      case 'normal':
        return '#A4ACAF';
      case 'fighting':
        return '#D56723';
      case 'flying':
        return '#3DC7EF';
      case 'poison':
        return '#B97FC9';
      case 'ground':
        return '#AB9842';
      case 'rock':
        return '#B97FC9';
      case 'bug':
        return '#729F3F';
      case 'ghost':
        return '#7B62A3';
      case 'steel':
        return '#9EB7B8';
      case 'fire':
        return '#FD7D24';
      case 'water':
        return '#4592C4';
      case 'grass':
        return '#9BCC50';
      case 'electric':
        return '#EED535';
      case 'psychic':
        return '#F366B9';
      case 'ice':
        return '#51C4E7';
      case 'dragon':
        return '#F16E57';
      case 'dark':
        return '#707070';
      case 'fairy':
        return '#FDB9E9';
      default:
        console.log('Sorry, we are out of ' + tag + '.');
    }
  };

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
