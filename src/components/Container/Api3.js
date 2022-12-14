import React from "react";
import TableMoudle from "./TableMoudle";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { InnerTitle } from "./CrudButton";
const title = ["Title1", "Title2", "Title3", "Title4", "Title5"];

const items = [
  {
    data1: "data1",
    data2: "2",
    data3: "3",
    data4: "4",
    data5: "5",
  },
  {
    data1: "data2",
    data2: "5",
    data3: "1",
    data4: "3",
    data5: "5",
  },
  {
    data1: "data3",
    data2: "2",
    data3: "3",
    data4: "4",
    data5: "5",
  },
  {
    data1: "data4",
    data2: "2",
    data3: "3",
    data4: "4",
    data5: "5",
  },
  {
    data1: "data5",
    data2: "2",
    data3: "3",
    data4: "4",
    data5: "5",
  },
];
const TestApi3 = () => {
  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth={false} sx={{ pt: 5 }}>
          <InnerTitle name="API_3" />

          <TableMoudle title={title} items={items} />
        </Container>
      </React.Fragment>
    </>
  );
};

export default TestApi3;
