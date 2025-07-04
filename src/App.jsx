import CallRoundedIcon from "@mui/icons-material/CallRounded";
import HouseIcon from "@mui/icons-material/House";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import PlayCircleFilledWhiteTwoToneIcon from "@mui/icons-material/PlayCircleFilledWhiteTwoTone";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import StackedBarChartOutlinedIcon from "@mui/icons-material/StackedBarChartOutlined";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { Col, Flex, Row } from "antd";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useEffect, useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { Link, BrowserRouter as Router } from "react-router-dom";
import abi from "../src/assets/abi-image-1.jpg";
import logo from "../src/assets/AJgif.gif";
import AnimatedBackground from "./component/canvasBg";
gsap.registerPlugin(ScrollToPlugin);

function App() {
  const [className, setClassName] = useState("words");
  const [active, setActive] = useState("");
  const [exp, setExp] = useState({ expInMonths: 0 });

  const joinedMonth = 9;
  const monthsWorkedIn2022 = 3;
  const joinedYear = 2022;
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const currentExp = () => {
    let exp = 0;
    for (let i = joinedYear; i <= currentYear; i++) {
      if (i === 2022) {
        exp += monthsWorkedIn2022;
      } else if (i === currentYear) {
        exp += currentMonth;
      } else {
        exp += 12;
      }
    }

    return { expInMonths: exp / 12 };
  };

  const changeActive = (tab) => {
    setActive(tab);
    localStorage.setItem("tab", tab);
  };

  useEffect(() => {
    const exp = currentExp();
    setExp(exp);

    const tab = localStorage.getItem("tab");
    // console.log("tab", tab);

    if (!tab) {
      localStorage.setItem("tab", "Home");
      setActive("Home");
    } else {
      setActive(tab);
      gsap.to(window, {
        duration: 2,
        scrollTo: {
          y: `#${tab.toLowerCase()}`,
          offsetY: 70,
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    `${exp.expInMonths.toFixed(1)} years of`,
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

  const btnCss = {
    // paddingInline: "15px",
    ":hover": {
      // boxShadow: "0 0 0 1px #4d76ba, 0 0 0 4px #4d77ba92",
      // borderLeft: "grey 2px solid",
    },
    ":active": {
      border: "none",
      outline: "none",
    },
    ":focus": {
      outline: "none",
    },
  };

  const stackCards = [
    {
      heading: "REACT",
      content: `
      Started my journey with React, got hooked on APIs 
      — and that curiosity led me straight into Node.js.`,
    },
    {
      heading: "NODE",
      content: `
      Didn’t expect it this fast — but learning Node.js and Express 
      pushed me into full stack before I knew it!`,
    },
    {
      heading: "DATABASES",
      content: `Kicked off my full stack path with real projects, 
      flexing across MySQL, Postgres, and MongoDB seamlessly.`,
    },
    {
      heading: "CSS FRAMEWORKS",
      content: `
      Dove into UI frameworks — built with AntD, MUI, Tailwind, Bootstrap, 
      and shadcn to see what each one brings to the table.`,
    },
    {
      heading: "AWS",
      content: `Dived into AWS with Node.js — spun up EC2 instances using aws-sdk, while sharpening
       my React skills with Amplify, GraphQL, and GitHub-driven deployments.`,
    },
    {
      heading: "DEPLOYMENTS",
      content: `Handled deployments on VPS via Apache, with Nginx as 
      reverse proxy — learned the server side inside out.`,
    },
  ];

  const intersectionCallback = (entries) => {
    const { isIntersecting, target } = entries[0];
    if (isIntersecting) {
      setActive(target.id);
      localStorage.setItem("tab", target.id);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionCallback);
    const home = document.querySelector("#Home");
    const about = document.querySelector("#About");
    const experience = document.querySelector("#Experience");
    const stacks = document.querySelector("#Stacks");
    const contact = document.querySelector("#Contact");

    observer.observe(home);
    observer.observe(about);
    observer.observe(experience);
    observer.observe(stacks);
    observer.observe(contact);

    // return () => observer.unobserve(target);
  }, []);

  // console.log("active", active);
  return (
    <Router>
      <div className="vibrant-colors">
        <div className="blurred-surface">
          <AnimatedBackground />
          <Grid container>
            {/* Nav Bar */}
            <div id="home">
              <Grid item sm={1} zIndex={1}>
                <Box
                  display="flex"
                  flexDirection="row"
                  sx={{ height: "440vh" }}
                >
                  <Box flexGrow={0}>
                    <AppBar
                      position="sticky"
                      elevation={0}
                      sx={{
                        backgroundColor: "transparent",
                        // backdropFilter: "blur(8px)",
                        zIndex: 1100,
                        top: 0,
                      }}
                    >
                      <Grid
                        container
                        justifyContent={"center"}
                        alignContent={"center"}
                      >
                        <Grid item sm={9}>
                          <Grid
                            display={"flex"}
                            flexDirection={"column"}
                            gap={25}
                            container
                            justifyContent={"space-between"}
                            alignItems={""}
                          >
                            <Grid item sm={2}>
                              <img
                                className="pointer logo"
                                style={{ margin: "20px 0" }}
                                src={logo}
                                width={"110vw"}
                              />
                            </Grid>

                            <Grid item sm={4} spacing={10} padding={0}>
                              <div className="navigation">
                                <ul>
                                  <li
                                    className={`${
                                      active === "Home" ? "active" : ""
                                    } list`}
                                    style={{ "--clr": "#f44336" }}
                                  >
                                    <Button
                                      sx={{ ...btnCss }}
                                      name="Home"
                                      className="icon"
                                      onClick={(e) => {
                                        changeActive(e.target.name);
                                        gsap.to(window, {
                                          duration: 2,
                                          scrollTo: { y: "#home", offsetY: 70 },
                                        });
                                      }}
                                    >
                                      <HouseIcon
                                        fontSize="large"
                                        name="home-outline"
                                      />
                                    </Button>
                                  </li>
                                  <li
                                    className={`${
                                      active === "About" ? "active" : ""
                                    } list`}
                                    style={{ "--clr": "#ffa117" }}
                                    onClick={(e) => {
                                      setActive(e.target.name);
                                    }}
                                  >
                                    <span>
                                      <Button
                                        sx={{ ...btnCss }}
                                        className="icon"
                                        name="About"
                                        onClick={(e) => {
                                          changeActive(e.target.name);
                                          gsap.to(window, {
                                            duration: 2,
                                            scrollTo: {
                                              y: "#about",
                                              offsetY: 70,
                                            },
                                          });
                                        }}
                                      >
                                        <InfoOutlinedIcon
                                          fontSize="large"
                                          name="person-outline"
                                        />
                                      </Button>
                                    </span>
                                  </li>
                                  <li
                                    className={`${
                                      active === "Experience" ? "active" : ""
                                    } list`}
                                    style={{ "--clr": "#0fc70f" }}
                                    onClick={(e) => {
                                      setActive(e.target.name);
                                    }}
                                  >
                                    <span>
                                      <Button
                                        sx={{ ...btnCss }}
                                        name="Experience"
                                        className="icon"
                                        onClick={(e) => {
                                          changeActive(e.target.name);
                                          gsap.to(window, {
                                            duration: 2,
                                            scrollTo: {
                                              y: "#experience",
                                              offsetY: 70,
                                            },
                                          });
                                        }}
                                      >
                                        <ScienceOutlinedIcon
                                          fontSize="large"
                                          name="chatbubble-outline"
                                        />
                                      </Button>
                                    </span>
                                  </li>
                                  <li
                                    className={`${
                                      active === "Stacks" ? "active" : ""
                                    } list`}
                                    style={{ "--clr": "#2196f3" }}
                                    onClick={(e) => {
                                      setActive(e.target.name);
                                    }}
                                  >
                                    <span>
                                      <Button
                                        sx={{ ...btnCss }}
                                        name="Stacks"
                                        className="icon"
                                        onClick={(e) => {
                                          changeActive(e.target.name);
                                          gsap.to(window, {
                                            duration: 2,
                                            scrollTo: {
                                              y: "#stacks",
                                              offsetY: 70,
                                            },
                                          });
                                        }}
                                      >
                                        <StackedBarChartOutlinedIcon
                                          fontSize="large"
                                          name="camera-outline"
                                        />
                                      </Button>
                                    </span>
                                  </li>
                                  <li
                                    className={`${
                                      active === "Contact" ? "active" : ""
                                    } list`}
                                    style={{ "--clr": "#b145e9" }}
                                    onClick={(e) => {
                                      setActive(e.target.name);
                                    }}
                                  >
                                    <span>
                                      <Button
                                        sx={{ ...btnCss }}
                                        name="Contact"
                                        className="icon"
                                        onClick={(e) => {
                                          changeActive(e.target.name);
                                          gsap.to(window, {
                                            duration: 2,
                                            scrollTo: {
                                              y: "#contact",
                                              offsetY: 70,
                                            },
                                          });
                                        }}
                                      >
                                        <CallRoundedIcon
                                          fontSize="large"
                                          name="settings-outline"
                                        />
                                      </Button>
                                    </span>
                                  </li>
                                  <div className="indicator"></div>
                                </ul>
                              </div>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </AppBar>
                  </Box>
                </Box>
              </Grid>
            </div>
            {/* Nav Bar End*/}

            {/* Content */}
            <Grid item sm={10}>
              <Grid container>
                <Grid item sm={12}>
                  <div>
                    <Box>
                      <Container>
                        <Grid
                          marginTop={25}
                          container
                          justifyContent={"space-between"}
                          alignItems={"flex-start"}
                        >
                          <Grid item sm={6} className="fade-in">
                            <div className="content gradient-border-one">
                              <div className="fade-in-content">
                                {/* <Typography
                                      variant="h4"
                                      letterSpacing={3}
                                      fontWeight={800}
                                      component={"div"}
                                      color={"#758398"}
                                      fontFamily={"League Spartan"}
                                    >
                                      {`Hi, I'm`}
                                    </Typography> */}
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
                                <div className="float gradient-border bounceInDown">
                                  <img
                                    id="Home"
                                    className="pointer photo imageForRef"
                                    src={abi}
                                    width={"500dvw"}
                                  />
                                </div>
                                <div className="roundness roundness-image"></div>
                              </Box>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Container>
                    </Box>
                  </div>
                  {/*End Content */}
                  {/* HR */}
                  <Box>
                    <Container>
                      <Grid mar container justifyContent={"center"}>
                        <hr
                          className="hr-small"
                          id="about"
                          style={{ marginTop: "80px" }}
                        />
                      </Grid>
                    </Container>
                  </Box>
                  {/*--------------------------------- End of Home------------------------------ */}
                  {/* About */}
                  <div>
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
                                  <div className="word-content" id="About">
                                    <Typography
                                      variant="h3"
                                      className="word"
                                      letterSpacing={3}
                                      fontWeight={800}
                                      component={"div"}
                                      color={"#000000"}
                                      fontFamily={"Poppins, sans-serif"}
                                    >
                                      {/* <VariableProximity /> */}
                                      ABOUT
                                    </Typography>
                                    <Typography
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
                  </div>
                  {/* HR */}
                  <Box>
                    <Container>
                      <Grid container justifyContent={"center"}>
                        <hr className="hr-small" id="experience" />
                      </Grid>
                    </Container>
                  </Box>
                  {/* Experience */}
                  <Box marginTop={25}>
                    <Container>
                      <Grid
                        container
                        justifyContent={"space-between"}
                        alignItems={"flex-start"}
                      >
                        <Grid item sm={5} maxHeight={550}>
                          <Grid container justifyContent={"end"}>
                            <Timeline position="right">
                              <TimelineItem>
                                <TimelineOppositeContent
                                  sx={{ m: "20px auto" }}
                                  align="right"
                                  variant="body1"
                                  color="white"
                                >
                                  {`${joinedYear} - ${tellMeMonth(
                                    joinedMonth
                                  )}`}
                                </TimelineOppositeContent>

                                <TimelineSeparator>
                                  <TimelineDot
                                    sx={{
                                      bgcolor: "#749842",
                                    }}
                                    variant="filled"
                                  >
                                    <PlayCircleFilledWhiteTwoToneIcon fontSize="large" />
                                  </TimelineDot>
                                  <TimelineConnector
                                    sx={{ bgcolor: "#749842" }}
                                  />
                                </TimelineSeparator>

                                <TimelineContent sx={{ py: "12px", px: 2 }}>
                                  <Typography
                                    variant="h6"
                                    component="span"
                                    color="white"
                                  >
                                    MitrahSoft Solutions pvt ltd.
                                  </Typography>
                                  <Typography color="grey" fontSize={12}>
                                    The place where it all began — the company
                                    that trusted me first, sparking my journey
                                    through every layer of the tech stack and
                                    helping me discover my passion for
                                    full-stack development.
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
                                  {`${currentYear} - ${tellMeMonth(
                                    currentMonth
                                  )}`}
                                </TimelineOppositeContent>

                                <TimelineSeparator>
                                  <TimelineConnector
                                    sx={{ bgcolor: "#749842" }}
                                  />
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
                                  <Typography color="grey" fontSize={12}>
                                    Because it&apos;s awesome!
                                  </Typography>
                                </TimelineContent>
                              </TimelineItem>
                            </Timeline>
                          </Grid>
                        </Grid>

                        <Grid item sm={5} maxHeight={550}>
                          <Box>
                            <div className="float gradient-border">
                              <div className="word-content">
                                <Typography
                                  id="Experience"
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
                        <hr className="hr-small" id="stacks" />
                      </Grid>
                    </Container>
                  </Box>
                  {/* Stacks */}
                  <Box>
                    <Container>
                      {/* Row 1 */}
                      <Grid
                        container
                        justifyContent={"space-between"}
                        alignItems={"flex-start"}
                      >
                        <Grid item sm={12}>
                          <div className="container">
                            {stackCards.map((card, index) => {
                              const { content, heading } = card;
                              return (
                                <div
                                  className="boxes"
                                  key={`${index}-${heading}`}
                                >
                                  <span></span>
                                  <div className="card-content">
                                    <h2>{heading}</h2>
                                    <p>{content}</p>
                                    <a id={index === 0 && "Stacks"}>
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </Grid>
                      </Grid>
                    </Container>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            {/* Content End*/}

            {/* Footer Start */}
            <Box>
              <Container>
                {/* Row 1 */}
                <Grid
                  container
                  justifyContent={"space-between"}
                  alignItems={"flex-start"}
                >
                  <Grid item sm={12}>
                    {/* Waves */}
                    <div className="ocean">
                      <div className="wave"></div>
                      <div className="wave"></div>
                      <div className="wave"></div>
                    </div>
                    {/* Contacts */}
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </Grid>

          <Row justify={"space-around"}>
            <Col xs={10}>
              <Row gutter={[12, 0]}>
                <Col xs={5}>
                  <Flex align="center" gap={10}>
                    <FaMapLocationDot color="whitesmoke" />{" "}
                    <Typography
                      variant="subtitle1"
                      component="span"
                      color="whitesmoke"
                    >
                      Location
                    </Typography>
                  </Flex>
                </Col>
                <Col>
                  <Typography
                    variant="subtitle1"
                    component="span"
                    color="whitesmoke"
                  >
                    37/309, arumugam pillai street, jothinagar, Attur, Salem -
                    636102.
                  </Typography>
                </Col>
              </Row>

              <Row className="mt-15">
                <Col xs={5}>
                  <Flex align="center" gap={10}>
                    <IoLogoWhatsapp color="whitesmoke" />{" "}
                    <Typography
                      variant="subtitle1"
                      component="span"
                      color="whitesmoke"
                    >
                      Whatsapp
                    </Typography>
                  </Flex>
                </Col>
                <Col>
                  <Typography
                    variant="subtitle1"
                    component="span"
                    color="whitesmoke"
                  >
                    +91 9514952672
                  </Typography>
                </Col>
              </Row>

              <Row gutter={[12, 0]} className="mt-15">
                <Col xs={5}>
                  <Flex align="center" gap={10}>
                    <MdCall color="whitesmoke" />{" "}
                    <Typography
                      variant="subtitle1"
                      component="span"
                      color="whitesmoke"
                    >
                      Contact
                    </Typography>
                  </Flex>
                </Col>
                <Col>
                  <Typography
                    variant="subtitle1"
                    component="span"
                    color="whitesmoke"
                  >
                    +91 6379871925{" "}
                  </Typography>
                </Col>
              </Row>

              <Row className="mt-15">
                <Col xs={5}>
                  <Flex align="center" gap={10}>
                    <IoMail color="whitesmoke" />{" "}
                    <Typography
                      variant="subtitle1"
                      component="span"
                      color="whitesmoke"
                      id="Contact"
                    >
                      Mail
                    </Typography>
                  </Flex>
                </Col>
                <Col>
                  <Typography
                    variant="subtitle1"
                    component="span"
                    color="whitesmoke"
                  >
                    mylearning.activity@gmail.com
                  </Typography>
                </Col>
              </Row>
            </Col>

            {/* Social App Buttons */}
            <Col className="main">
              <div className="follow">Follow Me On</div>
              {/* Part - 1 */}
              <div className="flex">
                <Link
                  target="_blank"
                  to="https://www.instagram.com/abishek_j06?igsh=amxtdjl4OTY4cjRm"
                >
                  <button className="card card1">
                    <BsInstagram size={25} className="instagram" />
                  </button>
                </Link>

                <Link target="_blank" to="https://wa.me/9514952672">
                  <button className="card card2">
                    <IoLogoWhatsapp size={25} className="whatsapp" />
                  </button>
                </Link>
              </div>
              {/* Part - 2 */}
              <div className="flex">
                <Link target="_blank" to="https://github.com/ABISHEK-060301">
                  <button className="card card3">
                    <FaGithub size={25} className="github" />
                  </button>
                </Link>
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/in/abishek-j-564a5223b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                >
                  <button className="card card4">
                    <ImLinkedin size={25} className="linkedIn" />
                  </button>
                </Link>
              </div>
            </Col>

            {/* copy rights */}
          </Row>
          <Row justify={"center"} className="mt-25">
            <Col id="contact" className="copy-right">
              ABISHEK J - Copyright © {currentYear}
            </Col>
          </Row>
        </div>
      </div>
      {/* Cursor */}
    </Router>
  );
}

export default App;
