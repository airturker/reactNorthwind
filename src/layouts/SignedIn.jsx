import React from "react";
import { Dropdown, Image, Menu } from "semantic-ui-react";

export default function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://i.pinimg.com/280x280_RS/19/50/2a/19502afb5b6d026bb99247eafb64522c.jpg"
        />
        <Dropdown pointing="top left" text="turker">
          <Dropdown.Menu>
            <Dropdown.Item text="bilgilerim" icon="info" />
            <Dropdown.Item onClick={signOut} text="çıkış yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
