import { describe, expect, test } from 'vitest';

import { mount } from '@vue/test-utils';

import Header from '../src/components/Header.vue'


describe('Header Component', ()=>{

    test('should contain a props', () => {
        const title = 'notes Student'
        const wrapper = mount(Header, {
            props: {title},
        });
        expect(wrapper.find('h1').text()).toBe(title);
    });
})