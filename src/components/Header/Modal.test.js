import Desktop from "./Desktop";
import { render, screen } from "@testing-library/react";
describe("Oops modal"),
  () => {
    test("O estado deve iniciar como boolean false"),
      () => {
        const {} = render(<Desktop />);

        const teste = screen.getByText("iriri");

        expect(teste).toBeInTheDocument()
      };
  };
