import {createTheme} from "@mui/material";

const theme = createTheme({
    palette: {
        background: {
            default: '#ffffff',  // Fondo blanco
        },
        text: {
            primary: '#000000',  // Texto negro
        },
        primary: {
            main: '#000000',  // Botones de fondo negro
            contrastText: '#ffffff',  // Texto blanco en botones
        },
        secondary: {
            main: '#ffffff',
            contrastText: '#000000',
        },
    },
});

export default theme;