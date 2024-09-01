
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import style from "@/components/common/InputSearch/InputSearch.module.scss";
import {InputSearchType} from "@/components/common/InputSearch/_types/type"
const InputSearch: React.FC<InputSearchType> = ({
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className={style.inputSearch}>
      <input type="" value={value} onChange={onChange} />
      <span className="icon">
        <SearchSharpIcon />
      </span>
    </div>
  );
};
export default InputSearch