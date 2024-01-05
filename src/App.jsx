import { Box, Button, Container, Grid, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import logo from "../src/assets/AJgif.gif";
import abi from "../src/assets/abi-image-1.jpg";

function App() {
  return (
    <div className="vibrant-colors">
      <div className="blurred-surface">
        {/* Header */}
        <Box>
          <AppBar
            position="static"
            sx={{
              backgroundColor: "black",
              backdropFilter: "blur(8px)",
              zIndex: 1100,
            }}
          >
            <Grid container justifyContent={"center"} alignContent={"center"}>
              <Grid item sm={9}>
                <Grid
                  container
                  spacing={2}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Grid item sm={2}>
                    <img
                      className="pointer"
                      style={{ padding: "10px 0" }}
                      src={logo}
                      width={"110vw"}
                    />
                  </Grid>
                  <Grid item sm={4} spacing={5} padding={0}>
                    <Button
                      sx={{
                        fontFamily: "Barlow Semi Condensed",
                        color: "white",
                        fontSize: "20px",
                      }}
                    >
                      HOME
                    </Button>

                    <Button
                      sx={{
                        fontFamily: "Barlow Semi Condensed",
                        color: "white",
                        fontSize: "20px",
                      }}
                    >
                      ABOUT
                    </Button>

                    <Button
                      sx={{
                        fontFamily: "Barlow Semi Condensed",
                        color: "white",
                        fontSize: "20px",
                      }}
                    >
                      SERVICES
                    </Button>

                    <Button
                      sx={{
                        fontFamily: "Barlow Semi Condensed",
                        color: "white",
                        fontSize: "20px",
                      }}
                    >
                      CONTACT
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </AppBar>
        </Box>
        {/*End Header */}

        {/* Content */}
        <Box>
          <Container>
            <Grid
              marginTop={20}
              container
              justifyContent={"space-between"}
              alignItems={"flex-start"}
            >
              <Grid item sm={6} className="fade-in">
                <div className="content gradient-border-one">
                  <div className="fade-in-content">
                    <Typography
                      variant="h5"
                      letterSpacing={3}
                      fontWeight={800}
                      component={"div"}
                      color={"#758398"}
                      fontFamily={"Lucida Bright, Georgia, serif"}
                    >
                      {`Hi,I'm`}
                    </Typography>
                    <Typography
                      className="text-effect-one"
                      variant="h2"
                      component={"div"}
                      fontFamily={
                        "Copperplate,Copperplate Gothic Light,fantasy"
                      }
                      letterSpacing={7}
                    >
                      <div>ABISHEK J</div>
                    </Typography>

                    <hr className="hr-medium" />

                    <div className="shadow-body">
                      <Typography
                        variant="h3"
                        component={"div"}
                        className="text-shine shine-animation-forward shadow-running"
                        fontFamily={"Nova Flat"}
                      >
                        <div>FULL STACK</div>
                      </Typography>
                    </div>
                    <div className="shadow-body">
                      <Typography
                        variant="h3"
                        component={"div"}
                        className="text-shine shine-animation-backward shadow-running"
                        fontFamily={"Nova Flat"}
                      >
                        <div>WEB DEVELOPER</div>
                      </Typography>
                    </div>
                  </div>
                </div>
              </Grid>

              {/* Image */}
              <Grid item sm={6} maxHeight={550}>
                <Grid container justifyContent={"end"}>
                  <Box>
                    <div className="float gradient-border">
                      <img
                        className="pointer photo"
                        src={abi}
                        width={"500dvw"}
                        height={"500dvh"}
                      />
                    </div>
                    <div className="roundness"></div>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>
        {/*End Content */}

        <Box>
          <Container>
            <Grid container justifyContent={"center"}>
              <hr className="hr-small" />
            </Grid>
          </Container>
        </Box>
      </div>
    </div>
  );
}

export default App;
