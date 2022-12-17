import { describe, expect, test, it } from 'vitest';

import { mount } from '@vue/test-utils';

import RegisterArea from '../src/components/RegisterArea.vue';
import TableNotes from '../src/components/TableNotes.vue'


describe('Test Register zone', ()=>{

    test('id should be register zone', () => {
        const wrapper = mount(RegisterArea);
        const Sections= [];
        const TableZone = wrapper.findAll('section')
        const sectionsId = TableZone.forEach(element => {
            Sections.push(element.element.id);
        });
        
        expect(Sections).toStrictEqual( ["register-zone","table-zone",]);
    });
    it('Mounts properly', async () => {
        const name = 'David';
        const course = 'spanish';
        const number = 3;
        const wrapper = mount(RegisterArea);
        
        await wrapper.find('input[type="text"]').setValue(name);
        await wrapper.findAll('input')[1].setValue(course);
        await wrapper.find('input[type="number"]').setValue(number);
        await wrapper.find('button').trigger('click');
        
        expect(wrapper.findComponent(TableNotes).exists()).toBeTruthy();
        expect(wrapper.findComponent(TableNotes).find('th').text()).toBe(name);
        expect(wrapper.findComponent(TableNotes).findAll('td')[0].text()).toBe(course);
        expect(wrapper.findComponent(TableNotes).findAll('td')[1].text()).toEqual(`${number}`);
        
      });
})