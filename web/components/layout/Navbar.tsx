import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import Link from "next/link";
export const Navbar = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <Link href={"/"}>
            <Typography
              variant="h6"
              display={"flex"}
              alignItems={"center"}
              color="primary"
            >
              Fit Store
              <FitnessCenterIcon sx={{ ml: 1 }} />
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
