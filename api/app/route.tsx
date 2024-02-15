export async function GET(req: Request, res: Response) {
    
    const api_info = {
        "name": "Sozlesmeci API",
        "version": "0.0.1",
        "description": "Sozlesmeci API",
        "author": "@kuraykaraaslan",
        "license": "MIT"
    };

    return Response.json(api_info);
}
