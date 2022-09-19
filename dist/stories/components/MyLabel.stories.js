"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomBackgroundColor = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyLabel_1 = require("../../components/MyLabel");
exports.default = {
    title: 'UI/Etiquetas/MyLabel',
    component: MyLabel_1.MyLabel,
    /* Es posible cambiar el tipo de inputs que usa Storybook para mostrar las props: */
    argTypes: {
        /* Define que size se va a mostrar como un select (en lugar de un radio button)
        en la doc dentro de Storybook. En las opciones podemos definir la lista de
        opciones que tendra esa prop: */
        size: { control: 'select', options: ['normal', 'h1'] },
        color: { control: 'select' },
    }
};
/* Contruye nuestro componente */
/* Usando args podemos pasar todas las propiedades que pueda tener un componente: */
var Template = function (args) { return (0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, __assign({}, args)); };
/* Para crear paginas o historias del mismo componente. Por lo menos debemos crear una: */
exports.Basic = Template.bind({}); // Esto es una manera de crear una copia de este Template
/* Definir valores por defecto para las props en Storybook: */
exports.Basic.args = {
    size: 'normal',
    allCaps: false,
    color: 'primary',
};
exports.AllCaps = Template.bind({});
exports.AllCaps.args = {
    size: 'normal',
    allCaps: true,
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    size: 'normal',
    color: 'secondary',
};
exports.Tertiary = Template.bind({});
exports.Tertiary.args = {
    size: 'normal',
    color: 'tertiary',
};
exports.CustomBackgroundColor = Template.bind({});
exports.CustomBackgroundColor.args = {
    size: 'normal',
    color: 'tertiary',
    backgroundColor: 'black',
};
