export default {
    name: "heroSection",
    type: "document",
    title: "Головний екран",
    fields: [
        {
            name: "text",
            title: "Текст перед заголовком",
            type: "string"
        },
        {
            name: "title",
            title: "Заголовок секції",
            type: 'array',
            of: [{
                type: "block",
                styles: [],
                lists: [],
                marks: {
                    decorators: [
                        { title: 'Strong', value: 'strong' },
                        { title: 'Emphasis', value: 'em' },
                        { title: 'Gold Accent', value: 'gold' }
                    ]
                }
            }]
        },
        {
            name: 'description',
            type: 'text',
            title: 'Опис секції',
        },
    ]
}