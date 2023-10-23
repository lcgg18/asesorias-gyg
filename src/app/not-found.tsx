import { Typography, Box} from "@mui/material";

export default function Custom404() {
  return (
    <Box 
            display='flex' 
            justifyContent='center' 
            alignItems='center' 
            height='calc(100vh - 200px)'
            sx={{ flexDirection: { xs: 'column', sm: 'row' }}}
        >
           <Typography variant="h1" component="h1" textAlign="center" justifyItems={"center"}>
      Pagina No Encontrada
    </Typography> 
        </Box>
    
  );
}
