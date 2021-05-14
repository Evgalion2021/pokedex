import { Select } from 'antd';
import { useEffect } from 'react';
import { Input } from 'antd';
import classes from './Filter.module.scss';

export const Filter = ({
  getTags,
  tags,
  changeSelectedTags,
  getPokemonNameForSearch,
  selectedTags,
}) => {
  const { Search } = Input;
  const { Option } = Select;
  useEffect(() => {
    getTags();
  }, [getTags]);
  const children = tags.map((tag) => {
    return <Option key={tag}>{tag}</Option>;
  });

  return (
    <div className={classes.container}>
      <Select
        showArrow
        mode='tags'
        style={{ width: '40%', textAlign: 'left', marginRight: '10%' }}
        placeholder='Pokemon Tags Search'
        onChange={changeSelectedTags}
        value={selectedTags}
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
