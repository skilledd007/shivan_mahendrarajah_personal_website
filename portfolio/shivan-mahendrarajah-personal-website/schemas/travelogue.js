export default {
    name: "travelogue",
    title: "Travelogue",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
        }, 
        {
            name: "thumbnail",
            type: "image",
        },
        {
            name: "date",
            type: "datetime",
        },
        {
            name: "place",
            type: "string"
        } ,
        {
            name: "post",
            type: "text",
        } ,
    ]
}