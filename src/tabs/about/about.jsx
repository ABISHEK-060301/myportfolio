/* eslint-disable react/no-unknown-property */
import { Box, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { BlurRevealEffect } from "../../jsrepo/TextAnimations/BlurRevealText/BlurRevealText";
import { TextHoverEffect } from "../../jsrepo/TextAnimations/TextHoverEffect/TextHoverEffect";

const About = ({ exp }) => {
  const [classNameState, setClassNameState] = useState("words");

  const setIntervals = (temp) => {
    setTimeout(() => {
      if (temp === "words") {
        temp = "";
        setClassNameState("");
      } else {
        setClassNameState("words");
        temp = "words";
      }
    }, 4000);
  };

  const about = `Hi there, I'm Abishek J, a highly motivated, detail-oriented web and mobile app developer with over ${exp.expInMonths.toFixed(
    1
  )} years of experience in developing and executing successful deployments. My strength lies in my ability to think strategically while also paying close attention to the nitty-gritty details that make a campaign successful. Outside of work, I enjoy exploring the world with fullest and spending time with my family.`;

  useEffect(() => {
    let temp = classNameState;
    setIntervals(temp);
  }, [classNameState]);

  return (
    <>
      <Grid container>
        <Grid item sm={12}>
          <div>
            <Box>
              <Container maxWidth={"xl"}>
                <Grid
                  marginTop={35}
                  container
                  justifyContent={"space-between"}
                  alignItems={"flex-start"}
                >
                  <Grid item sm={6}>
                    <TextHoverEffect text={"About"} duration={1000} />
                    {/* <div className="float gradient-border">
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
                    <div className="roundness roundness-about"></div> */}
                  </Grid>

                  <Grid item sm={6} maxHeight={550}>
                    <Grid container justifyContent={"end"}>
                      <Box>
                        {/* <DecryptedText
                          text={about}
                          className="color-white font-mono text-2xl "
                          encryptedClassName="color-grey text-2xl font-mono"
                          animateOn="view"
                          speed={30}
                          sequential
                          revealDirection="start"
                        /> */}

                        <BlurRevealEffect
                          className={"text-neutral-500 instruction"}
                          words={about}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <div className="moon">
                  <div className="crater cr1"></div>
                  <div className="crater cr2"></div>
                  <div className="crater cr3"></div>
                </div>
              </Container>
            </Box>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
