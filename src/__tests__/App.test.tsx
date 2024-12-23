import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App Component", () => {
  it("renders without crashing", () => {
    // 測試應用可以正常渲染
    render(
        <App />
    );
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });
});
