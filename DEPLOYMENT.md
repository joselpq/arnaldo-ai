# Deployment Guide for Arnaldo.ai

## Quick Deploy Steps

1. **Push to GitHub:**
```bash
git remote add origin https://github.com/YOUR-USERNAME/arnaldo-ai.git
git push -u origin main
```

2. **Deploy on Vercel:**
- Visit [vercel.com](https://vercel.com)
- Import GitHub repository
- Click Deploy

3. **Add Custom Domain:**
- Add `arnaldo.ai` in Vercel domains
- Update DNS records at your registrar

## DNS Configuration

### Option 1: Vercel Nameservers (Recommended)
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

### Option 2: A/CNAME Records
```
Type  | Name | Value
------|------|------------------------
A     | @    | 76.76.21.21
CNAME | www  | cname.vercel-dns.com
```

## Verify Deployment

- [ ] Site loads at arnaldo.ai
- [ ] SSL certificate active (https://)
- [ ] www redirects to apex domain
- [ ] All pages load correctly
- [ ] WhatsApp links work
- [ ] Forms capture data

## Update Process

```bash
# Make changes locally
git add .
git commit -m "Update description"
git push origin main
# Vercel auto-deploys within 1-2 minutes
```

## Monitoring

- Vercel Dashboard: Check build logs and analytics
- Domain Status: Verify in Vercel > Domains
- Performance: Use Vercel Analytics (free tier)

## Support

- Vercel Docs: https://vercel.com/docs
- DNS Propagation Check: https://dnschecker.org
```