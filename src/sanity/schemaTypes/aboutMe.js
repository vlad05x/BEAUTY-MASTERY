export default {
    name: 'aboutMe',
    title: 'Обо мне',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Заголовок',
            type: 'string',
        },
        {
            name: 'bio',
            title: 'Текст о себе',
            type: 'array', 
            of: [{ type: 'block' }],
        },
        {
            name: 'achievements',
            title: 'Достижения/Сертификаты',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', title: 'Заголовок (напр. Certified Master)', type: 'string' },
                        { name: 'subtitle', title: 'Подзаголовок (напр. International Academy)', type: 'string' }
                    ]
                }
            ]
        },
        {
            name: 'profileImage',
            title: 'Фото профиля',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
}