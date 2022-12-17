import { describe, expect, test } from 'vitest';

import { mount } from '@vue/test-utils';

import App  from '../src/App.vue';

describe('App Component', ()=>{

  test('should contain a header with title', () => {
      const wrapper = mount(App);
      const appHeader = wrapper.findComponent('Header');
      console.log(wrapper.find('main').exists());
      
      expect(wrapper.find('main').exists()).toBeTruthy();
      expect(appHeader.exists()).toBeTruthy();
  });
  test('the class should be container', () => {
      const wrapper = mount(App);
      const appDivClass= wrapper.find('main');
      expect(appDivClass.classes().includes('container')).toBe(true);
  });
})
