export default {
    name: 'servicesSection',
    type: 'document',
    title: 'Секція Послуг',
    fields: [
        {
            name: 'title',
            title: 'Заголовок секції',
            type: 'array',
            of: [{
                type: 'block',
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
        {
            name: 'servicesList',
            type: 'array',
            title: 'Список послуг',
            of: [
                {
                    type: 'object',
                    title: 'Послуга',
                    fields: [
                        { name: 'title', type: 'string', title: 'Назва послуги' },
                        { name: 'description', type: 'string', title: 'Опис послуги' },
                        {
                            name: 'number',
                            type: 'string',
                            title: 'Номер послуги',
                            description: 'Наприклад: 01'
                        },
                        {
                            name: 'image',
                            type: 'image',
                            title: 'Фонове зображення',
                            options: { hotspot: true }
                        },
                        {
                            name: 'iconName',
                            type: 'string',
                            title: 'Іконка (Lucide)',
                            options: {
                                list: [
                                    { title: 'Зірки (Sparkles)', value: 'Sparkles' },
                                    { title: 'Серце (Heart)', value: 'Heart' },
                                    { title: 'Блискавка (Zap)', value: 'Zap' },
                                    { title: 'Зірка (Star)', value: 'Star' },
                                ],
                            },
                        },
                    ]
                }
            ]
        }
    ]
}