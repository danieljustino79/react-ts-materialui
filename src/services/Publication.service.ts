import { IPublication } from "../models/Publication.model"

const mock = [
    {
        id:1,
        title:'Unix',
        content:'Linux a Unix',
        tags:'api,command-line,backend,design,frontend,http,infra,security,storage,test,linux'
    },
    {
        id:2,
        title:'Terminal',
        content:'Command line',
        tags:'command-line,http,infra,security,linux'
    },
    {
        id:3,
        title:'Linux',
        content:'basic Ubuntu',
        tags:'command-line,http,infra,security,storage,linux'
    },
    {
        id:4,
        title:'Api',
        content:'web api',
        tags:'api,backend,frontend,http,infra,security,storage,test'
    },
]

export abstract class PublicationService{
    static getPublications(): IPublication[] {
        return mock as IPublication[];
    };
}