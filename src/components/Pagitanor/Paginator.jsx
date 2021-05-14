import { Pagination } from 'antd';
import classes from './Paginator.module.scss';

export const Paginator = ({
  onChange,
  totalCount,
  currentPokemonToShow,
  pokemonNameForSearch,
  selectedTags,
  backToList,
}) => {
  const currentPaginator = function () {
    if (currentPokemonToShow || selectedTags.length || pokemonNameForSearch) {
      return <button onClick={backToList}>BACK TO FULL POKEMON LIST</button>;
    } else {
      return (
        <Pagination
          showSizeChanger
          pageSizeOptions={[12, 24]}
          total={totalCount}
          onChange={onChange}
          defaultPageSize={12}
        />
      );
    }
  };

  return <div className={classes.container}>{currentPaginator()}</div>;
};
