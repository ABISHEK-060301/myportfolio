import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import logo from "../src/assets/AJ.gif";
import AnimatedBackground from "./component/canvasBg";
import NavBar from "./component/navBar/navBar";
import About from "./tabs/about/about";
import Contact from "./tabs/contact/contact";
import Experience from "./tabs/experience/experience";
import Home from "./tabs/home/home";
import Stacks from "./tabs/stacks/stacks";

import Watch from "./component/watch/watch";
import ClickSpark from "./jsrepo/Animations/ClickSpark/ClickSpark";
import { ABOUT, CONTACT, EXPERIENCE, HOME, STACKS } from "./utils";

function App() {
  const [activeTab, setActiveTab] = useState(localStorage.getItem("activeTab"));
  const [exp, setExp] = useState({ expInMonths: 0 });

  const monthsWorkedIn2022 = 3;
  const joinedYear = 2022;
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  console.log(activeTab);

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

  useEffect(() => {
    const exp = currentExp();
    setExp(exp);

    const tab = localStorage.getItem("tab");

    if (!tab) {
      localStorage.setItem("tab", HOME);
      setActiveTab(HOME);
    } else {
      setActiveTab(tab);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log("active", active);
  return (
    <>
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <div className="min-h-[90dvh] min-w-[100dvw] z-[-1]">
          <AnimatedBackground />
        </div>

        <div className="absolute z-[2] top-0 left-0 w-full h-full">
          <div className="relative">
            <img
              className="absolute left-1 top-0 pointer logo"
              src={logo}
              width={"150vw"}
            />
          </div>
          <Row className="z-[2] relative">
            <Col xs={24}>
              {activeTab === HOME ? (
                <Home
                  joinedYear={joinedYear}
                  currentMonth={currentMonth}
                  currentYear={currentYear} />
              ) : activeTab === ABOUT ? (
                <About exp={exp} />
              ) : activeTab === EXPERIENCE ? (
                <Experience
                  joinedYear={joinedYear}
                  currentMonth={currentMonth}
                  currentYear={currentYear}
                />
              ) : activeTab === STACKS ? (
                <Stacks />
              ) : activeTab === CONTACT ? (
                <Contact />
              ) : null}
            </Col>
          </Row>
        </div>
        <NavBar setActiveTab={setActiveTab} activeTab={activeTab} />
        <div className="absolute z-[3] bottom-[-1rem] right-3">
          <Watch />
        </div>
      </ClickSpark>
    </>
  );
}

export default App;
