import { createTheme } from "@mui/material";

const AppTheme = () => {
      const theme = createTheme({
        palette : {
            mode : 'light',
            primary : {
              main : '#ffc525'
            },
            secondary : {
              main : '#0043a9'
            }
        },
        components : {
          MuiOutlinedInput : {
            defaultProps : {
              autoComplete : 'off'
            }
          },
          MuiButton : {
            styleOverrides : {
              root : {
                textTransform : 'capitalize'
              }
            }
          }
        }
      })
      return theme
};

export default AppTheme;
