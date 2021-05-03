import { Pagination } from "antd";
import classes from "./Paginator.module.scss"


const Paginator = ({ onChange }) => {

  return (<div className={classes.container}>
    <Pagination
      showSizeChanger
      pageSizeOptions={[10, 20,]}
      total={500}
      onChange={onChange}
    /></div>
  );
}

export default Paginator;
