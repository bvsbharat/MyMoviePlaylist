import mount from "@test";
import renderer from "react-test-renderer";
import ResultInfo from "../ResultInfo";

describe(ResultInfo, () => {
    const component = mount(<ResultInfo />);

    it("renders without crashing", () => {
        expect(component).toBeTruthy();
        const componentRender = renderer.create(<ResultInfo />);
        const tree = componentRender.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
