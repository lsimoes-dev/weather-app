import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mockAxios = new MockAdapter(axios);

test("renders search button", () => {
    render(<App />);
    const linkElement = screen.getByText(/Search city/i);
    expect(linkElement).toBeInTheDocument();
});
