import React from 'react';

import app from '../../../../lib/firebase';
import db from '../../../../lib/firestone';
import { getAuth } from 'firebase/auth';



export async function GET(req: Request, res: Response) {

    const auth = getAuth(app);

    
    const api_contact_info = {
        "name": "contact",
        "version": "0.0.1",
        "description": "contact",
        "author": "@kuraykaraaslan",
        "license": "MIT",
        "routes": {
            "house_rental": {
                "GET": {
                    "description": "house_rental",
                    "params": {
                        "id": "string"
                    }
                }
            }
        }
    };

    return Response.json(api_contact_info);
}
        