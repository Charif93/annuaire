import { AppBar, Box, Typography } from "@mui/material";
import "./style.css";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

interface Props {
    isAuthenticated: boolean;
    setIsAuthenticated: Function;
}

const Header = ({ isAuthenticated, setIsAuthenticated }: Props) => {

    const { t, i18n } = useTranslation();

    return (
        <AppBar position="fixed" color="primary" sx={{ top: 0, bottom: "auto" }}>
            <Box display="flex" justifyContent="space-between"
                alignItems="center" margin="0 1em">


                <Box display="flex" alignItems="center">
                    <img src="anncolle/public/assets/images/annuaire.png"
                        alt=""
                        style={{ width: "2.5em" }}
                    />
                    <Typography variant="h1">{t("collabo.annuaire")}</Typography>
                </Box>


            </Box>
        </AppBar>

    );
};
export default Header;