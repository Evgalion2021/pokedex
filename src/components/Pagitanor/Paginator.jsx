import { Pagination } from 'antd';
import { useMemo } from 'react';
import classes from './Paginator.module.scss';

// TODO: use export here
const Paginator = ({
  onChange,
  totalCount,
  currentPokemonToShow,
  pokemonNameForSearch,
  selectedTags,
  backToList,
}) => {
  // TODO: don`t use useMemo return <div /> if no data from store; don`t use arrow function 
  const currentPaginator = useMemo(() => {
    if (currentPokemonToShow || selectedTags.length || pokemonNameForSearch) {
      // TODO: use onClick={backToList} not arrow function
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

// TODO: don`t use export default 
export default Paginator;
