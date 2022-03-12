import { ComponentMeta, ComponentStory } from '@storybook/react'

import ErrorHint from "../components/UI/ErrorHint/ErrorHint";

export default {
    title: 'ErrorHint',
    component: ErrorHint,
} as ComponentMeta<typeof ErrorHint>;

export const Error: ComponentStory<typeof ErrorHint> = () => <ErrorHint message='Пароль неверный! Попробуйте позже' />;
