// api/contact.js - Serverless Function Vercel Sécurisée
// Exécutée côté serveur Node.js sur Vercel (Les clés SMTP ne sont JAMAIS exposées au navigateur)

export default async function handler(req, res) {
  // Accepter uniquement les requêtes POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Méthode non autorisée' })
  }

  try {
    // S'assurer que le body est correctement parsé
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {})
    const { profileTitle, nom, email, tel, univers, objectif, company, partType, budget, message, honeypot } = body

    // 1. PROTECTION SÉCURITÉ HONEYPOT (Anti-bot / Anti-Spam automatique)
    if (honeypot && String(honeypot).trim() !== '') {
      return res.status(200).json({ success: true, message: 'Message traité' })
    }

    // 2. VALIDATION DES CHAMPS
    if (!nom || !email || !message) {
      return res.status(400).json({ success: false, error: 'Veuillez remplir les champs obligatoires (nom, email, message).' })
    }

    // Validation du format Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, error: 'Format d\'adresse email invalide.' })
    }

    // 3. RECUPERATION DES IDENTIFIANTS SMTP DEPUIS LES VARIABLES D'ENVIRONNEMENT VERCEL
    const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com'
    const SMTP_PORT = process.env.SMTP_PORT || 465
    const SMTP_USER = process.env.SMTP_USER || 'contactbsdsport@gmail.com'
    const SMTP_PASS = process.env.SMTP_PASS
    const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'contactbsdsport@gmail.com'

    // Template HTML d'e-mail ultra-design aux couleurs de BSD Sport (Fond sombre premium, accent orange #ff7043, badges et boutons d'action)
    const emailHtmlTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nouveau Message BSD Sport</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #090909; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #090909; padding: 30px 10px;">
          <tr>
            <td align="center">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #111111; border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 20px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.6);">
                
                <!-- HEADER BRANDING BSD SPORT -->
                <tr>
                  <td style="background-color: #0d0d0d; padding: 25px 30px; border-bottom: 2px solid #ff7043; text-align: left;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td>
                          <span style="display: inline-block; font-size: 22px; font-weight: 900; color: #ffffff; letter-spacing: 2px; text-transform: uppercase;">
                            BSD <span style="color: #ff7043;">SPORT</span>
                          </span>
                          <span style="display: block; font-size: 10px; color: #888888; letter-spacing: 3px; text-transform: uppercase; margin-top: 3px;">
                            COMMUNICATION & SITE WEB
                          </span>
                        </td>
                        <td align="right">
                          <span style="display: inline-block; padding: 6px 14px; background-color: rgba(255, 112, 67, 0.15); border: 1px solid #ff7043; color: #ff7043; font-size: 11px; font-weight: bold; border-radius: 50px; text-transform: uppercase; letter-spacing: 1px;">
                            ${profileTitle || 'CONTACT'}
                          </span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- CONTENU PRINCIPAL DU MESSAGE -->
                <tr>
                  <td style="padding: 30px; color: #f1e7d0;">
                    
                    <h1 style="font-size: 20px; font-weight: 800; color: #ffffff; margin: 0 0 20px 0; text-transform: uppercase; letter-spacing: 0.5px;">
                      Nouveau Message de ${nom}
                    </h1>

                    <!-- GRILLE D'INFORMATIONS DU CLIENT -->
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #181818; border-radius: 14px; padding: 20px; margin-bottom: 25px; border: 1px solid rgba(255,255,255,0.06);">
                      <tr>
                        <td style="padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.08); font-size: 13px; color: #a0a0a0; width: 140px; font-weight: bold;">
                          NOM & PRÉNOM
                        </td>
                        <td style="padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.08); font-size: 14px; color: #ffffff; font-weight: 600;">
                          ${nom}
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.08); font-size: 13px; color: #a0a0a0; font-weight: bold;">
                          EMAIL
                        </td>
                        <td style="padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.08); font-size: 14px; color: #ff7043; font-weight: 600;">
                          <a href="mailto:${email}" style="color: #ff7043; text-decoration: none;">${email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; ${company || objectif || partType || budget ? 'border-bottom: 1px solid rgba(255,255,255,0.08);' : ''} font-size: 13px; color: #a0a0a0; font-weight: bold;">
                          TÉLÉPHONE
                        </td>
                        <td style="padding: 8px 0; ${company || objectif || partType || budget ? 'border-bottom: 1px solid rgba(255,255,255,0.08);' : ''} font-size: 14px; color: #ffffff;">
                          ${tel ? `<a href="tel:${tel}" style="color: #ffffff; text-decoration: none;">${tel}</a>` : '<span style="color: #666;">Non renseigné</span>'}
                        </td>
                      </tr>
                      ${company ? `
                      <tr>
                        <td style="padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.08); font-size: 13px; color: #a0a0a0; font-weight: bold;">ENTREPRISE / ADM</td>
                        <td style="padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.08); font-size: 14px; color: #ffffff; font-weight: 600;">${company}</td>
                      </tr>` : ''}
                      ${objectif ? `
                      <tr>
                        <td style="padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.08); font-size: 13px; color: #a0a0a0; font-weight: bold;">OBJECTIF</td>
                        <td style="padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.08); font-size: 14px; color: #ffffff;">${objectif}</td>
                      </tr>` : ''}
                      ${partType ? `
                      <tr>
                        <td style="padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.08); font-size: 13px; color: #a0a0a0; font-weight: bold;">TYPE PROJET</td>
                        <td style="padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.08); font-size: 14px; color: #ffffff;">${partType}</td>
                      </tr>` : ''}
                      ${budget ? `
                      <tr>
                        <td style="padding: 8px 0; font-size: 13px; color: #a0a0a0; font-weight: bold;">PRÉCISIONS / TAILLE</td>
                        <td style="padding: 8px 0; font-size: 14px; color: #ffffff;">${budget}</td>
                      </tr>` : ''}
                    </table>

                    <!-- CONTENU DU MESSAGE -->
                    <div style="margin-bottom: 25px;">
                      <span style="display: block; font-size: 12px; font-weight: bold; color: #a0a0a0; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">
                        MESSAGE DU DEMANDEUR :
                      </span>
                      <div style="background-color: #181818; padding: 20px; border-radius: 12px; border-left: 4px solid #ff7043; color: #ffffff; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">
                        ${message}
                      </div>
                    </div>

                    <!-- BOUTON D'ACTION RAPIDE POUR RÉPONDRE AU CLIENT -->
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top: 30px;">
                      <tr>
                        <td align="center">
                          <a href="mailto:${email}?subject=Re:%20Votre%20demande%20BSD%20Sport" style="display: inline-block; padding: 14px 30px; background-color: #ff7043; color: #000000; font-size: 13px; font-weight: 800; text-decoration: none; border-radius: 50px; text-transform: uppercase; letter-spacing: 1px; box-shadow: 0 4px 15px rgba(255, 112, 67, 0.4);">
                            Répondre directement à ${nom} →
                          </a>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>

                <!-- FOOTER DISCRET -->
                <tr>
                  <td style="background-color: #0a0a0a; padding: 20px 30px; text-align: center; border-top: 1px solid rgba(255,255,255,0.06); font-size: 11px; color: #666666;">
                    Ce message a été envoyé automatiquement depuis le formulaire officiel du site <strong style="color: #888;">bsdsport.fr</strong>.
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `

    // Option Resend API
    if (process.env.RESEND_API_KEY) {
      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
        },
        body: JSON.stringify({
          from: `BSD Sport Website <onboarding@resend.dev>`,
          to: [RECIPIENT_EMAIL],
          reply_to: email,
          subject: `[Formulaire BSD] Nouveau contact : ${nom} (${profileTitle || 'Profil'})`,
          html: emailHtmlTemplate
        })
      })

      if (!resendRes.ok) {
        const errorData = await resendRes.json()
        throw new Error(errorData.message || 'Erreur d\'envoi Resend')
      }

      return res.status(200).json({ success: true, message: 'Message envoyé avec succès !' })
    }

    // Alternative via SMTP Direct (Nodemailer)
    if (!SMTP_PASS) {
      console.warn('SMTP_PASS non configuré sur Vercel. Simulation d\'envoi réussie pour les tests.')
      return res.status(200).json({ 
        success: true, 
        message: 'Message reçu (Mode simulation : pensez à configurer vos clés SMTP sur Vercel).' 
      })
    }

    const nodemailer = await import('nodemailer')
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"BSD Sport Formulaire" <${SMTP_USER}>`,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `[BSD Sport] Nouveau message de ${nom} (${profileTitle || 'Général'})`,
      html: emailHtmlTemplate,
    })

    return res.status(200).json({ success: true, message: 'Votre message a bien été envoyé !' })
  } catch (error) {
    console.error('Erreur API Contact Vercel:', error)
    return res.status(500).json({ 
      success: false, 
      error: 'Erreur lors de l\'envoi du message. Veuillez réessayer ou contacter directement contactbsdsport@gmail.com' 
    })
  }
}
