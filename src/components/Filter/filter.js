import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';

export function Filter() {
  const dispath = useDispatch();

  return (
    <>
      <label>
        Find contacts by name
        <input
          onChange={e => {
            changeFilter(dispath(changeFilter(e.target.value.trim())));
          }}
        ></input>
      </label>
    </>
  );
}
