"use client";
import NextLink from "next/link";

import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";

export const Navbar = () => {
  return (
   
        <AppBar sx={{p:3}}>
      <Toolbar>
        <NextLink href={"/"} passHref>
          <Image src="/Logo.png" alt="Logo" width={150} height={75} />
        </NextLink>
        <Box flex={1} />
        <Box sx={{display:{xs:'none', sm:'block'}}}>
          <NextLink href={"/"} passHref>
            <Button>Inicio</Button>
          </NextLink>
          <NextLink href={"/informacion"} passHref>
            <Button>Quienes Somos</Button>
          </NextLink>
          <NextLink href={"/servicios"} passHref>
            <Button>Servicios</Button>
          </NextLink>
          <NextLink href={"/contacto"} passHref>
            <Button>Contactenos</Button>
          </NextLink>
        </Box>
        <Box flex={1} />
        <Box sx={{display:{xs:'block', sm:'none'}}}>
            <NextLink href="/menu" passHref>
          <Button>Menú</Button>
        </NextLink>
        </Box>
        
      </Toolbar>
    </AppBar>
   
    
  );
};
