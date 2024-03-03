import { Divider, IconButton, Menu, MenuItem } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useState } from "react";
import { conditionTypes } from "@/hooks/useFilter";

interface FilterProps {
  filterByCondition: (condition: conditionTypes) => void;
}

export const Filter = ({ filterByCondition }: FilterProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        color="secondary"
      >
        <FilterAltIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
      >
        <MenuItem onClick={() => filterByCondition("isOficial")}>
          Is Oficial
        </MenuItem>
        <MenuItem onClick={() => filterByCondition("isNotOficial")}>
          Is not Oficial
        </MenuItem>
        <MenuItem onClick={() => filterByCondition("without_stock")}>
          Out of stock
        </MenuItem>
        <MenuItem onClick={() => filterByCondition("not_available")}>
          Not available
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => filterByCondition("")}>Clear filters</MenuItem>
      </Menu>
    </div>
  );
};
