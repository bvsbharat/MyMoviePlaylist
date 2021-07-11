import mount from "@test";
import renderer from "react-test-renderer";
import Card from "../Card";

describe(Card, () => {
    const component = mount(<Card />);

    it("renders without crashing", () => {
        expect(component).toBeTruthy();
        const componentRender = renderer.create(<Card />);
        const tree = componentRender.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
