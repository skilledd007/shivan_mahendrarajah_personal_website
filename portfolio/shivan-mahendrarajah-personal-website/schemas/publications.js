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