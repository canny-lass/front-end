import FormInput from "@UIComponents/form/FormInput/FormInput";
import Screen from "@UIComponents/layout/Screen";
import Section from "@UIComponents/layout/Section";
import { Card } from "antd";
import { Form, Formik, FormikHelpers } from "formik";
import { UserRegistrationValues } from "./UserRegistrationValues";
import * as React from "react";
import { Routes, useNavigate } from "react-router-dom";
import UserRegistrationSchema from "@schemas/userRegistrationSchema";
import ButtonDefault from "@UIComponents/buttons/ButtonDefault";
import ROUTES from "@constants/ROUTES";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

export interface IUserRegistrationProps {}

export function UserRegistration(props: IUserRegistrationProps) {
  const navigate = useNavigate();

  const initialValues: UserRegistrationValues = {
    county: "",
    email: "",
    eircode: "",
    firstname: "",
    lastname: "",
    password: "",
  };

  const onSubmit = async (
    { email, password }: UserRegistrationValues,
    actions: FormikHelpers<UserRegistrationValues>
  ) => {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      navigate(ROUTES.UserDashboard);
      // await authStore.signIn(values);
      // await authStore.getUserProfile();
    } catch (error) {
      // actions.setSubmitting(false);
    }
  };

  const signUpWithGoogle = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate(ROUTES.UserDashboard);
      // await authStore.signIn(values);
      // await authStore.getUserProfile();
    } catch (error) {
      // actions.setSubmitting(false);
    }
  };

  return (
    <Screen className="flex items-center justify-center">
      <Section className="h-full max-w-200 w-full">
        <Card>
          <ButtonDefault className="w-full mb-8" onClick={signUpWithGoogle}>
            Sign Up With Google
          </ButtonDefault>
          <Formik
            validationSchema={UserRegistrationSchema}
            initialValues={initialValues}
            onSubmit={onSubmit}
          >
            {({ handleChange, values, errors }) => (
              <Form>
                <FormInput
                  name="firstname"
                  placeholder="First Name"
                  onChange={handleChange}
                  value={values.firstName}
                  errors={errors.firstName}
                />
                <FormInput
                  name="lastname"
                  placeholder="Last Name"
                  onChange={handleChange}
                  value={values.lastname}
                  errors={errors.lastname}
                />
                <FormInput
                  name="email"
                  placeholder="email"
                  onChange={handleChange}
                  value={values.email}
                  errors={errors.email}
                />
                <FormInput
                  name="eircode"
                  placeholder="eircode"
                  onChange={handleChange}
                  value={values.eircode}
                  errors={errors.eircode}
                />
                <FormInput
                  name="county"
                  placeholder="county"
                  onChange={handleChange}
                  value={values.county}
                  errors={errors.county}
                />
                <FormInput
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={values.password}
                  errors={errors.password}
                />
                <ButtonDefault type="submit" className="w-full">
                  Submit
                </ButtonDefault>
              </Form>
            )}
          </Formik>
        </Card>
      </Section>
    </Screen>
  );
}
