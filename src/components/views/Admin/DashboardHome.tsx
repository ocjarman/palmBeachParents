import { Container, Grid, Paper } from "@mui/material";
import EventsTable from "./EventsTable";
import UsersTable from "./UsersTable";

const DashboardHome = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <UsersTable />
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

