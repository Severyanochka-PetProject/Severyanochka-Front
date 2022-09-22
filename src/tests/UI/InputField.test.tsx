import {fireEvent, render, screen} from "@testing-library/react";
import InputField from "../../components/UI/InputField/InputField";

describe("InputField", () => {
    test("testing props", () => {
        render(<InputField title={"InputField Title"} onInput={(e) => e} />);
        expect(screen.getByText("InputField Title")).toBeInTheDocument();
    })
})
