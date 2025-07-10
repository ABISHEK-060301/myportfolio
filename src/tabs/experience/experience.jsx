import { Timeline } from "@mui/icons-material";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import PlayCircleFilledWhiteTwoToneIcon from "@mui/icons-material/PlayCircleFilledWhiteTwoTone";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Container, Grid, Typography } from "@mui/material";
import { tellMeMonth } from "../../utils";

const Experience = ({ joinedYear, currentYear, currentMonth }) => {
  const joinedMonth = 9;

  return (
    <>
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
                    {`${joinedYear} - ${tellMeMonth(joinedMonth)}`}
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
                    <TimelineConnector sx={{ bgcolor: "#749842" }} />
                  </TimelineSeparator>

                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="h6" component="span" color="white">
                      MitrahSoft Solutions pvt ltd.
                    </Typography>
                    <Typography color="grey" fontSize={12}>
                      The place where it all began — the company that trusted me
                      first, sparking my journey through every layer of the tech
                      stack and helping me discover my passion for full-stack
                      development.
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
                    <Typography variant="h6" component="span" color="white">
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
    </>
  );
};

export default Experience;
