'use client'
import {createTheme, ThemeProvider} from "@mui/material";
import React from 'react'
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import {CacheProvider} from "@emotion/react";


const CustomTheme = ({children}: { children: React.ReactNode }) => {
    const theme = createTheme({
      typography: {
        fontFamily: ["IRANSans"].join(","),
      },
     
    });
    const cacheRtl = createCache({
        key: "muirtl",
        stylisPlugins: [rtlPlugin],
    });
    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </CacheProvider>
    )
}

export default CustomTheme

