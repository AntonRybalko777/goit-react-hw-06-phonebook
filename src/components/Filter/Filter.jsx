import { Input, Label } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/FiltersSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Label>
        Find contacts by name
        <Input
          type="text"
          onChange={evt => {
            dispatch(changeFilter(evt.target.value));
          }}
        />
      </Label>
    </div>
  );
};
