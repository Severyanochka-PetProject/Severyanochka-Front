import {render, screen} from "@testing-library/react";
import ErrorHint from "../../components/UI/ErrorHint/ErrorHint";

describe("ErrorHint", () => {
    test("testing prop message and showTriangle = true (default)", () => {
        render(<ErrorHint message={"Test message"} />)

        const messageTest = screen.getByText('Test message');

        // eslint-disable-next-line testing-library/no-node-access
        const imageTag = document.querySelector("img");

        expect(messageTest).toBeInTheDocument();
        expect(imageTag).toBeInTheDocument();
    })

    test("testing prop showTriangle = false", () => {
        render(<ErrorHint message={"Test message"} showTriangle={false} />)

        // eslint-disable-next-line testing-library/no-node-access
        const imageTag = document.querySelector("img");

        expect(imageTag).toBeFalsy();
    })
})
