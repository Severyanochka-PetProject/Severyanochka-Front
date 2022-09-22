import {render, screen} from "@testing-library/react";
import BorderButton from "../../components/UI/BorderButton/BorderButton";

describe("BorderButton", () => {
    test("testing prop Text (Not Null)", () => {
        render(<BorderButton  text={"Test case"}/>);

        const text = screen.getByText("Test case");

        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        expect(text).toBeInTheDocument();
    })
})
