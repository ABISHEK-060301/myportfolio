// import reactImg from "../../assets/stack_logo/react.png";
// import cssImg from "../../assets/stack_logo/css.png";
// import jsImg from "../../assets/stack_logo/js.png";
// import nodeImg from "../../assets/stack_logo/node.png";
// import vscode from "../../assets/stack_logo/vscode.png";
import { Row } from "antd";
import { TooltipWrapper } from "../../jsrepo/Animations/TooltipAnimation/TooltipAnimation";
import { StackMenu } from "../../jsrepo/Components/StackMenu/StackMenu";
import { AllStacks, BackEndStacks, FrontEndStacks } from "../../utils";

const Stacks = () => {
  const tabs = [
    {
      title: <span className="text-2xl azonix">ALL</span>,
      value: "html",
      content: (
        <div
          className="w-full overflow-hidden relative h-3/4 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white flex items-center justify-center gap-3 flex-wrap"
          style={{}}
        >
          {AllStacks.map((logo, idx) => {
            let length = logo.split("/").length;
            let name = logo.split("/")[length - 1].split(".")[0];
            return (
              <TooltipWrapper
                name={name.toLocaleUpperCase()}
                key={`${name}-${idx}`}
              >
                <div className="p-3 w-20 h-20 flex items-center justify-center bg-transparent shadow-md border-1 rounded-md border-neutral-800 transition duration-500 group-hover:z-30 group-hover:scale-105">
                  <img
                    src={`${logo}`}
                    alt="logo"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </TooltipWrapper>
            );
          })}
        </div>
      ),
    },
    {
      title: <span className="text-2xl azonix">Front End</span>,
      value: "front End",
      content: (
        <div
          className="w-full overflow-hidden relative h-3/4 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white flex items-center justify-center gap-3 flex-wrap"
          style={{}}
        >
          {FrontEndStacks.map((logo, idx) => {
            let length = logo.split("/").length;
            let name = logo.split("/")[length - 1].split(".")[0];
            return (
              <TooltipWrapper
                name={name.toLocaleUpperCase()}
                key={`${name}-${idx}`}
              >
                <div
                  key={`${logo}-${idx}`}
                  className="p-3 w-20 h-20 flex items-center justify-center bg-transparent shadow-md border-1 rounded-md border-neutral-800 transition duration-500 group-hover:z-30 group-hover:scale-105"
                >
                  <img
                    src={`${logo}`}
                    alt="logo"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </TooltipWrapper>
            );
          })}
        </div>
      ),
    },
    {
      title: <span className="text-2xl azonix">Backend</span>,
      value: "Backend",
      content: (
        <div
          className="w-full overflow-hidden relative h-3/4 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white flex items-center justify-center gap-3 flex-wrap"
          style={{}}
        >
          {BackEndStacks.map((logo, idx) => {
            let length = logo.split("/").length;
            let name = logo.split("/")[length - 1].split(".")[0];
            return (
              <TooltipWrapper name={name.toLocaleUpperCase()} key={idx}>
                <div className="p-3 w-20 h-20 flex items-center justify-center bg-transparent shadow-md border-1 rounded-md border-neutral-800 transition duration-500 group-hover:z-30 group-hover:scale-105">
                  <img
                    src={`${logo}`}
                    alt="logo"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </TooltipWrapper>
            );
          })}
        </div>
      ),
    },
  ];

  return (
    <Row justify={"center"} align={"middle"}>
      <Row
        // w-7xl h-[81vh]
        className="rounded-xl mt-14 w-7xl h-[81vh] p-4"
        // style={{
        //   position: "relative",
        //   backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${stack_bg})`,
        //   backgroundSize: "100%",
        //   backgroundPosition: "center",
        //   objectFit: "cover",
        //   backgroundRepeat: "no-repeat",
        //   backdropFilter: "blur(4px)",
        //   boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        //   borderRadius: "10px",
        //   overflow: "hidden",
        //   // border: "1px solid rgba(255, 255, 255, 0.1)",
        // }}
      >
        <StackMenu tabs={tabs} contentClassName={"bg-[#00000065]"} />
      </Row>
    </Row>
  );
};

export default Stacks;

{
  /* <Container>
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
            <div className="boxes" key={`${index}-${heading}`}>
              <span></span>
              <div className="card-content">
                <h2>{heading}</h2>
                <p>{content}</p>
                <a id={index === 0 && "Stacks"}>Read More</a>
              </div>
            </div>
          );
        })}
      </div>
    </Grid>
  </Grid>
</Container> */
}
