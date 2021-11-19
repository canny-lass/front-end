import { Menu } from "antd";
import * as React from "react";
import Section from "../Section";

export interface INavigationHeaderProps {}

export function NavigationHeader(props: INavigationHeaderProps) {
  return (
    <Section className="py-0">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        {new Array(15).fill(null).map((_, index) => {
          const key = index + 1;
          return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
        })}
      </Menu>
    </Section>
  );
}
