export default {
    name: "contactSection",
    type: "document",
    title: "Контакти",
    fields: [
        {
            name: "title",
            title: "Заголовок",
            type: "string"
        },
        {
            name: "description",
            title: "Опис",
            type: "text"
        },
        {
            name: "email",
            title: "Email",
            type: "string"
        },
        {
            name: "phone",
            title: "Телефон",
            type: "string"
        },
        {
            name: "address",
            title: "Адреса",
            type: "text"
        },
        {
            name: 'businessHours',
            title: 'Графік роботи',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'days', type: 'string', title: 'Дні (напр. Пн-Пт)' },
                        { name: 'hours', type: 'string', title: 'Години (напр. 9:00 - 18:00)' }
                    ]
                }
            ]
        },
        {
            name: 'socials',
            title: 'Посилання на соцмережі',
            type: 'object',
            fields: [
                { name: 'instagram', type: 'url', title: 'Instagram' },
            ]
        }
    ]
}