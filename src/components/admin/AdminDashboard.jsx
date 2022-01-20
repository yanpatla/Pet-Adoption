import React, { useState } from "react";
import { Container } from "../layout/Layout";
import Panel from "./Panel";
import Sidebar from "./Sidebar";
import { css } from "@emotion/css";

const AdminDashboard = () => {
    const [panel, setPanel] = useState(1)
  return (
    <Container>
      <div
        className={css`
          display: grid;
          grid-template-columns: 0.2fr 0.9fr;
          gap: 2rem;
        `}
      >
        <Sidebar setPanel={setPanel}/>
        <Panel panel={panel} />
      </div>
    </Container>
  );
};

export default AdminDashboard;
