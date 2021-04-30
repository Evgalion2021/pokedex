import { Pagination } from "antd";
import { observer } from "mobx-react";
import classes from "./Paginator.module.scss"


const Paginator = ({ onChangePage }) => {

  return (<div className={classes.container}>
    <Pagination
      showSizeChanger
      pageSizeOptions={[10, 20,]}
      total={500}
      onChange={onChangePage}
    /></div>
  );
}

export default Paginator;
