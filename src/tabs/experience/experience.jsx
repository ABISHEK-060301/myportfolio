import { Container } from "@mui/material";
import { Col, Row } from "antd";
import { FaLaptopCode } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";
import { RxResume } from "react-icons/rx";
import { tellMeMonth } from "../../utils";

const Experience = ({ joinedYear, currentYear, currentMonth }) => {
  const joinedMonth = 9;

  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: "12rem",
      }}
    >
      <Row justify={"space-between"} align={"middle"}>
        <Col xs={10}>
          <div className="timeline-card group cursor-pointer transition-all duration-300">
            <div className="timeline-content">
              <MdWorkspacePremium color="white" size={40} />
              <div className="flex w-full flex-col items-start">
                <div className="group flex gap-x-6">
                  <div className="relative">
                    <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-slate-200"></div>
                    <span className="relative z-10 h-10 w-10 grid place-items-center rounded-full bg-slate-200 text-slate-800">
                      <RxResume color="black" size={20} />
                    </span>
                  </div>
                  <div className="-translate-y-1.5 pb-8 text-slate-600">
                    <p className="font-sans text-base font-bold text-slate-800 antialiased dark:text-white">
                      MitrahSoft Solutions pvt ltd.{" "}
                    </p>
                    <p className="font-sans text-base font-bold text-slate-800 antialiased dark:text-white">
                      {tellMeMonth(joinedMonth)} - {joinedYear}
                    </p>
                    <small className="mt-2 font-sans text-sm text-slate-500 antialiased">
                      The organization that gave me my initial break — where I
                      gained end-to-end exposure across the technology stack,
                      laying the foundation for my journey into full-stack
                      development and solidifying my passion for building
                      scalable, integrated solutions.
                    </small>
                  </div>
                </div>

                <div data-value=":r16:" className="group flex gap-x-6">
                  <div className="relative">
                    <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-slate-200 text-slate-800">
                      <FaLaptopCode color="black" size={20} />
                    </span>
                  </div>
                  <div className="-translate-y-1.5 pb-8 text-slate-600 data-[orientation=horizontal]:py-4">
                    <p className="font-sans text-base font-bold text-slate-800 antialiased dark:text-white">
                      Still Coding here!
                    </p>
                    <p className="font-sans text-base font-bold text-slate-800 antialiased dark:text-white">
                      {tellMeMonth(currentMonth)} - {currentYear}
                    </p>
                    <small className="mt-2 font-sans text-sm text-slate-500 antialiased">
                      {"Because it's awesome!"}
                    </small>
                  </div>
                </div>
              </div>

              <div className="w-full flex justify-center flex-col items-center !gap-3">
                <div className="w-1/3 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent rounded-full transform group-hover:w-1/2 group-hover:h-1 transition-all duration-500 animate-pulse"></div>
                <div className="flex space-x-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                  <div
                    style={{ "animation-delay": "0.1s" }}
                    className="w-2 h-2 bg-white rounded-full animate-bounce"
                  ></div>
                  <div
                    style={{ "animation-delay": "0.2s" }}
                    className="w-2 h-2 bg-white rounded-full animate-bounce"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </Col>

        <Col xs={10}>
          <div className="cube-container">
            <div className="cube">
              <div className="face front"></div>
              <div className="face back"></div>
              <div className="face right"></div>
              <div className="face left"></div>
              <div className="face top"></div>
              <div className="face bottom"></div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;
