import { Select } from 'antd';
import { useEffect } from 'react';

const Filter = ({ getTags, tags, changeSelectedTags }) => {
  useEffect(() => {
    getTags();
  }, [getTags]);
  const { Option } = Select;
  const children = [];
  for (let i = 0; i < tags.length; i++) {
    children.push(<Option key={tags[i]}>{tags[i]}</Option>);
  }


  return (<>
    <Select mode="tags" style={{ width: '25%' }} placeholder="Tags Mode" onChange={changeSelectedTags}>
      {children}
    </Select>
  </>
  );
};

export default Filter;
