import { Box, Button, Container, Grid, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import logo from "../src/assets/AJgif.gif";
import abi from "../src/assets/abi-image-1.jpg";
import SmoothScroll from "./component/smooth-scroll";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

function App() {
  const about = [
    "Hi there,",
    "I'm",
    "Abishek J,",
    "a highly motivated",
    "and detail-oriented",
    "marketing professional",
    " with over",
    "1.3 years of",
    "experience in",
    "developing and",
    "executing successful",
    "deployments.",
    "My strength",
    "lies in my",
    "ability to",
    "think strategically",
    "while also",
    "paying close",
    "attention to",
    "the nitty-gritty",
    "details that",
    "make a",
    "campaign successful.",
    "Outside of",
    "work, I",
    "enjoy hiking,",
    "reading, and",
    "spending time",
    "with my family.",
  ];

  return (
    <SmoothScroll>
      <div className="vibrant-colors">
        <div className="blurred-surface">
          {/* Home */}
          <div id="id">
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
                <Grid
                  container
                  justifyContent={"center"}
                  alignContent={"center"}
                >
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
                          onClick={() => {
                            gsap.to(window, {
                              duration: 1,
                              scrollTo: { y: "#home", offsetY: 70 },
                            });
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
                          onClick={() => {
                            gsap.to(window, {
                              duration: 1,
                              scrollTo: { y: "#about", offsetY: 70 },
                            });
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
                          onClick={() => {
                            gsap.to(window, {
                              duration: 1,
                              scrollTo: { y: "#services", offsetY: 70 },
                            });
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
                          onClick={() => {
                            gsap.to(window, {
                              duration: 1,
                              scrollTo: { y: "#contact", offsetY: 70 },
                            });
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

            {/* HR */}
            <Box>
              <Container>
                <Grid mar container justifyContent={"center"}>
                  <hr className="hr-small" />
                </Grid>
              </Container>
            </Box>
          </div>
          {/*--------------------------------- End of Home------------------------------ */}

          {/* About */}
          <div id="">
            <Box marginTop={20}>
              <Container>
                <Grid
                  container
                  justifyContent={"space-between"}
                  alignItems={"flex-start"}
                >
                  <Grid item sm={6} maxHeight={550}>
                    <Grid container justifyContent={"end"}>
                      <Box>
                        <div className="float gradient-border">
                          <div className="word-content">
                            <Typography
                              id="about"
                              variant="h3"
                              className="word"
                              letterSpacing={3}
                              fontWeight={800}
                              component={"div"}
                              color={"#000000"}
                              fontFamily={"Poppins, sans-serif"}
                            >
                              ABOUT
                            </Typography>
                            <Typography
                              id="about"
                              variant="h3"
                              className="word"
                              letterSpacing={3}
                              fontWeight={800}
                              component={"div"}
                              color={"#000000"}
                              fontFamily={"Poppins, sans-serif"}
                            >
                              ABOUT
                            </Typography>
                          </div>
                        </div>
                        <div className="roundness"></div>
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid item sm={6} maxHeight={550}>
                    <Typography
                      variant="h5"
                      letterSpacing={3}
                      fontWeight={300}
                      component={"div"}
                      className="content-paragraph"
                      color={"#758398"}
                      fontFamily={"Montserrat Medium"}
                    >
                      {about.map((word, index) => (
                        <span
                          key={`${index * 12}-word`}
                          className="words"
                        >{` ${word} `}</span>
                      ))}
                    </Typography>
                  </Grid>
                </Grid>
              </Container>
            </Box>

            {/* HR */}
            <Box>
              <Container>
                <Grid container justifyContent={"center"}>
                  <hr className="hr-small" />
                </Grid>
              </Container>
            </Box>
          </div>

          <div id="services">
            {/* <Box>
              <Container>
                <Grid container justifyContent={"center"}>
                  <hr className="hr-small" />
                </Grid>
              </Container>
            </Box> */}
          </div>

          <div id="contact">
            {/* <Box>
              <Container>
                <Grid container justifyContent={"center"}>
                  <hr className="hr-small" />
                </Grid>
              </Container>
            </Box> */}
          </div>
        </div>
      </div>
    </SmoothScroll>
  );
}

export default App;
