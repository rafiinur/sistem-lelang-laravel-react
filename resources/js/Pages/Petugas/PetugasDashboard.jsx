import React from "react";
import { Head } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import Chart from "@/Components/Admin/Chart";
import Deposits from "@/Components/Admin/Deposits";
import Orders from "@/Components/Admin/Orders";
import Container from "@mui/material/Container";
import { Grid, Paper, Box, Toolbar, Link, Typography } from "@mui/material";

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
                Bonzai
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

function AdminDashboard(props) {
    return (
        <AdminLayout auth={props.auth}>
            <Head title={props.title} />
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === "light"
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    height: "100vh",
                    overflow: "auto",
                }}
            >
                <Toolbar />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    <Grid container spacing={3}>
                        {/* Recent Orders */}
                        <Grid item xs={12}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                Dashboard Petugas
                            </Paper>
                        </Grid>
                    </Grid>
                    <Copyright sx={{ pt: 4 }} />
                </Container>
            </Box>
        </AdminLayout>
    );
}

export default AdminDashboard;
