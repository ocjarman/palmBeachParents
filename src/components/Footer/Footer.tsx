import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "../CustomMUI/Typography";

function Copyright() {
  return (
    <React.Fragment>
      <Link color="inherit" href="/">
        Palm Beach Parents
      </Link>{" "}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

export default function Footer() {
  return (
    <Typography
      component="footer"
      sx={{ display: "flex", bgcolor: "secondary.light", position: 'absolute', bottom: 0, width: '100%'  }}
    >
      <Container sx={{ my: 3, display: "flex", justifyContent: 'space-evenly' }}>
        <Box component="a" href="https://www.instagram.com/palmbeachparents/">
          <img src="/static/instagram.png" alt="Facebook" width="50vw" />
        </Box>
        <Copyright />
      </Container>
    </Typography>
  );
}
