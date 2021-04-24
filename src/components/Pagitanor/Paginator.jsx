import { Pagination } from "antd";
import classes from "./Paginator.module.scss"


const Paginator = () => {

    function onShowSizeChange(current, pageSize) {
        console.log(current, pageSize);
    }
    return (<div className={classes.container}>
        <Pagination
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            defaultCurrent={3}
            total={500}
        /></div>
    );
}

export default Paginator;
