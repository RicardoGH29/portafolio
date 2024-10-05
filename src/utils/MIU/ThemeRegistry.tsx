// app/ThemeRegistry.js
'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from "@/utils/MIU/theme";
import {ReactNode} from "react";

interface ThemeRegistryProps {
    children: ReactNode;
}


export default function ThemeRegistry({ children }: ThemeRegistryProps) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}
