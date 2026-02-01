export default {
    name: "testimonials",
    title: 'Відгуки',
    type: 'document',
    fields: [
        {
            name: "text",
            title: "Текст перед заголовком", 
            type: "string",
        },
        {
            name: 'review',
            type: 'text',
            title: 'Текст відгуку',
        },
        {
            name: "image",
            title: "Зображення",
            type: "image",
        },
        {
            name: "name_person",
            title: "Ім'я людини",
            type: "string",
        }
    ]
}