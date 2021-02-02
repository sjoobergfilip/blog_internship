export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string"
        },
        {
            name: "description",
            type: "text"
        },
        {
            name: "link",
            type: "url"
        },
        {
            name: "mainImage",
            title: "Main image",
            type: "image",
            options: {
                hotspot: true
            }
        }
    ]
};
