import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import Api from '../../api/Weather'
import Weather from '@/components/Weather.vue'

describe('Weather.vue', () => {
    it('api weather is online', async () => {
        const city = 'nuuk'; // kelvin
        const country = 'gl';
        const result = await Api.get(city, country);
        expect(result.id).to.be.a('number')
    }).timeout(15000);

    it('get weather props.city and props.country when passed', () => {
        const city = 'nuuk'; // kelvin
        const country = 'gl';
        const wrapper = shallowMount(Weather, {
            propsData: {city, country}
        });
        expect(wrapper.vm.weather).to.be.a('object')
    });
});


