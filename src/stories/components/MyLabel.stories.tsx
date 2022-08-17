import { MyLabel } from '../../components/MyLabel';

export default {
    title: 'UI/Etiquetas/MyLabel',
    component: MyLabel,
}

/* Contruye nuestro componente */
const Template = () => <MyLabel />

/* Para crear paginas o historias del mismo componente, por lo menos debemos crear una: */
export const Basic = Template.bind({}); // Esto es una manera de crear una copia de este Template

