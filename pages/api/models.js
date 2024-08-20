// api/models.js
const models = [
    { id: 1, name: 'GPT-3', description: 'Generative Pre-trained Transformer 3' },
    { id: 2, name: 'DALL-E', description: 'Generative AI for image creation' },
    { id: 3, name: 'Stable Diffusion', description: 'Open-source text-to-image AI model' },
  ];
  
  export default async function handler(req, res) {
    const { method } = req;
  
    switch (method) {
      case 'GET':
        res.status(200).json(models);
        break;
        
      case 'POST':
        try {
          const { name, description } = req.body;
          const newModel = {
            id: Math.max(...models.map(model => model.id)) + 1,
            name,
            description,
          };
          models.push(newModel);
          res.status(201).json(newModel);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Failed to create model' });
        }
        break;
  
      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
  