import { CustomFontColor } from '../../components/CustomFontColor';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'UI/Etiquetas/CustomFontColor',
    component: CustomFontColor,
    argTypes: {
        fontColor: { control: 'color' },
    }
} as ComponentMeta<typeof CustomFontColor>

const Template: ComponentStory<typeof CustomFontColor> = (args) => <CustomFontColor {...args} />

export const Basic = Template.bind({});
Basic.args = {
    fontColor: '#5517ac',
    size: 'h1',
}
