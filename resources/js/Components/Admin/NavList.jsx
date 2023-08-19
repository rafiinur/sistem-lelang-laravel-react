import * as React from "react";
import { Link } from "@inertiajs/react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import ParkOutlinedIcon from "@mui/icons-material/ParkOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

export const mainListItems = (
    <React.Fragment>
        <Link href={route("admin.dashboard")} as="a" preserveScroll>
            <ListItemButton>
                <ListItemIcon>
                    <DashboardOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItemButton>
        </Link>
        <Link href={route("admin.barang")} as="a" preserveScroll>
            <ListItemButton>
                <ListItemIcon>
                    <ParkOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Barang" />
            </ListItemButton>
        </Link>
        <Link href={route("admin.user")} as="a" preserveScroll>
            <ListItemButton>
                <ListItemIcon>
                    <PeopleOutlineOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="User" />
            </ListItemButton>
        </Link>
        <Link href={route("admin.lelang")} as="a" preserveScroll>
            <ListItemButton>
                <ListItemIcon>
                    <LocalAtmOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Lelang" />
            </ListItemButton>
        </Link>
        <Link href={route("admin.history")} as="a" preserveScroll>
            <ListItemButton>
                <ListItemIcon>
                    <AssignmentOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="History" />
            </ListItemButton>
        </Link>
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <Link
            as="button"
            className="w-full"
            preserveScroll
            method="post"
            href={route("logout")}
        >
            <ListItemButton>
                <ListItemIcon>
                    <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
            </ListItemButton>
        </Link>
    </React.Fragment>
);
