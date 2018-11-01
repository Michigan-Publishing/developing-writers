import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Flyout from "../src/components/flyoutNav";

storiesOf("Flyout", module).add("default", () => (
  <Flyout
    angleSettings={{
      minAngle: 180,
      maxAngle: 360,
      baseAngle: -45,
      menuButtonDiameter: 90
    }}
    style={{ marginLeft: 500, marginTop: 500 }}
    renderToggle={toggleItems => <button onClick={toggleItems}>Click</button>}
  >
    <div
      style={{
        backgroundColor: "#FAB",
        width: 50,
        height: 50,
        borderRadius: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      one
    </div>
    <>two</>
    <>three</>
    <>four</>
    <Flyout
      renderToggle={toggleItems => <button onClick={toggleItems}>Five</button>}
      angleSettings={{
        minAngle: 180,
        maxAngle: 360,
        baseAngle: -45
      }}
    >
      <>Another One</>
      <>Another Two</>
      <>Another Three</>
    </Flyout>
    <>six</>
    <>seven</>
    <>eight</>
    <>nine</>
  </Flyout>
));
