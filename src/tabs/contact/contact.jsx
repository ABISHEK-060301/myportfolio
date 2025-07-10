import { Typography } from "@mui/material";
import { Col, Flex, Row } from "antd";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { Link } from "react-router-dom";

const Contact = ({ currentYear }) => {
  return (
    <>
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
    </>
  );
};

export default Contact;
