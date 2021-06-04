import {mount} from '@vue/test-utils';
import AppHeader from '@/components/AppHeader.vue';

describe('AppHeader', () => {
    it('has data', () => {
        expect(typeof AppHeader.data).toBe('function')
    })
})

describe('Mounted AppHeader', () => {
    const wrapper = mount(AppHeader);
    it('renders correct markup', () => {
        expect(wrapper.html()).toContain('What is the sum of the two numbers?')
    })

    it('test addition, failure', () => {
        wrapper.setData ({ x1:20, x2: 25, guess: "15" })
        const button = wrapper.find('button')
        button.trigger('click')
        //expect(wrapper.vm.message).toBe('TRY AGAIN')
        expect(wrapper.vm.message).toMatchSnapshot()
    })

    it('test addition, success', () => {
        wrapper.setData ({ x1:2, x2: 8, guess: "10" })
        const button = wrapper.find('button')
        button.trigger('click')
        //expect(wrapper.vm.message).toBe('SUCCESS!')
        expect(wrapper.vm.message).toMatchSnapshot()
    })

    it('refresh button', () => {
        const button = wrapper.find('#refresh')
        button.trigger('click')
        //expect(wrapper.vm.message).toBe('REFRESHED!')
        expect(wrapper.vm.message).toMatchSnapshot()
    })
})