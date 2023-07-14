import getCategoryId from "@/services/getCategoryId";
import getAllLinks from "@/services/getLinks";
import { AppBar, Box, Button, CssBaseline, Toolbar } from "@mui/material";
import Link from "next/link";

const Header = async () => {
  const linksList = await getAllLinks();
  // const categoryList = await getCategoryId();

  return (
    <>
      <Box sx={{ display: "flex", height: "64px" }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-evenly"
            >
              {/* <img src={Logo} style={{ width: "32px", height: "32px" }} /> */}
              {linksList?.map((item) => (
                <Button key={item.id} sx={{ color: "#fff" }}>
                  <Link
                    href={`/blogpage/${item.id}`}
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                    }}
                  >
                    {item.name}
                  </Link>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
