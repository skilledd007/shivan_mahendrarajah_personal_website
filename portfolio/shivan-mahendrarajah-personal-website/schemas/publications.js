export default {
    name: "publications",
    title: "Publications",
    type: "document",
    fields: [
        {
            name: "Book_Title",
            type: "string",
        }, 
        {
            name: "slug",
            title: "Unique Page URL",
            type: "slug",
            options: {
              source: 'Book_Title',
              maxLength: 97,
            },
        },
        {
            name: "thumbnail",
            type: "image",
        },
        {
            name: "date_published",
            type: "datetime",
        },
        {
            name: "post",
            type: "text",
        } ,
    ]
}