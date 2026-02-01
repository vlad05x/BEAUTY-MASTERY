export default {
    name: 'portfolioSection',
    type: 'document',
    title: 'Налаштування Портфоліо',
    fields: [
        {
            name: 'title',
            title: 'Заголовок секції',
            type: 'array',
            of: [{
                type: 'block',
                marks: {
                    decorators: [
                        { title: 'Gold Accent', value: 'gold' }
                    ]
                }
            }]
        },
        {
            name: 'buttonText',
            title: 'Текст кнопки',
            type: 'string',
            initialValue: 'Подивитися всю галерею'
        }
    ]
}