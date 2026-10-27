import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Navbar from "@/components/Navbar";

vi.mock("@tanstack/react-router", () => ({
  Link: ({ children, to, className, "aria-label": ariaLabel }: any) => (
    <a href={to} className={className} aria-label={ariaLabel}>
      {children}
    </a>
  ),
  useLocation: vi.fn(),
}));

import { useLocation } from "@tanstack/react-router";

describe("Navbar", () => {
  it("renders full navigation bar on main page (/)", () => {
    vi.mocked(useLocation).mockReturnValue({ pathname: "/" } as any);

    render(<Navbar />);

    // Logo should be present
    expect(screen.getByAltText("EMSTRAP")).toBeInTheDocument();

    // Nav links and controls should be present on main page (desktop and mobile)
    expect(screen.getAllByText("Products").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Who We Serve").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Resources").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Company").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Contact").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Login").length).toBeGreaterThan(0);
  });

  it("renders only the logo and no nav links on other pages", () => {
    vi.mocked(useLocation).mockReturnValue({
      pathname: "/corporate-companies",
    } as any);

    render(<Navbar />);

    // Logo should be present
    expect(screen.getByAltText("EMSTRAP")).toBeInTheDocument();

    // Nav links, dropdowns, and buttons should NOT be present
    expect(screen.queryByText("Products")).not.toBeInTheDocument();
    expect(screen.queryByText("Who We Serve")).not.toBeInTheDocument();
    expect(screen.queryByText("Resources")).not.toBeInTheDocument();
    expect(screen.queryByText("Company")).not.toBeInTheDocument();
    expect(screen.queryByText("Contact")).not.toBeInTheDocument();
    expect(screen.queryByText("Login")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("Toggle menu")).not.toBeInTheDocument();
  });
});
