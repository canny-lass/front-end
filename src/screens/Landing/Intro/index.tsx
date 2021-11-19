import ROUTES from "@constants/ROUTES";
import ButtonDefault from "@UIComponents/buttons/ButtonDefault";
import { DefaultButton } from "@UIComponents/buttons/DefaultButton";
import Section from "@UIComponents/layout/Section";
import H4 from "@UIComponents/Typography/H4";
import Paragraph from "@UIComponents/Typography/Paragraph";
import * as React from "react";
import { Link } from "react-router-dom";

export interface IIntroProps {}

export function Intro(props: IIntroProps) {
  return (
    <div>
      <Section>
        <div className="grid gap-x-24 grid-cols-2">
          <div className="py-10">
            <H4 className="mb-4">Help your loved ones grow their loved ones.</H4>
            <Paragraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
              voluptate hic quos autem minus impedit aliquam, laudantium quaerat
              cum eligendi doloribus nihil, eum, sit possimus suscipit. Suscipit
              magnam accusantium officia.
            </Paragraph>
            <Paragraph className="mb-10">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
              voluptate hic quos autem minus impedit aliquam, laudantium quaerat
              cum eligendi doloribus nihil, eum, sit possimus suscipit. Suscipit
              magnam accusantium officia.
            </Paragraph>
            <div className="grid gap-x-8 grid-cols-2">
            <Link to={ROUTES.UserRegistration}>
                <ButtonDefault className="w-full">Sign Up</ButtonDefault>
              </Link>
              <ButtonDefault>Log In</ButtonDefault>
            </div>
          </div>
          <div>
            <div className="bg-gray-500 rounded-sm h-full"></div>
          </div>
        </div>
      </Section>
 </div>
  );
}
