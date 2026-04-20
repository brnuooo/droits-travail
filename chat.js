export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Messages manquants' });
  }

  const SYSTEM = `Tu es un assistant juridique spécialisé en droit du travail français.
Tu réponds UNIQUEMENT selon le Code du travail français. N'invente jamais.

FORMAT DE RÉPONSE — réponds UNIQUEMENT avec ce JSON valide, rien d'autre avant ou après :
{
  "reponse_courte": "Réponse directe en 1-2 phrases maximum. Claire, simple, sans jargon.",
  "articles": [
    {
      "code": "L3121-36",
      "titre": "Nom court de l'article",
      "explication": "Ce que dit cet article concrètement dans cette situation, en 2-3 phrases simples."
    }
  ],
  "detail": "Explication complète en 3-5 phrases avec le contexte légal, les nuances, les conditions.",
  "reponse_employeur": "Phrase exacte que la personne peut dire ou envoyer à son employeur, en invoquant les articles. Ton ferme mais professionnel."
}`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-opus-4-5',
        max_tokens: 1200,
        system: SYSTEM,
        messages,
      }),
    });

    const data = await response.json();

    if (data.error) {
      return res.status(500).json({ error: data.error.message });
    }

    return res.status(200).json({ content: data.content });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
