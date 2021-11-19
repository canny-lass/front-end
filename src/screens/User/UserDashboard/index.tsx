import Screen from "@UIComponents/layout/Screen";
import * as React from "react";
import { Header } from "./Header";

export interface IUserDashboardProps {}

export function UserDashboard(props: IUserDashboardProps) {
  return (
    <Screen>
      <Header />
    </Screen>
  );
}
