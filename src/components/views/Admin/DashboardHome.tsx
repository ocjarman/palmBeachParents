import { Container, Grid, Paper } from "@mui/material";
import React from "react";
import Deposits from "./Deposits";
import EventsTable from "./EventsTable";
import UsersTable from "./UsersTable";

const DashboardHome = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
              overflow: "scroll"
            }}
          >
            <UsersTable/>
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
              justifyContent: "center",
              margin: "auto",
            }}
          >
            <Deposits />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <EventsTable />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardHome;

