import { Box, Container, Grid } from "@mui/material";
import abi from "../../assets/abi-image.jpg";
import Car from "../../component/car/car";
import Orb from "../../jsrepo/Backgrounds/Orb/Orb";
import RotatingText from "../../jsrepo/TextAnimations/RotatingText/RotatingText";

const Home = () => {
  const cards = [
    {
      label: "Years of Experience",
      content: "3+",
    },
    {
      label: "Projects",
      content: "4+",
    },
  ];

  return (
    <>
      <Grid container>
        {/* Content */}
        <Grid item sm={12}>
          <div>
            <Box>
              <Container>
                <Grid
                  marginTop={20}
                  container
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Grid item sm={6}>
                    <div className="flex items-center">
                      <span className="text-8xl text-[#b3b3b3] signature">
                        Creative
                      </span>
                      <div>
                        <RotatingText
                          texts={["Coding", "Thinking", "Designing", "Solving"]}
                          mainClassName="aonic px-2 sm:px-2 md:px-3 bg-[#202020] text-5xl text-white font-bold overflow-hidden py-1 sm:py-1 md:py-3 justify-center rounded-lg"
                          staggerFrom={"last"}
                          initial={{ y: "100%" }}
                          animate={{ y: 0 }}
                          exit={{ y: "-120%" }}
                          staggerDuration={0.025}
                          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                          transition={{
                            type: "spring",
                            damping: 30,
                            stiffness: 400,
                          }}
                          rotationInterval={2000}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        width: "70%",
                        height: "400px",
                      }}
                    >
                      <Orb
                        hoverIntensity={0.5}
                        rotateOnHover={true}
                        hue={2}
                        forceHoverState={false}
                      />
                    </div>
                  </Grid>

                  {/* Image */}
                  <Grid item sm={6} maxHeight={550}>
                    <Grid container justifyContent={"end"}>
                      <div className="home__card group">
                        {" "}
                        <div className="flex justify-between !gap-5">
                          <div className="w-full h-full overflow-hidden rounded-2xl">
                            <div
                              className="w-full h-full bg-cover bg-center rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-105"
                              style={{ backgroundImage: `url(${abi})` }}
                            ></div>
                          </div>

                          <div className="flex flex-col !gap-5">
                            {cards.map((card, index) => (
                              <div
                                key={`card-${index}`}
                                className="hover:-translate-y-2 group bg-[#5b5b5b] duration-500 w-44 h-44 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md"
                              >
                                <svg
                                  viewBox="10 0 180 200"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="absolute blur-none z-10 fill-[#202020] duration-500 group-hover:blur group-hover:scale-105"
                                >
                                  <path
                                    transform="translate(100 100)"
                                    d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z"
                                  ></path>
                                </svg>

                                <div className="z-20 flex flex-col justify-center items-center">
                                  <span className="font-bold azonix text-4xl ml-2 shine">
                                    {card.content}
                                  </span>
                                  <p className="instruction text-sm text-[smaller]">
                                    {card.label}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="card__subtitle bebas tracking-wider">
                          Associate Software Engineer
                        </div>
                        <div className="flex justify-between">
                          <div className="card__wrapper ">
                            <div className="shine font-black text-2xl">
                              ABISHEK J
                            </div>
                            <div className="shine font-black text-2xl">
                              MERN STACK
                            </div>
                          </div>
                          <Car />
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </div>
          {/*End Content */}
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
