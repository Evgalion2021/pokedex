import { Select } from 'antd';
import { useEffect } from 'react';
import { Input } from 'antd';
import classes from './Filter.module.scss';

const Filter = ({
  getTags,
  tags,
  changeSelectedTags,
  getPokemonNameForSearch,
}) => {
  useEffect(() => {
    getTags();
  }, [getTags]);
  const { Search } = Input;
  const { Option } = Select;
  const children = [];
  for (let i = 0; i < tags.length; i++) {
    children.push(<Option key={tags[i]}>{tags[i]}</Option>);
  }

  return (
    <div className={classes.container}>
      <Select
        showArrow
        mode='tags'
        style={{ width: '40%', textAlign: 'left', marginRight: '10%' }}
        placeholder='Pokemon Tags Search'
        onChange={changeSelectedTags}
      >
        {children}
      </Select>
      <Search
        style={{ width: '40%', textAlign: 'right', marginLeft: '10%' }}
        placeholder='Pokemon Name Search'
        onSearch={getPokemonNameForSearch}
        enterButton
      />
    </div>
  );
};

export default Filter;
