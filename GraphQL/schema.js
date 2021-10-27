import { buildSchema } from 'graphql'

export default schema = buildSchema(`
    type Family{
        id: ID
        Name: String
        relation: String
        age: Int
        email: String
        stack: Stack
        teachingAssist : [TeachAssist]
    }
    type TeachAssist{
        fName: String
        LName: String
        experience: Int
    }

    enum Stack{
        WEB
        MOBILE
        OTHER
    }

    type Query{
        getMe(id: ID): Family
    }

    input FamilyInput{
        id: ID
        Name: String
        relation: String
        age: Int
        email: String
        stack: Stack
        teachingAssist : [TeachAssistInput]
    }

    input TeachAssistInput{
        fName: String
        LName: String
        experience: Int
    }
    type Mutation{
        setMe(input: FamilyInput):Family
    }

`)