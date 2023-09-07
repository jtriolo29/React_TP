/**
 * @jest-environment jsdom
 */
import { expect, test } from "@jest/globals";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Search from "../components/Search";
import CreateContact from "../components/CreateContact";
import ContactDetails from "../components/ContactDetails";
import { server } from "../utils/mocks/server";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

beforeAll(() => server.listen({ onUnhandledRequest: "warn" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// TEST 1
test("displays the home page", async function () {
  // ARRANGE
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Search />
    </MemoryRouter>,
  );

  //ACT
  const homePageWelcome = screen.getByTestId("homepageWelcome");

  // ASSERT
  expect(homePageWelcome).toBeDefined();
});

// TEST 2
test("displays the create contact page", async function () {
  // ARRANGE
  render(
    <MemoryRouter initialEntries={["/create"]}>
      <CreateContact />
    </MemoryRouter>,
  );

  // ACT
  const backButton = screen.getByTestId("backNavigation");

  // ASSERT
  expect(backButton).toBeDefined();
});

// TEST 3
test("displays the correct contact details", async function () {
  // ARRANGE
  render(
    <MemoryRouter initialEntries={["/1"]}>
      <ContactDetails />
    </MemoryRouter>,
  );

  // ACT
  const contactsName = await screen.findByText("Betty Holberton");

  // ASSERT
  expect(contactsName).toBeDefined();
});

// TEST 4
test("displays a contact update form when edit button is clicked", async function () {
  // ARRANGE
  render(
    <MemoryRouter initialEntries={["/1"]}>
      <ContactDetails />
    </MemoryRouter>,
  );

  //ACT
  await userEvent.click(screen.getByText("Edit"));

  // ASSERT
  expect(screen.getByLabelText("First Name")).toBeDefined();
  expect(screen.getByLabelText("Company:")).toBeDefined();
  expect(screen.getByText("Save")).toBeDefined();
});

// TEST 5
test("user can update contact info", async function () {
  // ARRANGE
  render(
    <MemoryRouter initialEntries={["/1"]}>
      <ContactDetails />
    </MemoryRouter>,
  );

  // ACT
  let editButton = screen.getByText("Edit");
  await userEvent.click(screen.getByText("Edit"));
  await userEvent.type(screen.getByLabelText("First Name"), "Betty");
  await userEvent.type(screen.getByLabelText("Last Name"), "Harvey");
  await userEvent.type(screen.getByLabelText("Company:"), "ENIAC");
  await userEvent.type(screen.getByLabelText("Phone Number:"), "4006670180");
  await userEvent.type(screen.getByLabelText("Email:"), "BetHol@gmail.com");
  await userEvent.click(screen.getByText("Save"));

  // ASSERT
  expect(screen.getByText("Betty Harvey")).toBeDefined();
  expect(editButton).toBeDefined();
});

// TEST 6
test("user can navigate back to the home page", async function () {
  // ARRANGE
  render(
    <MemoryRouter initialEntries={["/1"]}>
      <Routes>
        <Route path="*" element={<ContactDetails />} />
        <Route path="/" element={<Search />} />
      </Routes>
    </MemoryRouter>,
  );

  // ACT
  act(() => {
    waitFor(() => userEvent.click(screen.getByTestId("backNavigation")));
  });

  // ASSERT
  waitFor(() => expect(screen.getByTestId("homepageWelcome")).toBeDefined());
});
