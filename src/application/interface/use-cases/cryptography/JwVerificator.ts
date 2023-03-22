export interface JwtVerfier {
    verify:(jwt : string) => Promise<string | null >

}