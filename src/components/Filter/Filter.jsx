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
  // TODO: declare consts before useEffect;
  const { Search } = Input;
  const { Option } = Select;
  // TODO: make function renderTags; use `map` not `for`
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
// TODO: don`t use export defaults;
export default Filter;
