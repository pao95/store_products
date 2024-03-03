import Head from "next/head";
import { Grid } from "@mui/material";
import { ReactElement } from "react";

interface LayoutPagesProps {
  children: ReactElement;
  title?: string;
  description?: string;
}

export const LayoutPages = ({
  children,
  title,
  description,
}: LayoutPagesProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
      </Head>

      <Grid container>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};
