import { Container, Grid } from "@mui/material";

const Stacks = () => {
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

  return (
    <>
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
      </Container>
    </>
  );
};

export default Stacks;
