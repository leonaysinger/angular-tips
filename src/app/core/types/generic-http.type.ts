import { HttpHeaders } from "@angular/common/http";

export type GenericHttpOptions = {
    body?: {
        [prop: string]: any;
    },
    params?: {
        [prop:string]: any;
    },
    headers?: HttpHeaders,

} & {
    [prop: string]: any;
}