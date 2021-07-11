import mount from "@test";
import renderer from "react-test-renderer";
import SearchInput from "../SearchInput";

describe(SearchInput, () => {
    const component = mount(<SearchInput />);

    it("renders without crashing", () => {
        expect(component).toBeTruthy();
        const componentRender = renderer.create(
            <SearchInput
                setSearchValue={() => {}}
                placeholder="Search"
                value=""
            />,
        );

        const tree = componentRender.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
