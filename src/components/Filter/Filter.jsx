import { Input, Label } from './Filter.styled';

export const Filter = ({ onChange }) => {
  return (
    <div>
      <Label>
        Find contacts by name
        <Input
          type="text"
          onChange={evt => {
            onChange(evt.target.value);
          }}
        />
      </Label>
    </div>
  );
};
