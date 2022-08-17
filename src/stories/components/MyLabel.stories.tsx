import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MyLabel } from '../../components/MyLabel';

export default {
    title: 'UI/Etiquetas/MyLabel',
    component: MyLabel,
} as ComponentMeta<typeof MyLabel>

/* Contruye nuestro componente */
const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

/* Para crear paginas o historias del mismo componente, por lo menos debemos crear una: */
export const Basic = Template.bind({}); // Esto es una manera de crear una copia de este Template
/* Definir valores por defecto para las props en Storybook: */
Basic.args = {
    size: 'normal'
}

export const AllCaps = Template.bind({}); 

export const Secondary = Template.bind({}); 
