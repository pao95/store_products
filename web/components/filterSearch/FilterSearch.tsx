import { Chip, Grid } from "@mui/material";
import { Search } from "./Search";
import { Filter } from "./Filter";
import { conditionTypes } from "@/hooks/useFilter";
import { IProduct } from "@/interfaces/product";

interface FilterSearchProps {
  productsFilter: IProduct[];
  filterByCondition: (condition: conditionTypes) => void;
  applyFilter: string;
}

export const FilterSearch = ({
  productsFilter,
  filterByCondition,
  applyFilter,
}: FilterSearchProps) => {
  return (
    <Grid
      container
      columnSpacing={1}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid item>
        <Search
          filterByCondition={filterByCondition}
          productsFilter={productsFilter}
        />
      </Grid>
      <Grid item>
        <Filter filterByCondition={filterByCondition} />
      </Grid>
      {applyFilter && (
        <Grid item>
          <Chip label={applyFilter} color="primary" />
        </Grid>
      )}
    </Grid>
  );
};
