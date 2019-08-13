import 'react-native';
import React from 'react';
import App from '../App';
import PostsScreen from '../app/containers/posts_screen';
import ContentBlock from '../app/components/content_of_post/content_post_block';
import {test_posts} from "../app/config/test_posts";
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

it('PostsScreen renders correctly', () => {
  const component = renderer.create(<PostsScreen />).toJSON();
  expect(component).toMatchSnapshot();
});

describe("PostsScreen container", () => {
  test("PostsScreen changeState function working correctly", () => {
    const component = renderer.create(<PostsScreen/>);
    const instance = component.getInstance();
    expect(instance.state.show_list).toBe(test_posts);
  });
  test("PostsScreen showToast function working correctly", async () => {
    const component = renderer.create(<PostsScreen/>);
    const instance = component.getInstance();
    expect(instance.state.visible).toBe(false);
    await instance.showToast("hello");
    expect(instance.state.message).toBe("hello");
    expect(instance.state.visible).toBe(true);
  });
});

it('ContentBlock with props renders correctly', () => {
  const component = renderer.create(<ContentBlock item = {test_posts[0]}/>).toJSON();
  expect(component).toMatchSnapshot();
});