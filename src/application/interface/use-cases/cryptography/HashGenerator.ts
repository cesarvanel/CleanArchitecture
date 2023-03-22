export  interface HahGenerator {
    generate : (data : string) => Promise<string>
}