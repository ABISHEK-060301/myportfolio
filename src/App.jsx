import { Box, Button, Container, Grid, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import logo from "../src/assets/AJgif.gif";
import abi from "../src/assets/abi-image-1.jpg";
import SmoothScroll from "./component/smooth-scroll";
import gsap from "gsap";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import PlayCircleFilledWhiteTwoToneIcon from "@mui/icons-material/PlayCircleFilledWhiteTwoTone";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useEffect, useState } from "react";
gsap.registerPlugin(ScrollToPlugin);

function App() {
  const joinedMonth = 9;
  const joinedYear = 2022;
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const [className, setClassName] = useState("words");

  useEffect(() => {
    let temp = className;
    setIntervals(temp);
  }, [className]);

  const setIntervals = (temp) => {
    setTimeout(() => {
      if (temp === "words") {
        temp = "";
        setClassName("");
      } else {
        setClassName("words");
        temp = "words";
      }
    }, 4000);
  };

  const tellMeMonth = (monthNumber) => {
    switch (monthNumber) {
      case 0:
        return "JAN";
      case 1:
        return "FEB";
      case 2:
        return "MAR";
      case 3:
        return "APR";
      case 4:
        return "MAY";
      case 5:
        return "JUN";
      case 6:
        return "JUL";
      case 7:
        return "AUG";
      case 8:
        return "SEP";
      case 9:
        return "OCT";
      case 10:
        return "NOV";
      case 11:
        return "DEC";

      default:
        break;
    }
  };
  const about = [
    "Hi there,",
    "I'm",
    "Abishek J,",
    "a highly motivated,",
    "detail-oriented",
    "web and",
    "mobile app developer",
    "with over",
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
    "enjoy exploring",
    "the world",
    "with fullest and",
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
                      alignItems={""}
                    >
                      <Grid item sm={2}>
                        <img
                          className="pointer"
                          style={{ margin: "20px 0" }}
                          src={logo}
                          width={"110vw"}
                        />
                      </Grid>
                      <Grid
                        item
                        sm={4}
                        spacing={5}
                        padding={0}
                        style={{ margin: "20px 0" }}
                      >
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
                              scrollTo: { y: "#experience", offsetY: 70 },
                            });
                          }}
                        >
                          EXPERIENCE
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
                          variant="h4"
                          letterSpacing={3}
                          fontWeight={800}
                          component={"div"}
                          color={"#758398"}
                          fontFamily={"League Spartan"}
                        >
                          {`Hi, I'm`}
                        </Typography>
                        <Typography
                          fontWeight={800}
                          className="text-effect-one"
                          variant="h2"
                          component={"div"}
                          fontFamily={
                            // "Copperplate,Copperplate Gothic Light,fantasy"
                            "League Spartan"
                          }
                          marginTop={2}
                          letterSpacing={20}
                        >
                          <div>ABISHEK J</div>
                        </Typography>

                        <hr className="hr-medium" />

                        <div className="shadow-body">
                          <Typography
                            variant="h3"
                            fontWeight={600}
                            letterSpacing={15}
                            component={"div"}
                            className="text-shine shine-animation-forward shadow-running"
                            fontFamily={"Playfair Display"}
                          >
                            <div>FULL STACK</div>
                          </Typography>
                        </div>
                        <div className="shadow-body">
                          <Typography
                            variant="h3"
                            fontWeight={800}
                            letterSpacing={2}
                            component={"div"}
                            className="text-shine shine-animation-backward shadow-running"
                            fontFamily={"Playfair Display"}
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
                        <div className="roundness roundness-image"></div>
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
          <div id="about">
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
                        <div className="roundness roundness-about"></div>
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
                          className={className}
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

          <div id="experience">
            <Box marginTop={20}>
              <Container>
                <Grid
                  container
                  justifyContent={"space-between"}
                  alignItems={"flex-start"}
                >
                  <Grid item sm={6} maxHeight={550}>
                    <Grid container justifyContent={"end"}>
                      <Timeline position="right">
                        <TimelineItem>
                          <TimelineOppositeContent
                            sx={{ m: "20px auto" }}
                            align="right"
                            variant="body1"
                            color="white"
                          >
                            {`${joinedYear} - ${tellMeMonth(joinedMonth)}`}
                          </TimelineOppositeContent>

                          <TimelineSeparator>
                            {/* <TimelineConnector /> */}
                            <TimelineDot
                              sx={{
                                bgcolor: "#749842",
                              }}
                              variant="filled"
                            >
                              <PlayCircleFilledWhiteTwoToneIcon fontSize="large" />
                            </TimelineDot>
                            <TimelineConnector sx={{ bgcolor: "#749842" }} />
                          </TimelineSeparator>

                          <TimelineContent sx={{ py: "12px", px: 2 }}>
                            <Typography
                              variant="h6"
                              component="span"
                              color="white"
                            >
                              MitrahSoft pvt ltd.
                            </Typography>
                            <Typography color="grey">
                              Company which gave me the first opportunity to
                              enrich myself in all stacks!
                            </Typography>
                          </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                          <TimelineOppositeContent
                            align="center"
                            sx={{ m: "20px auto" }}
                            variant="body1"
                            color="white"
                          >
                            {`${currentYear} - ${tellMeMonth(currentMonth)}`}
                          </TimelineOppositeContent>

                          <TimelineSeparator>
                            <TimelineConnector sx={{ bgcolor: "#749842" }} />
                            <TimelineDot
                              sx={{
                                bgcolor: "#749842",
                              }}
                              variant="filled"
                            >
                              <LaptopMacIcon fontSize="large" />
                            </TimelineDot>
                          </TimelineSeparator>

                          <TimelineContent sx={{ py: "12px", px: 2 }}>
                            <Typography
                              variant="h6"
                              component="span"
                              color="white"
                            >
                              Still Coding here!
                            </Typography>
                            <Typography color="grey">
                              Because it&apos;s awesome!
                            </Typography>
                          </TimelineContent>
                        </TimelineItem>
                      </Timeline>
                    </Grid>
                  </Grid>

                  <Grid item sm={6} maxHeight={550}>
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
                            EXPERIENCE
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
                            EXPERIENCE
                          </Typography>
                        </div>
                      </div>
                      <div className="roundness roundness-exp"></div>
                    </Box>
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

          {/* <div id="contact"> */}
          {/* <Box>
              <Container>
                <Grid container justifyContent={"center"}>
                  <hr className="hr-small" />
                </Grid>
              </Container>
            </Box> */}
          {/* </div> */}
        </div>
      </div>
    </SmoothScroll>
  );
}

export default App;
