import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import ContentArea from "../src/components/contentArea";
//import Orb from "../src/components/orbWrapper";

storiesOf("ContentArea", module).add("default", () => (
  <ContentArea>
    <h1>This is some test content</h1>
    <p>
      Sit aliquip cillum nisi reprehenderit exercitation labore ullamco cillum
      mollit laboris est nostrud eu. Amet laboris in fugiat ex anim fugiat culpa
      do eu. In pariatur mollit exercitation consectetur nulla velit dolor. Sunt
      labore fugiat cillum ut elit aliquip. Proident aliquip culpa ut
      consectetur anim id reprehenderit.
    </p>
    <p>
      Aliqua consequat velit irure tempor occaecat est aliquip velit quis sit eu
      anim officia dolor. Tempor eiusmod Lorem minim nulla minim labore.
      Occaecat in consectetur excepteur velit culpa et. Amet aliqua culpa velit
      mollit consequat exercitation irure duis.
    </p>
    <p>
      Id est fugiat eu proident proident sunt cupidatat proident enim esse in
      cillum non nulla. Lorem incididunt amet eu cupidatat laboris adipisicing.
      Amet laboris excepteur non non exercitation exercitation tempor
      exercitation commodo ex aliquip. Proident eiusmod proident tempor proident
      anim fugiat officia excepteur. Proident excepteur ad adipisicing sint
      voluptate elit. Anim ad enim sint amet in laboris sit consectetur aliquip
      tempor nulla ut elit elit. Pariatur enim adipisicing id commodo aute.
    </p>
  </ContentArea>
));
