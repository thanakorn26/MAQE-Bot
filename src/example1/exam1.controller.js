
import * as service from './exam1.service.js'

export const botController = async (req,res) => {
    const { code } = req.body;
    if (!code || typeof code !== 'string') {
        return res.status(400).send({ error: 'Invalid input' });
    }

    try {
        const response = await service.botService(code);
        if(response.status == 'Success') return res.send(response);

    } catch (error) {
        return res.status(500).send({ error: 'Internal Server Error' });
    }
}