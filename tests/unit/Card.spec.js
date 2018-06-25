import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import Card from '@/components/Card.vue'

describe('Card.vue', () => {
    it('render card props.isLoading when passed', () => {
        const wrapper = shallowMount(Card, {
            propsData: { isLoading: false },
        });
        expect(wrapper.vm.isLoading).to.equal(false);
    });
});


