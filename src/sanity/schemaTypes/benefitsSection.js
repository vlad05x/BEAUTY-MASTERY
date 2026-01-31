export default {
    name: 'benefitsSection',
    type: 'document',
    title: 'Секція Переваг',
    fields: [
        {
            name: 'items',
            type: 'array',
            title: 'Список переваг',
            of: [
                {
                    type: 'object',
                    title: 'Перевага',
                    fields: [
                        {
                            name: 'iconName',
                            type: 'string',
                            title: 'Назва іконки (Lucide)',
                            description: 'Наприклад: Shield, Clock, Award, Star',
                        },
                        {
                            name: 'title',
                            type: 'string',
                            title: 'Заголовок',
                        },
                        {
                            name: 'description',
                            type: 'text',
                            title: 'Опис',
                        },
                    ],
                },
            ],
        },
    ],
}