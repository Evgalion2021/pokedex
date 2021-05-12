import { Pagination } from 'antd';
import { useMemo } from 'react';
import classes from './Paginator.module.scss';

const Paginator = ({
  onChange,
  totalCount,
  currentPokemonToShow,
  pokemonNameForSearch,
  selectedTags,
  backToList,
}) => {
  const currentPaginator = useMemo(() => {
    if (currentPokemonToShow || selectedTags.length || pokemonNameForSearch) {
      return (
        <button
          onClick={() => {
            return backToList();
          }}
        >
          BACK TO FULL POKEMON LIST
        </button>
      );
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
  }, [
    currentPokemonToShow,
    selectedTags,
    pokemonNameForSearch,
    onChange,
    totalCount,
    backToList,
  ]);

  return <div className={classes.container}>{currentPaginator}</div>;
};

export default Paginator;
