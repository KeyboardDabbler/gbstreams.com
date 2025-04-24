# GBstreams Website 🌟

**GBstreams Website** is a passion project built to bring together the best features of various selfhosted apps into one sleek, unified platform. It’s designed to help me grow as a fullstack developer while creating something useful and fun. 🎬✨

---

## 🚀 Built With

- **Frontend:** [Nuxt 3](https://nuxt.com)
- **Backend:** Nitro server routes
- **Database:** [Prisma](https://www.prisma.io/) + SQLite
- **Libraries:**
  - [`@jellyfin/sdk`](https://github.com/jellyfin/sdk)
  - [`@nuxt/ui-pro`](https://ui.nuxt.com/pro)
  - [`@vue-email/components`](https://vue-email.com)
  - [`nuxt-auth-utils`](https://github.com/manniL/nuxt-auth-utils)
  - [Nodemailer](https://nodemailer.com)
- **Hosting:** Deployed on [Vercel](https://vercel.com)

---

## 🖼️ Previews

> _Coming soon: Screenshots or video demos of the app interface_

---

## ✅ Checklist Summary

### 🛠 Features Required Now before v1
- [ ] 

### 🕒 Additional Features (Planned)
- [ ] Server logs
- [ ] Token invite URLs
- [ ] Cron cleanup jobs
- [ ] Metrics & analytics
- [ ] API rate limiting / abuse prevention

---

## 🔮 Future Updates
- Backend API rate limiting via middleware
- Metrics dashboard: Signups per code/user
- Scheduled tasks with `defineNitroTasks()`:
  - Expired invite cleanup
  - Unused code cleanup
  - Stats reports

---

## ⚙️ Backend Flow: Nitro Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/jellyfin` | Login using Jellyfin, retrieve token |
| `GET`  | `/api/me` | Get logged-in user info |
| `GET`  | `/api/referrals` | Get current user referral stats |
| `POST` | `/api/invite/generate` | Admin: create an invite |
| `GET`  | `/api/invite/:code` | Validate invite on signup form |
| `POST` | `/api/signup` | Complete signup with a valid invite |
| `POST` | `/api/email/invite` | Send invite via email |
| `POST` | `/api/admin/user/:id` | Update user, assign invites, etc. |

---

## 📨 Invite Creation Logic

### Manual Admin Invites
Admin can set:
- Profile type
- Notification preference
- Number of uses
- Expiry toggle
- Duration (for timed access)
- Label (e.g., “Twitter promo”)

### Referral Invites
- Admin assigns referral quota to user
- System auto-generates invite codes
- Default config:
  - `type = MEMBER`
  - `expiry = none`
  - `uses = 1`
  - `duration = 30d`
  - `label = user name`

---

## 📄 License

This project is licensed under the **[MIT License](LICENSE)**.

---

## 🌟 Support

If you enjoy this project, please consider [starring ⭐ the repo](https://github.com/keyboarddabbler/gbstreams.com)!  
Contributions, feedback, and feature suggestions are all welcome! 🛠️

---

_Thanks for checking out GBstreams! 🎬_
