import { Col } from "antd";
import classes from "./Pokemon.module.scss"

const Pokemon = (props) => {
    return (

        <Col xs={24} sm={12} md={8} lg={6}>
            <div className={classes.item}>
                <img src={props.img}></img>
                <div className={classes.description}><div>{props.id}</div>
                    <div>{props.name}</div>
                    <div>
                        <div className={classes.tag}>{props.firstTag}</div>
                        <div className={classes.tag}>{props.secondTag}</div>
                    </div>
                </div>
            </div>
        </Col>

    );
}

export default Pokemon;
