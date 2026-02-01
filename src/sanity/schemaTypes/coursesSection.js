export default {
    name: "coursesSection",
    title: "Секція курсів",
    type: "document",
    fields: [
        {
            name: "text",
            title: "Текст перед заголовком",
            type: "string",
            description: "Наприклад: EDUCATION & MENTORSHIP"
        },
        {
            name: "title",
            title: "Заголовок курсів",
            type: 'array',
            of: [{
                type: "block",
                styles: [],
                lists: [],
                marks: {
                    decorators: [
                        { title: 'Strong', value: 'strong' },
                        { title: 'Emphasis', value: 'em' },
                        { title: 'Gray Accent', value: 'gray' }
                    ]
                }
            }]
        },
        {
            name: 'description',
            type: 'text',
            title: 'Опис курсів',
        },
        {
            name: "courseList",
            title: "Список курсів (картки)",
            type: "array",
            of: [
                {
                    type: "object",
                    name: "courseCard",
                    title: "Картка курсу",
                    fields: [
                        {
                            name: "badge",
                            title: "Рівень (Badge)",
                            type: "string",
                            description: "Наприклад: ALL LEVELS або INTERMEDIATE TO ADVANCED"
                        },
                        {
                            name: "duration",
                            title: "Тривалість",
                            type: "string",
                            description: "Наприклад: 3 Full Days"
                        },
                        {
                            name: "courseTitle",
                            title: "Назва курсу",
                            type: "string"
                        },
                        {
                            name: "courseDescription",
                            title: "Короткий опис",
                            type: "text"
                        },
                        {
                            name: "features",
                            title: "Особливості (список із галочками)",
                            type: "array",
                            of: [{ type: "string" }],
                            description: "Додайте пункти, які будуть відображатися з галочками"
                        },
                        {
                            name: "price",
                            title: "Вартість (Tuition)",
                            type: "string",
                            description: "Наприклад: $2,400"
                        }
                    ]
                }
            ]
        }
    ]
}