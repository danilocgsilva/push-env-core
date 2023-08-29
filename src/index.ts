
export default class PushEnvCore {
    constructor(private name: string) { }

    public process(): void {
        console.log(`Now yes! The name is ${this.name}`)
    }

    public getFiles(): Array<{
        content: String,
        path: String
    }> {
        return [
            {
                content: "FROM nginx:latest",
                path: "Dockerfile"
            },
            {
                content: "version: '3.5'",
                path: "docker-compose.yml"
            }
        ]
    }
}