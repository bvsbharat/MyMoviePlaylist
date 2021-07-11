import mount from "@test";
import renderer from "react-test-renderer";
import ResultList from "../ResultList";

describe(ResultList, () => {
    const component = mount(<ResultList />);

    it("renders without crashing", () => {
        expect(component).toBeTruthy();
        const componentRender = renderer.create(<ResultList />);
        const tree = componentRender.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
