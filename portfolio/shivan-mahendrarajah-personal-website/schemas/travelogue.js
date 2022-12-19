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
            name: "slug",
            title: "Unique Page URL",
            type: "slug",
            options: {
              source: 'title',
              maxLength: 97,
            },
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