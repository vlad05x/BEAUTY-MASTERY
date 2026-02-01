export default {
    name: 'portfolioItem',
    type: 'document',
    title: 'Портфоліо',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Заголовок'
        },
        {
            name: 'category',
            type: 'string',
            title: 'Категорія',
            options: {
                list: [
                    { title: 'Brows', value: 'Brows' },
                    { title: 'Lips', value: 'Lips' },
                ]
            }
        },
        { name: 'before', type: 'image', title: 'Фото ДО', options: { hotspot: true } },
        { name: 'after', type: 'image', title: 'Фото ПІСЛЯ', options: { hotspot: true } },
    ]
}