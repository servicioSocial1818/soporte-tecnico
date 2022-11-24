import React, { useEffect, useState, useContext } from "react";
import "./header.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useAppContext } from "../Context/context";
import { useHistory } from "react-router-dom";
import authContext from "../Context/auth/authContext";


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  pRight: {
    marginRight: "25px",
  },
}));

const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const AuthContext = useContext( authContext );
  const { usuarioAutenticado, usuario, cerrarSesion } = AuthContext;

  let history = useHistory();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <>
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem
          onClick={() => {
            history.push("/");
          }}
        >
          <IconButton color="inherit">
            <ExitToAppIcon />
          </IconButton>
          <p>Cerrar Sesión</p>
        </MenuItem>
      </Menu>
    </>
  );

  useEffect(() => {
    usuarioAutenticado();
  },[])

  return (
    <>
      <AppBar position="static" className={"backHeader"}>
        <Toolbar>
          <Typography className={classes.title} variant="h5" noWrap>
            Soporte Técnico
          </Typography>
          <div className={classes.grow} />
          {usuario ? (
            <>
              <div className={classes.pRight}>
                <Typography className={classes.title} variant="h6" noWrap>
                  {`Bienvenido ${usuario.username}`}
                </Typography>
              </div>
              <div className={classes.sectionDesktop}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={ () => {
                    cerrarSesion();
                    history.push("/"); 

                  }}
                >
                  <ExitToAppIcon />
                  Cerrar sesión
                </Button>
              </div>
            </>
          ) : null}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </>
  );
};

export default Header;
