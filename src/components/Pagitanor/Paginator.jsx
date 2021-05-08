import { Pagination } from 'antd';
import classes from './Paginator.module.scss';

const Paginator = ({ onChange, totalCount }) => {
  return (
    <div className={classes.container}>
      <Pagination
        showSizeChanger
        pageSizeOptions={[10, 20]}
        total={totalCount}
        onChange={onChange}
      />
    </div>
  );
};

export default Paginator;
