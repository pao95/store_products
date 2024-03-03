import { conditionTypes } from "@/hooks/useFilter";
import { IProduct } from "@/interfaces/product";
import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

interface SearchProps {
  filterByCondition: (condition: conditionTypes, value: string) => void;
  productsFilter: IProduct[];
}

export const Search = ({ filterByCondition, productsFilter }: SearchProps) => {
  const [value, setValue] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  return (
    <Autocomplete
      disablePortal
      freeSolo
      options={
        inputValue
          ? productsFilter.slice(0, 5).map((item) => ({
              id: item.id,
              label: item.name,
            }))
          : []
      }
      sx={{ width: 300 }}
      value={value}
      onChange={(event: any, newValue: any) => {
        setValue(newValue);
        filterByCondition("name", newValue ? newValue.label : "");
      }}
      inputValue={inputValue}
      clearOnBlur={false}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
        filterByCondition("name", newInputValue ? newInputValue : "");
      }}
      renderInput={(params) => <TextField {...params} label="Search by name" />}
      size="small"
    />
  );
};
