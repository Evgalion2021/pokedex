import { Pagination } from "antd";
import classes from "./Paginator.module.scss"


const Paginator = (props) => {
    function onChange(page, pageSize) {
        props.onChangePage(page, pageSize)
    }

    return (<div className={classes.container}>
        <Pagination
            showSizeChanger
            pageSizeOptions={[10, 20]}
            total={500}
            onChange={onChange}
        /></div>
    );
}

export default Paginator;
