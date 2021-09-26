# What is GraphQL?

- [GraphQL](https://graphql.org/) is a powerfull query language.

- Allows for a more flexible & efficient approach than rest.

- According to the  [GraphQL](https://graphql.org/) official documentation :-

` "GraphQL is a query language for your API, and a server-side runtime for executing queries using a type system you define for your data. GraphQL isn't tied to any specific database or storage engine and is instead backed by your existing code and data."`

 #

# RESTful approach vs GraphQL approach
 ## 🔗🚀 RESTful approach
 ### Requests and responses structure in a REST API

 ![Basic of REST API](https://i1.wp.com/blog.api.rakuten.net/wp-content/uploads/sites/2/2020/09/REST-API-basics.jpeg?w=1126&ssl=1)

- Endpoint for getting a perticular book:
    ``` url 
    domain.com/books/:id
    # title, genre, reviews, authorid
    ```
- Endpoint for getting the author info of that book:
    ``` url 
    domain.com/authors/:id
   # name, age, biography. booksIds 
    ```
#
## How clients access data in GraphQL
 ## 🔗🚀 GraphQL approach
![Basic of GraphQL](https://i2.wp.com/blog.api.rakuten.net/wp-content/uploads/sites/2/2020/09/GraphQL-API-basics.jpeg?w=1433&ssl=1)

``` query
- Query to get book data and it'sauthor data (and the other books):

{
    book(id: 123){
        title
        genre
        reviews
        author{
            name
            bio
            books{
                name
            }
        }
    }
}