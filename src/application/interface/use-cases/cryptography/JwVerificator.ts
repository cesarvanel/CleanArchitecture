export interface JwtVerfier {
    verify:(token : string) => Promise<string | null >

}