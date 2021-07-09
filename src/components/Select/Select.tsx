import { ORDER_STATUSES } from "../../constants";

const Select = ({ setOrderBy }: any) => {
  return (
    <select
      defaultValue={ORDER_STATUSES.LESS_TIMESTAMP}
      onChange={(event) => setOrderBy(Number(event.target.value))}
      data-testid="select"
    >
      <option value={ORDER_STATUSES.LESS_TIMESTAMP} disabled>
        Order By
      </option>
      <option value={ORDER_STATUSES.MOST_VOTED} data-testid="most-voted">Most Voted (Z - A)</option>
      <option value={ORDER_STATUSES.LESS_VOTED} data-testid="less-voted">Less Voted (A - Z)</option>
    </select>
  );
};

export default Select;
