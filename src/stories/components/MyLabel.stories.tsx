import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MyLabel } from '../../components/MyLabel';

export default {
    title: 'UI/Etiquetas/MyLabel',
    component: MyLabel,
    /* Es posible cambiar el tipo de inputs que usa Storybook para mostrar las props: */
    argTypes: {
        /* Define que size se va a mostrar como un select (en lugar de un radio button)
        en la doc dentro de Storybook. En las opciones podemos definir la lista de
        opciones que tendra esa prop: */
        size: { control: 'select', options: ['normal', 'h1'] },
        color: { control: 'select' },
    }
} as ComponentMeta<typeof MyLabel>

/* Contruye nuestro componente */
/* Usando args podemos pasar todas las propiedades que pueda tener un componente: */
const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

/* Para crear paginas o historias del mismo componente. Por lo menos debemos crear una: */
export const Basic = Template.bind({}); // Esto es una manera de crear una copia de este Template
/* Definir valores por defecto para las props en Storybook: */
Basic.args = {
    size: 'normal',
    allCaps: false,
    color: 'primary',
}

export const AllCaps = Template.bind({});
AllCaps.args = {
    size: 'normal',
    allCaps: true,
}

export const Secondary = Template.bind({});
Secondary.args = {
    size: 'normal',
    color: 'secondary',
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    color: 'tertiary',
}

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
    size: 'normal',
    color: 'tertiary',
    backgroundColor: 'black',
}
