import React from "react"
import {create} from "react-test-renderer";
import Button from "."

const tree = create(<Button><div className="button-text">Click Me</div></Button>);

test('snapshot', () => {
    console.log(tree.root.props.children)
    expect(tree.root.props.children.children).toEqual('Click Me')
})