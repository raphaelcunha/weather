import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import {convert} from '../../src/utils/convertTemperature'
import Temperature from '@/components/Temperature.vue'

describe('Temperature.vue', () => {
    it('convert kelvin in celcius when passed', () => {
        const value = 300; // kelvin
        const type = 'celcius';
        const wrapper = shallowMount(Temperature, {
            propsData: {type, value}
        });
        expect(wrapper.text()).to.include(`${convert({type, value}).value}°`)
    });

    it('convert kelvin in celcius and show in blue color when celcius < 5 passed', () => {
        const value = 200; // kelvin
        const type = 'celcius';
        const wrapper = shallowMount(Temperature, { propsData: {type, value} });
        expect(wrapper.text()).to.include(`${convert({type, value}).value}°`)
        expect(wrapper.classes()).contain('blue')
    });

    it('convert kelvin in celcius and show in orange color when celcius > 5 and <= 25 passed', () => {
        const value = 298.15; // kelvin
        const type = 'celcius';
        const wrapper = shallowMount(Temperature, { propsData: {type, value} });
        expect(wrapper.text()).to.include(`${convert({type, value}).value}°`)
        expect(wrapper.classes()).contain('orange')
    });

    it('convert kelvin in celcius and show in red color when celcius >= 25 passed', () => {
        const value = 300; // kelvin
        const type = 'celcius';
        const wrapper = shallowMount(Temperature, { propsData: {type, value} });
        expect(wrapper.text()).to.include(`${convert({type, value}).value}°`)
        expect(wrapper.classes()).contain('red')
    });
});
