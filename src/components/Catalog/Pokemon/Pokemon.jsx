import { Col } from "antd";
import classes from "./Pokemon.module.scss"

const Pokemon = ({ pokemon }) => {
  const { img, name, id, tags } = pokemon
  return (
    <Col xs={24} sm={12} md={8} lg={6}>
      <div className={classes.item}>
        <img src={img} className={classes.img}></img>
        <div className={classes.description}><div>{id}</div>
          <div>{name}</div>
          <div>
            {tags.map((tag) => {
              return <div className={classes.tag}>{tag.type.name}</div>
            })}
          </div>
        </div>
      </div>
    </Col>
  );
}

export default Pokemon;
